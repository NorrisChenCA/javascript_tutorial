let x = {a = 1, b = 2};

let add = ({a = 0, b = 0} = {}) = {
	return a + b;
}

console.log(add());
console.log(add(x));