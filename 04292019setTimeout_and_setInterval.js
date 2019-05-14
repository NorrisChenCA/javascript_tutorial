var message = () => {
	console.log('greetings from setTimeout');
}

var timeoutID = setTimeout(message, 5000);

clearTimeout(timeoutID);


var message2 = () => {
	console.log('greetings from setInterval');
}

var timeoutID2 = setInterval(message2, 5000);
clearInterval(timeoutID2);