const a = {};
const b = {num: 1};

const map = new Map();

map.set(a, 'a');
map.set(b, 'b');
//in map key is uniqe and the new key value will override the old key value
map.set(a, 'new a');

//map.delete(b);

for(let [key, value] of map.entries()){
	console.log(key, value);
};

//convert map into two dimantion array
const ary = [...map];

console.dir(map);


//weakmap
{
	let x = {
		a:[1,2]
	};
	
	var map1 = new Map();
	map.set(x, 'something');
}

{
	let y = {
		a: [1,2]
	};
	var map2 = new Map();
	map.set(y, 'something');
	
}
//the different between map1 and map2
console.log(map1);
console.log(map2);

