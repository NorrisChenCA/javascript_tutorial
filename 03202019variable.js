
(function() {
	(function() {
		(function() {
			i = 1; //i automaticlly become global variant
		})()
	})()
})()

console.log(i); // print 1, if add "use strict"; at the first line. i is not define error


(function() {
	var i = 1;
	if(true) {
		var i = 3;
		console.log(i);		//print 3
	}
	console.log(i);		//print 3
}
)()