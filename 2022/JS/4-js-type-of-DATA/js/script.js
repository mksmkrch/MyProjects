for (let i = 0; i<5; i++)
	console.log("Цикл for: " + (i+1));
let i = 1;
while (i<6) console.log("Цикл while: " + (i++));

let j = 1;
do {
	console.log("Цикл do... while: " + (j++));
} while (j <6);

let num = 8;
while (num) console.log(num--);
//Тут последний раз выведется 1, потому что num-- станет 0 после вывода 1

for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}


metka: for (let num = 0; num < 2; num++) {
	console.log (num);
	for (let size = 0; size <5; size++) {
		console.log("Size" + size);
		if (size == 3) break metka;
	}
};


let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
console.log(user);
console.log(userInfo);
userInfo = null;
console.log(user);
console.log(userInfo);
user.showInfo();
userInfo = user;
console.log(userInfo);

userInfo.showInfo();


function UserInfo(name) {
	// body...
	this.name = name;
	this.age = 30;
	return name;
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));