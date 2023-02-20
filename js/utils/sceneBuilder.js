import * as THREE from 'three';
import * as tetherCalculator from './tetherCalculator.js'

const tetherMaterial = new THREE.MeshPhongMaterial( 
	{ 
		color: 0xf7d011
	} 
);

export function bulidTethers(letters, scene, splineWidth){
	for (var i = 0; i < letters.length - 1; i++) {
		var exit = letters[i];
		var enter = letters[i + 1];

		var exit1 = tetherCalculator.calculatePosition(exit.exit1, exit.path.position);
		var enter1 = tetherCalculator.calculatePosition(enter.enter1, enter.path.position);
		var connectorDisplacementA1 = tetherCalculator.calculateDisplacement(exit1, enter1);
		var connectorDisplacementA2 = tetherCalculator.calculateDisplacement(exit1, enter1);

		addTetherToScene(exit1, enter1, connectorDisplacementA1, connectorDisplacementA2, splineWidth, scene);

		var exit2 = tetherCalculator.calculatePosition(exit.exit2, exit.path.position);
		var enter2 = tetherCalculator.calculatePosition(enter.enter2, enter.path.position);
		var connectorDisplacementB1 = tetherCalculator.calculateDisplacement(exit2, enter2);
		var connectorDisplacementB2 = tetherCalculator.calculateDisplacement(exit2, enter2);
		
		addTetherToScene(exit2, enter2, connectorDisplacementB1, connectorDisplacementB2, splineWidth, scene);

	}
}

function addTetherToScene(exit, enter, connectorDisplacement1, connectorDisplacement2, splineWidth, scene){

	let tether = new THREE.CatmullRomCurve3(
		[
			new THREE.Vector3( exit.x, exit.y, exit.z ),		
			new THREE.Vector3( connectorDisplacement1.x, connectorDisplacement1.y, connectorDisplacement1.z ),		
			new THREE.Vector3( connectorDisplacement2.x, connectorDisplacement2.y, connectorDisplacement2.z ),		
			new THREE.Vector3( enter.x, enter.y, enter.z )
		]
	)
	let geometry = new THREE.TubeGeometry( tether, 120, splineWidth, 15, false );
	let mesh = new THREE.Mesh( geometry, tetherMaterial );
	scene.add(mesh);
}
