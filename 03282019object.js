//how to create object
// 1 Non-function Object
var x = new Object();
console.log(x);
var y = {};
console.log(y);

var Pizza = {
	crust: 'thin',
	toppings: 3,
	hasBacon: true,
	howmanyToppings: function() {
		return this.toppings;
	}
}

Pizza.price = '$12';

console.log(Pizza.howmanyToppings());

console.log(Pizza);

delete(Pizza.crust);
console.log(Pizza);


// 2 function Object
var Pizza1 = function(){
	//public variant
	this.crust = 'thin';
	this.toppings = 3;
	this.hasBacon = true;
}

// this will be crust undefined. undefined is not an error.
//console.dir(Pizza1.crust); // you can not access crust like this.
var PizzaA = new Pizza1();
console.log(PizzaA.crust); // now you can access crust.

console.log(PizzaA instanceof Pizza1);
console.log(PizzaA.constructor);


var Pizza2 = function(){
	//private variant
	var crust = 'thin';
	var topping = 3;
	
	//public variant
	this.hasBacon = true;
	
	this.getHasBacon = function() {
		return this.hasBacon;
	}
	
	this.getCrust = function() {
		return crust;
	}
	
	var getToppings = function() {
		return topping;
	};
	
	var tmp = {};
	tmp.getToppings = getToppings;
	
	return tmp;
};

var pizzaC = new Pizza2();
console.dir(pizzaC); // can find hasBacon, But can't find crust because it is private variant.
console.log(pizzaC.getHasBacon());
//console.log(pizzaC.getCrust());

//console.log(pizzaC.getTopping());

