//creating a arrey
var friendsAge = [12, 21, 33, 42, 12, 3];
console.log(friendsAge); //result  [12, 21, 33, 42, 12, 3];

// update value of friendsAge. 42 to 22.
friendsAge[3] = 22;
console.log(friendsAge); //result [12, 21, 33, 22, 12, 3];

// finding position number of any value of friendsAge
var position = friendsAge.indexOf(21);
console.log(position); //result 2

//add a value to friendsAge's first position
friendsAge.unshift(88);
console.log(friendsAge); //result  [88, 12, 21, 33, 42, 12, 3];

//remove a value from friendsAge's first position
friendsAge.shift();
console.log(friendsAge); //result  [12, 21, 33, 42, 12, 3]; removed 88 from the arrey;

//add a value to friendsAge's last position
friendsAge.push(99);
console.log(friendsAge); //result  [12, 21, 33, 42, 12, 3, 99];

//remove a value from friendsAge's last position
friendsAge.pop();
console.log(friendsAge); //result  [12, 21, 33, 42, 12, 3]; removed 99 from the arrey;

//finding the length of friendsAge
console.log(friendsAge.length); //result 6

//taking a part from friendsName. .slice(2,5) stating from 2(fahad) and ends at 4 (Akash). number 5 will not included.
var friendsName = ['Mamun', 'Sumon', 'Fahad', 'Jahid', 'Akash', 'Ali', 'Sumi', 'Kanta'];
var part = friendsName.slice(2, 5);
console.log(friendsName);
console.log(part); //result [ 'Fahad', 'Jahid', 'Akash' ]

//concat 2 arreys
const nums = [1, 2, 3];
const num2 = [4, 5, 6];
console.log(nums.concat(num2)); // result [ 1, 2, 3, 4, 5, 6 ]
