let add = function(c) {
	console.log(this.a + this.b + c);
};

let obj = {a: 1, b: 2};

add.call(obj, 3);

// example 1:
let argsToArray = function(){
	//console.log(arguments);
	let arr = [].slice.call(arguments);
	console.log(arr);
};
argsToArray(1, 2, 3);

// example 2:
let mammal = function(legs) {
	this.legs = legs;
};

let cat = function(legs, isDomesticated){
	mammal.call(this, legs);
	this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
console.log(lion);

// example 3:
let numArray = [1, 2, 3];
console.log(Math.min(1, 2, 3));
let min = Math.min.apply(null, numArray);
console.log(min);