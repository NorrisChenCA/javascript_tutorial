/* Destructuring */

// Assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};
// assign the object variables to x, y, z
//var x = voxel.x;
//var y = voxel.y;
//var z = voxel.z;

// it can be done by that below
const {x, y, z} = voxel;
console.log(x);
console.log(y);
console.log(z);

//we also can do that below
//what is doing here is get value x, y, z from voxel and copy it to a, b, c;
const {x: a, y: b, z: c} = voxel;
console.log(a);
console.log(b);
console.log(c);


// assign variables from nested objects
const nest = {
	start: {x: 5, y: 6},
	end: {x: 7, y: -9}
};
const {start: {x: startX, y: startY}} = nest;
console.log(startX);
console.log(startY);



// assign variables from Arrays
// what is doing here is get first and assign them to q and r
const [q, r] = [1, 2, 3, 4, 5];
console.log(q, r); // q = 1, r = 2
// we also can commas as index to control which value in array to assign to j and k.
const [j,,, k] = [1, 2, 3, 4, 5];
console.log(j, k); // j = 1, k = 4



// Rest Operator to Reassign Array Elements
// ... is the Rest Operator
const [l, m, ...rest] = [1, 2, 3, 4, 5];
console.log(l, m); // assign the first and second elememts to l and m
console.log(rest); // the rest of array assign to the rest


// Pass an Object as a function's parameters
const Person = {name: 'martin', age: 30, nationality: 'Chinese', location: 'Ottawa'};
// two ways to get variables from Person object
// way 1:
const profileUpdate = (person) => {
	const {name, age, nationality, location} = person;
}
//way 2:
const profileUpdate2 = ({name, age, nationality, location}) => {
	console.log(name);
}
// you need to get all the variables, you can just get the variables as you want
const profileUpdate3 = ({name, age}) => {
	console.log(name);
}