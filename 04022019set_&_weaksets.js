const ary = [1, 2, 3, 3, 5];

const mySet = new Set(ary);
mySet.add(1).add(2);

for(let val of mySet) {
	console.log(val);
}

console.log(mySet);

const ws = new WeakSet([{a:1}, {b:2}]);