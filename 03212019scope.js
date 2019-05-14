var global = 'global';

function a() {
	var global = 'redefining global';  //defining a new variable 'global' scope just in function a()
	
	console.log('from function a(): ' + global);
}

a();

console.log('from after function a() excution:' + global);  //what is console log here?