import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { LetterA } from './letters/a.js'
import { LetterB } from './letters/b.js'
import { LetterC } from './letters/c.js'
import { LetterD } from './letters/d.js'
import { LetterE } from './letters/e.js'
import { LetterF } from './letters/f.js'
import { LetterG } from './letters/g.js'
import { LetterH } from './letters/h.js'
import { LetterI } from './letters/i.js'
import { LetterJ } from './letters/j.js'
import { LetterK } from './letters/k.js'
import { LetterL } from './letters/l.js'
import { LetterM } from './letters/m.js'

const splineWidth = 2;
const material = new THREE.MeshPhongMaterial( { color: 0xf7d011 } );


const a = new LetterA(splineWidth, material).path
const b = new LetterB(splineWidth, material).path
const c = new LetterC(splineWidth, material).path
const d = new LetterD(splineWidth, material).path
const e = new LetterE(splineWidth, material).path
const f = new LetterF(splineWidth, material).path
const g = new LetterG(splineWidth, material).path
const h = new LetterH(splineWidth, material).path
const i = new LetterI(splineWidth, material).path
const j = new LetterJ(splineWidth, material).path
const k = new LetterK(splineWidth, material).path
const l = new LetterL(splineWidth, material).path
const m = new LetterM(splineWidth, material).path

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 4000 );
camera.position.z = 125;

const renderer = new THREE.WebGLRenderer({
	// antialias: true,
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

const textLine1 = new THREE.Group();
const textLine2 = new THREE.Group();

textLine1.add(a);
textLine1.add(b);
textLine1.add(c);
textLine1.add(d);
textLine1.add(e);
textLine1.add(f);
textLine1.add(g);
textLine1.add(h);
textLine1.add(i);
scene.add( textLine1 );

textLine2.add(j);
textLine2.add(k);
textLine2.add(l);
textLine2.add(m);

scene.add( textLine2 );



a.position.x = -160;
b.position.x = -120;
c.position.x = -80;
d.position.x = -40;
f.position.x = 40;
g.position.x = 80;
h.position.x = 120;
i.position.x = 160;

j.position.x = -160;
k.position.x = -120;
l.position.x = -80;
m.position.x = -40;

textLine1.position.y = 50;
textLine2.position.y = 0;

const light = new THREE.AmbientLight( 0xffffff, 0.75 ); // soft white light
scene.add( light );

const light1 = new THREE.PointLight( 0xffc539, 0.5, 0 );
// light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xf4bd82 } ) ) );
light1.position.set( 200, 40, 40 );

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
	h.rotation.y = time / 2000;
	i.rotation.y = time / 2000;
	j.rotation.y = time / 2000;
	k.rotation.y = time / 2000;
	l.rotation.y = time / 2000;
	m.rotation.y = time / 2000;


	renderer.render( scene, camera );
}