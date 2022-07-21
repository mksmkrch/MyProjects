const dino = document.getElementById('dino');
const cacto = document.getElementById('cacto');
//const score = document.getElementsByClassName('game_score');

var scoreInt = 0;

document.addEventListener("keydown", function() {
	dino.classList.toggle  ('jump');
	setTimeout( function() {
		dino.classList.remove('jump');
	}, 300);
	});
document.addEventListener("click", function() {
	dino.classList.toggle  ('jump');
	setTimeout( function() {
		dino.classList.remove('jump');
	}, 300);
	});

let isAlive = setInterval ( function(){
	let dinoBot = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
	let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));
	//let scoreInt = parseInt(score.innerHTML);

	if (cactoLeft < 40 && cactoLeft > 30 && dinoBot >=0 && dinoBot <= 60) {
		alert(`GAME OVER!!! \n score: ${scoreInt}`);
		scoreInt = 0;
		updateDisplay(scoreInt);
	}
	else if (cactoLeft == 0) {
		scoreInt++;
		//console.log(scoreInt);
		updateDisplay(scoreInt);
	} 
}, 1); 

function updateDisplay(val) {
	document.querySelector(".game_score").innerHTML = val;
}