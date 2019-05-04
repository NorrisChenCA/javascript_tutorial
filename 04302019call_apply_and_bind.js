var obj = {num:2};

var addToThis = function(a, b, c) {
	return this.num + a + b + c;
};

var att = addToThis.call(obj, 3, 4, 1); // functionName.call(obj, functionArguments);
console.log(att);


var arr = [1, 2, 3];
var att2 = addToThis.apply(obj, arr);
console.log(att2);

var att3 = addToThis.bind(obj);  //return a function
console.dir(att3);
console.log(att3(1, 2, 3));