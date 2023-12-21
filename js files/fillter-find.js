const nums = [11, 22, 43, 11, 24, 43, 34.28, 65, 15];

//this arrow function will return the numbers which is getter then 20 in the array.
const result = nums.filter((e) => e > 20);
console.log(result);

// this arrow function will return only the first number which is getter then 25 in the array.
const result2 = nums.find((e) => e > 25);
console.log(result2);
