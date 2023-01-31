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
import { LetterN } from './letters/n.js'
import { LetterO } from './letters/o.js'
import { LetterP } from './letters/p.js'
import { LetterQ } from './letters/q.js'
import { LetterR } from './letters/r.js'
import { LetterS } from './letters/s.js'
import { LetterT } from './letters/t.js'
import { LetterU } from './letters/u.js'
import { LetterV } from './letters/v.js'
import { LetterW } from './letters/w.js'
import { LetterX } from './letters/x.js'
import { LetterY } from './letters/y.js'
import { LetterZ } from './letters/z.js'

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
const n = new LetterN(splineWidth, material).path
const o = new LetterO(splineWidth, material).path
const p = new LetterP(splineWidth, material).path
const q = new LetterQ(splineWidth, material).path
const r = new LetterR(splineWidth, material).path
const s = new LetterS(splineWidth, material).path
const t = new LetterT(splineWidth, material).path
const u = new LetterU(splineWidth, material).path
const v = new LetterV(splineWidth, material).path
const w = new LetterW(splineWidth, material).path
const x = new LetterX(splineWidth, material).path
const y = new LetterY(splineWidth, material).path
const z = new LetterZ(splineWidth, material).path

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
const textLine3 = new THREE.Group();

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
textLine2.add(n);
textLine2.add(o);
textLine2.add(p);
textLine2.add(q);

scene.add( textLine2 );

textLine3.add(r);
textLine3.add(s);
textLine3.add(t);
textLine3.add(u);
textLine3.add(v);
textLine3.add(w);
textLine3.add(x);
textLine3.add(y);
textLine3.add(z);

scene.add( textLine3 );



a.position.x = -160;
b.position.x = -120;
c.position.x = -80;
d.position.x = -40;
e.position.x = 0;
f.position.x = 40;
g.position.x = 80;
h.position.x = 120;
i.position.x = 160;

j.position.x = -140;
k.position.x = -100;
l.position.x = -60;
m.position.x = -20;
n.position.x = 20;
o.position.x = 60;
p.position.x = 100;
q.position.x = 140;

r.position.x = -160;
s.position.x = -120;
t.position.x = -80;
u.position.x = -40;
v.position.x = 0;
w.position.x = 40;
x.position.x = 80;
y.position.x = 120;
z.position.x = 160;


textLine1.position.y = 50;
textLine2.position.y = 0;
textLine3.position.y = -50;

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
	n.rotation.y = time / 2000;
	o.rotation.y = time / 2000;
	p.rotation.y = time / 2000;
	q.rotation.y = time / 2000;
	r.rotation.y = time / 2000;
	s.rotation.y = time / 2000;
	t.rotation.y = time / 2000;
	u.rotation.y = time / 2000;
	v.rotation.y = time / 2000;
	w.rotation.y = time / 2000;
	x.rotation.y = time / 2000;
	y.rotation.y = time / 2000;
	z.rotation.y = time / 2000;


	renderer.render( scene, camera );
}