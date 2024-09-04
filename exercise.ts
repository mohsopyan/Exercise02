// Soal 1 "Write a code to check whether the number is odd or even"
// let _num: number = 25;
let _num: number = 2;

if(_num % 2 === 0) {
    console.log(`${_num} adalah bilangan genap`);
} else {
    console.log(`${_num} adalah bilangan ganjil`);
}

// ==========================================================================

// Soal 2 "Write a code to check whether the number is prime number or not"
let _number: number = 6;
// let _number: number = 7;

let x: number = 0;
let primeOrNot: string;

for(let i = 1; i <= _number; i++) {
    if (_number % i === 0) {
        x++
    }
}

primeOrNot = x == 2 ? `${_number} is prime number` : `${_number} is not prime number`;
console.log(primeOrNot);

// ===============================================================================

// Soal 3 "Write a code to find the sum of the numbers 1 to N"
// cara 1
let _num2: number = 3;
// let _num2: number = 5;

let _jumlah: number = 0;

for(let i = 1; i <= _num2; i++) {
    _jumlah += i;
}
console.log(_jumlah)

// cara 2
const num: number = 5;
let result: string = `${num} -> `;
let sum: number = 0;
for(let i = 1; i <= num; i++) {
    sum += i;
    result += i === num ? `${i} = ${sum}` : `${i} + `;
}
console.log(result)

// Soal 4 "Write a code to find factorial of a number"
// cara 1
let _number2: number = 4;
// let _number2: number = 6;

let _jumlah2: number = 1;

for(let i = _number2; i > 0; i--) {
    _jumlah2 *= i;
}

console.log(_jumlah2);

// cara 2
const num2: number = 6;
let result2: string = `${num2}! -> ${num2} x`;
let sum2: number = num2;
for(let i = num2 - 1; i >= 1; i--) {
    sum2 *= i;
    result2 += i === 1 ? `${i} = ${sum2}` : `${i} x`;
}
console.log(result2);

// ================================================================

// Soal 5 "Write a code to print the first N fibonacci numbers"

let _n: number = 15;
let _n1: number = 0;
let _n2: number = 1;

let _result: number = 0;

for(let i = 2; i <= _n; i++) {
    _result = _n1 + _n2;
    _n1 = _n2;
    _n2 = _result;
}

console.log(_result);
