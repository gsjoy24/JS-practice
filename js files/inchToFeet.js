function inchToFeet(inch) {
	return inch / 12;
}

var math1 = inchToFeet(156);
console.log(math1);

var math2 = inchToFeet(556);
console.log(math2.toFixed(2));

var math3 = inchToFeet(180);
console.log(math3);

var math4 = inchToFeet(200);
console.log(math4.toFixed(2));

var math5 = inchToFeet(500);
console.log(parseFloat(math5.toFixed(2)));
