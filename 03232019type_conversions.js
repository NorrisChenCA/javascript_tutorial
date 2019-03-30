let x = 2 + '2';
console.log(x);

let y = 2 + 2 + '2';
console.log(y);

let j = 2 + true;
console.log(j);

let k = 2 + true + '2';
console.log(k);

let z = true + '2';
console.log(z);

let l = Number('Hello');
console.log(l);

let m = Boolean(0);
console.log(m);
let o = Boolean(1);
console.log(o);
let p = Boolean(5);
console.log(p);
let q = Boolean('Hello');
console.log(q);
let r = Boolean('');
console.log(r);
let s = Boolean(undefined);
console.log(s);
let t = Boolean(null);
console.log(t);
//object always true;
if([]) {
	console.log('object is alway true!');
}