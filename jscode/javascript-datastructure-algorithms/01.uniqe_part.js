//1. Global declaration

test = 'sss';
console.log(test)

//2. Declaration with var: functional scope
// variables declared at the bottom of the script will not be the last thing
// executed in a script program during runtime
function scope1() {
    var top = 'top';
    bottom = 'bottom';      // how does it work
    console.log(bottom);

    var bottom;
}
scope1();                   // print "bottom" - no error

// variable is hoist to the closest function scope

function scope2(print) {
    if (print) {
        var insideIf = '12';
    }
    console.log(insideIf);
}

scope2(true);              // prints '12' - no error


// global vs function scope
var a = 1;
function four() {
    if (true) {
        var a = 4;
    }

    console.log(a); // prints 4 
}

four();

// 3. Declaration with let: block scope
function scope3(print) {
    if (print) {
        let insideIf = '12';
    }
    //console.log(insideIf);      // error in strict mode;
}
scope3(true);


// 4. Equality and types
//variable types: boolean, number, string, undefined, object, function, symbol

var is20 = false; 
console.log(typeof is20); //boolean

var age = 19;
console.log(typeof age); // number

var lastName = "bae";
console.log(typeof lastName); // string

var fruits = ['Apple', 'Orange', 'Banana']; //object
console.log(typeof fruits);

var me = {firstName: 'Orange', lastName: 'Banana'};
console.log(typeof me); // object

var nullVar = null;
console.log(typeof nullVar); // object

var function1 = function() {
    console.log(1);
}
console.log(typeof function1); //function

var blank;
console.log(typeof blank); //undefined


var undefinedVar = undefined;
console.log(typeof undefinedVar); //undefined


// 5. Truthy/Falsey check
/*
 * if (node) {
 *  ...
 * }
commonly used expression that evaluate false
    false
    0
    empty string ('' and "")
    NaN
    undefined
    null
commonly used expression that evaluate true
    true
    any number other than 0
    non-empty strings
    non-empty object
*/

// 6. === vs ==

console.log("5" == 5) // true
console.log("5" === 5) // false


// objects
// these variable have different addresses in memory
var o1 = {};
var o2 = {};
console.log(o1 == o2); // false
console.log(o1 === o2); // false

// === and === only for string and number. not object nor function
var function1 = function() { console.log(2) };
var function2 = function() { console.log(2) };
console.log(function1 === function2); //false
