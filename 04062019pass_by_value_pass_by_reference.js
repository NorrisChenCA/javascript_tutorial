let a = 1;

let change = (val) => {
	val = 2;
};

//try to change the a value in function change.
//but what it is doing is make copy of a pass the copy to change function. a value still equal to 1
change(a);

console.log(a);

let b = {num: 1};

let changeObj = (val) => {
	//here val memory address is equal to b;
	//but when val being re-assign val will recreate a new object. the val address is not equal to b anymore. 
	val = {};
};

changeObj(b);
//b still equal to {num: 1}
console.log(b);

let c = {num: 1};
let changeObj2 = (val) => {
	//here val doesn't being re-assign new address. val address still equal to c. it just change the obj property value.
	val.num = 2;
}

changeobj2(c);
//c now equal to {num: 2}
console.log(c);
