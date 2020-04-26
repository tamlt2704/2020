'use strict';

// 1. Creating Arrays
var numbers = [];
console.log(numbers.length);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

var numbers = new Array();
console.log(numbers.length);

var numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers.length);

var numbers = new Array(10);
console.log(numbers.length);

var objects = [1, "joe", true, null];

var numbers = 3;
var arr = [7, 4, 1776];

console.log(Array.isArray(numbers)); //false
console.log(Array.isArray(arr)); //true


// 2. Accessing and Writing Array Elements
var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = i+1;
}

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++){
    console.log(`word ${i}: ${words[i]}`);
}

// 3. Searching for array
var names =["David", "Cynthia", "Raymond", "Clayton", "Jenifer"];
var position = names.indexOf("Cynthia");
if (position >= 0) {
    console.log(`found Cynthia at position ${position}`);
} else {
    console.log("not found");
}

//
var nameStr = names.join();
console.log(nameStr);
console.log(names.toString());


// 
var x = [1,2,3]
var y = [4, 5, 6];
var z = x.concat(y);
console.log(x);
console.log(z);

var t = x.splice(1,3)
console.log(t);

// adding elements to an array
var nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums);

// adding element to the begining of an array
nums.unshift(-1, 0);
console.log(nums);


// removing elements from an array
var nums = [1, 2, 3, 4, 5, 6];
nums.pop();
console.log(nums);

// remove elements from begining
var nums = [1, 2, 3, 4, 5, 6];
var x = nums.shift();
console.log(`x = ${x}; nums: ${nums}`);


// adding and removing elements from middle of an array
var nums = [1, 2, 3,  7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, 4, 5, 6);
console.log(nums);
nums.splice(3,3);

// putting array elements in order
var nums = [1, 2, 3, 4, 5, 6];
nums.reverse();
console.log(nums);
nums.sort();
console.log(nums);

var compare = (x, y) => y - x;
nums.sort(compare);
console.log(nums);


// iterator function
function square(x) {
    console.log(x , x*x)
}

var nums = [1, 2, 3, 4, 5, 6,7 ,8 ,9, 10];
nums.forEach(square);


function isEven(x) {
    return x % 2 === 0;
}
console.log(nums.every(isEven)); //false
console.log(nums.some(isEven)); //true

function sum(x, y)  {
    return x + y;
}

console.log(nums.reduce(sum));

var words = ['the ', 'quick ', 'brown ', 'fox '];
var concat = (x, y) => x + y;
console.log(words.reduceRight(concat));
