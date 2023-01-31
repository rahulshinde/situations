import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { LetterS } from './letters/s.js'
import { LetterL } from './letters/l.js'
import { LetterI } from './letters/i.js'
import { LetterM } from './letters/m.js'
import { LetterE } from './letters/e.js'

const splineWidth = 2;
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

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 4000 );
camera.position.z = 125;

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

scene.add(s.path);
scene.add(l.path);
scene.add(i.path);
scene.add(m.path);
scene.add(e.path);


s.path.position.x = -10;
s.path.position.y = 80;
s.path.position.z = -30;

l.path.position.x = -60;
l.path.position.y = -0;
l.path.position.z = 20;

i.path.position.x = 10;
i.path.position.y = 40;
i.path.position.z = 30;

m.path.position.x = 0;
m.path.position.y = 0;
m.path.position.z = -20;

e.path.position.x = 10;
e.path.position.y = -40;
e.path.position.z = -45;

// s to l

let connector1a = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( s.exit1[0] + s.path.position.x, s.exit1[1] + s.path.position.y, s.exit1[2] + s.path.position.z ),		new THREE.Vector3( l.enter1[0] + l.path.position.x, l.enter1[1] + l.path.position.y, l.enter1[2] + l.path.position.z )
	]
)

let connector1b = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( s.exit2[0] + s.path.position.x, s.exit2[1] + s.path.position.y, s.exit2[2] + s.path.position.z ),
		new THREE.Vector3( l.enter2[0] + l.path.position.x, l.enter2[1] + l.path.position.y, l.enter2[2] + l.path.position.z )
	]
)

let geometryConnector1a = new THREE.TubeGeometry( connector1a, 60, splineWidth, 15, false );
let geometryConnector1b = new THREE.TubeGeometry( connector1b, 60, splineWidth, 15, false );

let meshConnector1a = new THREE.Mesh( geometryConnector1a, material2 );
let meshConnector1b = new THREE.Mesh( geometryConnector1b, material2 );

scene.add(meshConnector1a);
scene.add(meshConnector1b);

// l to i

let connector2a = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( l.exit1[0] + l.path.position.x, l.exit1[1] + l.path.position.y, l.exit1[2] + l.path.position.z ),
		new THREE.Vector3( i.enter1[0] + i.path.position.x, i.enter1[1] + i.path.position.y, i.enter1[2] + i.path.position.z )
	]
)

let connector2b = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( l.exit2[0] + l.path.position.x, l.exit2[1] + l.path.position.y, l.exit2[2] + l.path.position.z ),
		new THREE.Vector3( i.enter2[0] + i.path.position.x, i.enter2[1] + i.path.position.y, i.enter2[2] + i.path.position.z )
	]
)

let geometryConnector2a = new THREE.TubeGeometry( connector2a, 60, splineWidth, 15, false );
let geometryConnector2b = new THREE.TubeGeometry( connector2b, 60, splineWidth, 15, false );

let meshConnector2a = new THREE.Mesh( geometryConnector2a, material2 );
let meshConnector2b = new THREE.Mesh( geometryConnector2b, material2 );

scene.add(meshConnector2a);
scene.add(meshConnector2b);

// i to m

let connector3a = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( i.exit1[0] + i.path.position.x, i.exit1[1] + i.path.position.y, i.exit1[2] + i.path.position.z ),
		new THREE.Vector3( m.enter1[0] + m.path.position.x, m.enter1[1] + m.path.position.y, m.enter1[2] + m.path.position.z )
	]
)

let connector3b = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( i.exit2[0] + i.path.position.x, i.exit2[1] + i.path.position.y, i.exit2[2] + i.path.position.z ),
		new THREE.Vector3( m.enter2[0] + m.path.position.x, m.enter2[1] + m.path.position.y, m.enter2[2] + m.path.position.z )
	]
)

let geometryConnector3a = new THREE.TubeGeometry( connector3a, 60, splineWidth, 15, false );
let geometryConnector3b = new THREE.TubeGeometry( connector3b, 60, splineWidth, 15, false );

let meshConnector3a = new THREE.Mesh( geometryConnector3a, material2 );
let meshConnector3b = new THREE.Mesh( geometryConnector3b, material2 );

scene.add(meshConnector3a);
scene.add(meshConnector3b);

// i to m

let connector4a = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( m.exit1[0] + m.path.position.x, m.exit1[1] + m.path.position.y, m.exit1[2] + m.path.position.z ),
		new THREE.Vector3( e.enter1[0] + e.path.position.x, e.enter1[1] + e.path.position.y, e.enter1[2] + e.path.position.z )
	]
)

let connector4b = new THREE.CatmullRomCurve3(
	[
		new THREE.Vector3( m.exit2[0] + m.path.position.x, m.exit2[1] + m.path.position.y, m.exit2[2] + m.path.position.z ),
		new THREE.Vector3( e.enter2[0] + e.path.position.x, e.enter2[1] + e.path.position.y, e.enter2[2] + e.path.position.z )
	]
)

let geometryConnector4a = new THREE.TubeGeometry( connector4a, 60, splineWidth, 15, false );
let geometryConnector4b = new THREE.TubeGeometry( connector4b, 60, splineWidth, 15, false );

let meshConnector4a = new THREE.Mesh( geometryConnector4a, material2 );
let meshConnector4b = new THREE.Mesh( geometryConnector4b, material2 );

scene.add(meshConnector4a);
scene.add(meshConnector4b);

const light = new THREE.AmbientLight( 0xffffff, 0.75 ); // soft white light
scene.add( light );

const light1 = new THREE.PointLight( 0xffc539, 0.5, 0 );
// light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xf4bd82 } ) ) );
light1.position.set( 200, 40, 40 );

scene.add( light1 );

document.body.appendChild( renderer.domElement );

function animation( time ) {
	renderer.render( scene, camera );
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}