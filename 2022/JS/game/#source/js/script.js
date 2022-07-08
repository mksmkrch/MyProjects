const dino = document.getElementById('dino');
const cacto = document.getElementById('cacto');

document.addEventListener("keydown", function() {
	dino.classList.toggle  ('jump');
	setTimeout( function() {
		dino.classList.remove('jump');
	}, 300);
	});
 
let isAlive = setInterval ( function(){
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

	if (cactoLeft < 50 && cactoLeft > 0 && dinoTop >=137.5) {
		alert("GAME OVER!!!");
	}
}, 10);