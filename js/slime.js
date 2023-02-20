import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { LetterS } from './letters/s.js'
import { LetterL } from './letters/l.js'
import { LetterI } from './letters/i.js'
import { LetterM } from './letters/m.js'
import { LetterE } from './letters/e.js'

import * as sceneBuilder from './utils/sceneBuilder.js'
import * as tetherCalculator from './utils/tetherCalculator.js'

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

const s = new LetterS(splineWidth, material)
const l = new LetterL(splineWidth, material)
const i = new LetterI(splineWidth, material)
const m = new LetterM(splineWidth, material)
const e = new LetterE(splineWidth, material)

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 200;

const renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );

const cameraControls = new OrbitControls(camera, renderer.domElement);
cameraControls.target.set( 0, 0, 0);
cameraControls.maxDistance = 400;
cameraControls.minDistance = 30;
cameraControls.update();

const scene = new THREE.Scene();
const group = new THREE.Group();

group.add(s.path);
group.add(l.path);
group.add(i.path);
group.add(m.path);
group.add(e.path);


s.path.position.x = -40;
s.path.position.y = 20;
s.path.position.z = 30;

l.path.position.x = -20;
l.path.position.y = -0;
l.path.position.z = 20;

i.path.position.x = 10;
i.path.position.y = 20;
i.path.position.z = 30;

m.path.position.x = 20;
m.path.position.y = 0;
m.path.position.z = -20;

e.path.position.x = 40;
e.path.position.y = -20;
e.path.position.z = -45;

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