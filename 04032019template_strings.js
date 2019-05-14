//backtick ``
let str = 'hello';
let str1 = "hello";
let str2 = `hello`;

let str3 = `hello 
	I am Martin.
`;

let x = `bond`;
let bondin = `my name is ${x}, James ${x}`;
console.log(bondin);

let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;
console.log(sum);

let tagged = function(strArray, ...vals) {
	console.log(strArray);
	console.log(vals);
}

tagged`adding ${one} and ${two} gives me ${one + two}`;

let raw =String.raw` Not a newline:\n`;
let raw1 =String` Not a newline:\n`;
console.log(raw);
console.log(raw1);