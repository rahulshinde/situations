import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

import { LetterS } from './letters/s.js'
import { LetterI } from './letters/i.js'
import { LetterT } from './letters/t.js'
import { LetterU } from './letters/u.js'
import { LetterA } from './letters/a.js'
import { LetterO } from './letters/o.js'
import { LetterN } from './letters/n.js'
import { SymbolParenthesesL } from './symbols/parenthesesL.js'
import { SymbolParenthesesR } from './symbols/parenthesesR.js'

import * as sceneBuilder from './utils/sceneBuilder.js'
import * as mergeMesh from './utils/mergeMesh.js'

const splineWidth = 3;
const material = new THREE.MeshPhongMaterial( 
	{ 
		color: 0xf7d011 
	} 
);
const material2 = new THREE.MeshPhongMaterial( 
	{ 
		color: 0xf7d011 
	} 
);

// Interaction controls
const raycaster = new THREE.Raycaster();
let pointerDown = false;
const pointer = new THREE.Vector2();
const onUpPosition = new THREE.Vector2();
const onDownPosition = new THREE.Vector2();
let transformControl;



const s = new LetterS(splineWidth, material).path;
const i = new LetterI(splineWidth, material).path;
const t = new LetterT(splineWidth, material).path;
const parenthesesL = new SymbolParenthesesL(splineWidth, material).path;
const u = new LetterU(splineWidth, material).path;
const a = new LetterA(splineWidth, material).path;
const t2 = new LetterT(splineWidth, material).path;
const i2 = new LetterI(splineWidth, material).path;
const o = new LetterO(splineWidth, material).path;
const n = new LetterN(splineWidth, material).path;
const parenthesesR = new SymbolParenthesesR(splineWidth, material).path;

console.log(s);

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 200;

const renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );

const scene = new THREE.Scene();
const group = new THREE.Group();

const cameraControls = new OrbitControls(camera, renderer.domElement);
cameraControls.target.set( 0, 0, 0);
cameraControls.maxDistance = 400;
cameraControls.minDistance = 30;
cameraControls.update();
cameraControls.addEventListener( 'change', animation );

document.addEventListener( 'pointerdown', onPointerDown );
document.addEventListener( 'pointerup', onPointerUp );
document.addEventListener( 'pointermove', onPointerMove );
document.addEventListener( 'keyup', setKeyCommand );
window.addEventListener( 'resize', onWindowResize );
				

transformControl = new TransformControls( camera, renderer.domElement );
transformControl.addEventListener( 'change', animation );
transformControl.addEventListener( 'dragging-changed', function ( event ) {

	cameraControls.enabled = ! event.value;

} );

transformControl.translationSnap = 20;
transformControl.rotationSnap = 0.7853982;

scene.add( transformControl );

const splineHelperObjects = [];

group.add(s);
group.add(i);
group.add(t);
group.add(parenthesesL);
group.add(u);
group.add(a);
group.add(t2);
group.add(i2);
group.add(o);
group.add(n);
group.add(parenthesesR);

// u.position.x = -222;
s.position.x = -222;
i.position.x = -182;
t.position.x = -142;
parenthesesL.position.x = -102;
u.position.x = -62;
a.position.x = -22;
t2.position.x = 23;
i2.position.x = 62;
o.position.x = 102;
n.position.x = 142;
parenthesesR.position.x = 182;

let s_mesh = mergeMesh.getChildMeshes(s);
let i_mesh = mergeMesh.getChildMeshes(i);
let t_mesh = mergeMesh.getChildMeshes(t);
let parenthesesL_mesh = mergeMesh.getChildMeshes(parenthesesL);
let u_mesh = mergeMesh.getChildMeshes(u);
let a_mesh = mergeMesh.getChildMeshes(a);
let t2_mesh = mergeMesh.getChildMeshes(t2);
let i2_mesh = mergeMesh.getChildMeshes(i2);
let o_mesh = mergeMesh.getChildMeshes(o);
let n_mesh = mergeMesh.getChildMeshes(n);
let parenthesesR_mesh = mergeMesh.getChildMeshes(parenthesesR);

console.log(s_mesh);

splineHelperObjects.push({
	'object': s,
	'mesh': s_mesh 
});
splineHelperObjects.push({
	'object': i,
	'mesh': i_mesh 
});
splineHelperObjects.push({
	'object': t,
	'mesh': t_mesh 
});
splineHelperObjects.push({
	'object': parenthesesL,
	'mesh': parenthesesL_mesh 
});
splineHelperObjects.push({
	'object': u,
	'mesh': u_mesh 
});
splineHelperObjects.push({
	'object': a,
	'mesh': a_mesh 
});

splineHelperObjects.push({
	'object': t2,
	'mesh': t2_mesh 
});

splineHelperObjects.push({
	'object': i2,
	'mesh': i2_mesh 
});

splineHelperObjects.push({
	'object': o,
	'mesh': o_mesh 
});

splineHelperObjects.push({
	'object': n,
	'mesh': n_mesh 
});
splineHelperObjects.push({
	'object': parenthesesR,
	'mesh': parenthesesR_mesh 
});



// sceneBuilder.bulidTethers([s, l, i, m, e], group, splineWidth);

scene.add(group);


const light = new THREE.AmbientLight( 0xffffff, 0.75 ); // soft white light
scene.add( light );

const light1 = new THREE.PointLight( 0xffc539, 0.5, 0 );
// light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xf4bd82 } ) ) );
light1.position.set( 200, 40, 40 );

scene.add( light1 );

document.body.appendChild( renderer.domElement );

function animation( time ) {
	// group.rotation.y = time / 3000;
	renderer.render( scene, camera );
}

function onPointerDown( event ) {
	onDownPosition.x = event.clientX;
	onDownPosition.y = event.clientY;
	pointerDown = true;

}

function onPointerUp( event ) {

	onUpPosition.x = event.clientX;
	onUpPosition.y = event.clientY;

	pointerDown = false;

	if ( onDownPosition.distanceTo( onUpPosition ) === 0 ) transformControl.detach();

}

function onPointerMove( event ) {

	if (pointerDown){
		return;
	}

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( pointer, camera );

	console.log("intersects");
	console.log(splineHelperObjects[0])
	splineHelperObjects.forEach((objectToAdd)=>{
		let intersects = raycaster.intersectObjects( objectToAdd.mesh, false );
		if ( intersects.length > 0 ) {
			if ( objectToAdd.object !== transformControl.object ) {
				transformControl.attach( objectToAdd.object );
			}

		}
	})



	const intersects = raycaster.intersectObjects( splineHelperObjects[0], false );

	console.log(intersects);

	if ( intersects.length > 0 ) {

		const object = intersects[ 0 ].object;

		if ( object !== transformControl.object ) {

			transformControl.attach( s );

		}

	}

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function setKeyCommand(event){
	if (event.keyCode === 82){
		transformControl.mode = 'rotate';
	}
	if (event.keyCode === 84){
		transformControl.mode = 'translate';
	}
}