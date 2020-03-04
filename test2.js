// SOME FUNCTIONS WITH FUNCTIONS AS ARGUMENTS ####################

function rage() {
	console.log('I HATE EVERTHING');
}

function cry() {
	console.log('BOO HOO I AM SAD');
}

function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

// repeatNTimes(rage, 13);

function pickOne(f1, f2) {
	let rand = Math.random();
	if (rand < 0.5) {
		f1();
	} else {
		f2();
	}
}

pickOne(rage, cry);

// FUNCTIONS BEING RETURNED FROM FUNCTIONS ######################

function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

function makeBetweenFunc(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(16, 24);
