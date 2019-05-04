let f = () => {
	let i = 1;
	let j = 2;
	return () => {
		console.log(i);
	}
};

console.dir(f());

//what is the result below and why?
for(let i = 0; i < 3; i++){
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

console.log('after the loop');


//what is the result below and why?
for(var i = 0; i < 3; i++){
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

console.log('after the loop');