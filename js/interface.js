import * as sceneBuilder from './utils/sceneBuilder.js'

var disallowedKeys = [
	32,
	190,
	188
]


function init(){
	sceneBuilder.initScene();
	interfaceEventHandlers();
}

function interfaceEventHandlers(){
	document.querySelectorAll('.character').forEach((char) =>{
		char.addEventListener('click', () => {
			sceneBuilder.addLetter(char.dataset.character);
		})
	});
}

init();