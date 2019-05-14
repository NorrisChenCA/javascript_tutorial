let toyota = {
	drive(){
		return 'driving toyota';
	}
};

let camry = {
	// camry has the same function as prototype. it will use the function except the function in prototype.
	drive(){
		//here is calling the super class function
		return `${super.driver()} camry`;
	},
	wifi() {
		return 'wifi single';
	}
};

console.log(camry);
Object.setPrototypeOf(camry, toyota) //the params are destemation object, source object
console.log(camry);//check the different before and after
