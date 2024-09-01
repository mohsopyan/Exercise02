// Soal 1 "Menentukan bilangan Ganjil atau Genap"
// let _num: number = 25;
let _num: number = 2;

if(_num % 2 === 0) {
    console.log(`${_num} adalah bilangan genap`);
} else {
    console.log(`${_num} adalah bilangan ganjil`);
}

// ==========================================================================

// Soal 2 "Menentukan bilangan prima atau bukan bilangan prima"

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

// Soal 3 "Menentukan jumlah bilangan dari 1 ke N"

let _num2: number = 3;
// let _num2: number = 5;

let _jumlah: number = 0;

for(let i = 1; i <= _num2; i++) {
    _jumlah += i;
}

console.log(_jumlah)

// Soal 4 "Mencari faktorial suatu bilangan"

let _number2: number = 4;
// let _number2: number = 6;

let _jumlah2: number = 1;

for(let i = _number2; i > 0; i--) {
    _jumlah2 *= i;
}

console.log(_jumlah2);

// ================================================================

// Soal 5 "Mencetak N bilangan fibonacci"

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
