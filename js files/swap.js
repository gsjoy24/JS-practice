let a = 3;
let b = 4;
console.log('before swap a = ' + a, 'b =' + b);

let temp = a;
a = b;
b = temp;
console.log('after swap a = ' + a, 'b =' + b);

let p = 5;
let q = 6;
console.log('before swap p = ' + p, 'q =' + q);
[p, q] = [q, p];
console.log('after swap p = ' + p, 'q =' + q);
