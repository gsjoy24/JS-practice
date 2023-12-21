let num = [2, 5, 7, 8, 9, 3, 6, 3, 6, 3, 8];

// TODO: map has all access to every single element. A function in a map can hava 3 different parameters. whise is the element, index(position number) and the whole array.
num.map(function (element, index, array) {
	console.log(element, index, array);
});

// TODO: it will make square every element of the array, like 2 * 2 = 4.
const square = num.map(function (element) {
	return element * element;
});
// TODO: map always access and returns a array.
console.log(square);
