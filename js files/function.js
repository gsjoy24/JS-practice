// simple call of a function
function writeSomething() {
	console.log('Good morning');
}
writeSomething();

// return something with a function
function math(num1, num2) {
	var result = num1 + num2;
	return result; //if we return something, then we have to store the function in a variable. then have to console log the variable.
}
var total = math(10, 10);
console.log(total);


