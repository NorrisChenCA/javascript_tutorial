let toyota = {
	drive() {
		return 'driving toyota';
	},
	break() {
		return 'breaking toyota';
	}
};

let camry = {
	drive() {
		return 'driving camry';
	},
	wifi(){
		return 'using wifi';
	}
};

//assign will copy all the functions in toyota to camry. if there is same function name. it will use toyota's function
Object.assign(camry, toyota);

console.dir(camry);
console.log(camry.drive()); //here it will print 'driving toyota'

//assign copy toyota object to a new object call copyToyota object
let copyToyota = Object.assign({}, toyota);
console.dir(copyToyota);

//assign can add new function to an object.
Object.assign(toyota, {
	wifi() {
		return 'using wifi';
	},
	color: 'red'
});

console.dir(toyota); // here wifi function and color preperty added to toyota object.

//an other example:
let c1 = function(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

//we can using assign to finish it.
let c1 = function(x, y, z) {
	Object.assign(this, {x, y, z});
}