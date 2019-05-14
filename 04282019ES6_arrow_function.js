"use strict";

var getA = function(a) {
	return a;
};
// the function below is the same as above:
let getA2 = a => a;

//or you do it like this with {}, but need return in side {}
let getA3 = (a) => { return a };

// or you can do it like this
var a = 4;
let square = _ => { return a*a };

///////////////////////

//the Arrow function don't have "this" consept. it just can get this from parent.
var x = function() {
	this.val = 1;
	setTimeout(() => {
		this.val++;
		console.log(this.val)
	},1)
};

var xx = new x();

var x2 = function(){
	console.log(arguments[0])
}

//change the x2 function into arrow function.
var x3 = (...n) => {
	console.log(n[0]);
}

x2(1,2,3);
x3(1,2,3);