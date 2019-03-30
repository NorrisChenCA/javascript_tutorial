const ary = [1,2,3];

ary[-1] = 0; //here -1 is the key and value is 0. storing in the arry.

console.log(ary); 

ary['key'] = 'this is value',

// in javascript the arry is similar to object. the different is object doesn't have length
const ary = [1,2,3];
const obj = {};
obj[0] = 1;
obj[1] = 2;
obj[2] = 3;
console.log(obj);
console.log(ary);

//performace is add element in the end of the array is faster
//if insert an element in the middle of object is faster.