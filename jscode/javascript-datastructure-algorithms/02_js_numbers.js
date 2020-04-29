// 1. Number operators
/*
 * + : addition
 * - : substraction
 * / : division
 * * : multiplication
 * % : module
 */

// 2. Number system
/* Javascipt uses a 32-bit floating-point representation for numbers

0        1 1 1 1 1 1 1      01000000000000000000000 
Sign     Exponent(8-bit     Fraction (23-bit)
*/

// with decimal fraction, floating-point number causes some rounding error
console.log(0.1 + 0.2 === 0.3); //false


// 2. Rounding
// Math.floor -- rounds down to the nearest interger
Math.floor(0.9); // 0
Math.floor(1.1); // 1

// Math.round -- rounds to the nearest interger
Math.round(0.49); // 0
Math.round(0.5); // 1

// Math.ceil -- round up to the nearest interger
Math.ceil(2.9) // 3
Math.ceil(0.1) // 1
Math.ceil(21.01) // 22

// 3. Numer.EPSILON
function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(numberEquals(0.1 + 0.2, 0.3));

// 4. Maximums

// Number.MAX_SAFE_INTEGER // largest interger
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
console.log(Number.MAX_SAFE_INTEGER + 1.1 === Number.MAX_SAFE_INTEGER + 2.1); // false

// Number.MAX_VALUE // largest floating-point number
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // true
console.log(Number.MAX_VALUE + 1.1 === Number.MAX_VALUE + 2.1); // true


// 5. Minimums
Number.MIN_SAFE_INTEGER
Number.MIN_VALUE

// 6. Infinity
// The only thing greater than Number.MAX_VALUE is Infinity
// The only thing smaller than Number.MAX_SAFE_INTEGER is -Infinity

console.log(Infinity > Number.MAX_SAFE_INTEGER); // true
console.log(-Infinity < Number.MAX_SAFE_INTEGER); // true
console.log(-Infinity -213131 == Number.MAX_SAFE_INTEGER - 1); // true

// 7 Size Summary
// -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 <
// Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity


// 8. Random number generator
console.log(Math.random()); // random float between 0 and 1
console.log(Math.floor(Math.random() * 100));


// 9 . Exercise
/*
 * calculate (x^y) % p
 * */

function modularExponentiation(base, exponent, modulus) {
    if (modulus === 1) return 0;

    var value = 1;

    for (var i = 0; i <exponent; i++) {
        value = (value * base) % modulus;
    }
    return value;
}

console.log(modularExponentiation(4, 3, 5));














