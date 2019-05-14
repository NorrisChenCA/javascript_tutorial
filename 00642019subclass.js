class Mammal {
	constructor(_legs, _name="jon doe"){
		this.legs = _legs;
		this.name = _name;
		this.warmBlooded = true;
	}
	
	walk() {
		return `${this.name} is working`;
	}
}

class Bat extends Mammal{
	constructor(_legs, _name, _eatsMeat){
		super(_legs, _names);
		this.eatsMeat = _eatsMeat;
	}
	
	fly() {
		return `${this.name} is flying`;
	}
	
	walk() {
		let holding = this.eatsMeat ? 'bug' : 'carrot';
		return `${super.walk()} with a ${holding}`; 
	}
}

let fruitBat = new Bat(4, 'peter', false);
console.log(fruitBat.walk());

//example 2
class Mammal2 = {
	constructor(a,b,c,d,e) {
		Object.assign(this, {a,b,c,d,e});
	}
}

class Bat extends Mammal2{
	constructor(f, ...args){
		super(...args);
		this.f = f;
	}
}

const newBat = new Bat('f', 'a', 'b', 'c', 'd', 'e');
console.log(newBat);
