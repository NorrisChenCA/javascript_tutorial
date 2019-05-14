//display array constructor prototype methods
console.dir(Array);

//display array prototype methods
console.dir([]);

//Array.from can create array from something
//example 1:
//the code below has the same result
let str="techsith";
console.log([...str]);
const fromString = Array.from(str);
console.log(fromString);

//example 2:
const fromScratch = (new Array(5)).fill().map((value, index) => index * index); //is the same result with below
//const fromScratch = Array.from({length: 5}, (value, index) => index * index);
console.log(fromScratch);

//example 3:
const ary = [1,1,2];
const unique = Array.from(new Set(ary)); //is the same result with below
//const unique = [...new Set(ary)];
console.log(unique);

//example 4:
const func = function() {
	//change the function arguments to array and then join the array elements into string.
	const args = Array.from(arguments).join('');
	console.log(args);
}

func('t', 'e', 'c', 'h', 's', 'i', 't', 'h');