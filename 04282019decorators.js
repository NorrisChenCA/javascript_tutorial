let lipstick = function(target) {
	target.lips = 'pink';
};

@lipstick
class Girl{

}

console.log(`her lips are ${Girl.lips}`);

let lipstick2 = function(color) {
	return function(target) {
		target.lips = color;
	}
};

let earrings = function(target){
	target.hasEarring = true;
}

@earrings
@lipstick2('black')
class Girl2{
	
}

console.log(`Her lips are ${Girl2.lips} and she has errrings = ${Girl2.hasEarring}`);

