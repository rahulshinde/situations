import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { LetterA } from './letters/a.js'
import { LetterB } from './letters/b.js'
import { LetterC } from './letters/c.js'
import { LetterD } from './letters/d.js'
import { LetterE } from './letters/e.js'
import { LetterF } from './letters/f.js'
import { LetterG } from './letters/g.js'

const splineWidth = 1.5;
const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );


const a = new LetterA(splineWidth, material).path
const b = new LetterB(splineWidth, material).path
const c = new LetterC(splineWidth, material).path
const d = new LetterD(splineWidth, material).path
const e = new LetterE(splineWidth, material).path
const f = new LetterF(splineWidth, material).path
const g = new LetterG(splineWidth, material).path

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 4000 );
camera.position.z = 125;

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );

const cameraControls = new OrbitControls(camera, renderer.domElement);
cameraControls.target.set( 0, 0, 0);
cameraControls.maxDistance = 400;
cameraControls.minDistance = 30;
cameraControls.update();

const scene = new THREE.Scene();

scene.add(a);
scene.add(b);
scene.add(c);
scene.add(d);
scene.add(e);
scene.add(f);
scene.add(g);

a.position.x = -160;
b.position.x = -120;
c.position.x = -80;
d.position.x = -40;
f.position.x = 40;
g.position.x = 80;

const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
scene.add( light );

const light1 = new THREE.PointLight( 0xf7942a, 1, 4500 );
// light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xf4bd82 } ) ) );
light1.position.set( 20, 0, 10 );

scene.add( light1 );

document.body.appendChild( renderer.domElement );

function animation( time ) {
	a.rotation.y = time / 2000;
  b.rotation.y = time / 2000;
	c.rotation.y = time / 2000;
	d.rotation.y = time / 2000;
	e.rotation.y = time / 2000;
	f.rotation.y = time / 2000;
	g.rotation.y = time / 2000;


	renderer.render( scene, camera );
}