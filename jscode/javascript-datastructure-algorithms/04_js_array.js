var array = [1, 2, 3, 4];

// insertion
array.push(5);
console.log(array); // 1, 2, 3, 4, 5

//deletion. pop is O(1)
array.pop();
console.log(array); // 1, 2, 3, 4
array.shift();
console.log(array); // 2, 3, 4

// access
var array = [1, 2, 3, 4];
console.log(array[0]); // 1

// iteration
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for (in) : index
var fruits = ['orange', 'banana', 'kiwi'];
for (var index in fruits) {
    console.log(`${index} --> ${fruits[index]}`);
}

// for (of) //element
var animals = ['cat', 'dog', 'cow'];
for (var element of animals) {
    console.log(element);
}

// forEach
animals.forEach((element, index) => {
    console.log(animals[index] + ':' + element);
});


// Helper functions
// slice(begin, end)
var array = [1, 2, 3, 4];
array.slice(1, 2); // 2

// if only begin is passed, the end is maximum
array.slice(1); // [2, 3, 4]

// if nothing is passed, return copy of array
var arr2 = array.slice();
console.log(arr2);
console.log(arr2 === array); // false

// copy array
var arr3 = Array.from(animals);
console.log(arr3);

// splice (begin, size, element 1, element 2, ....)
// return and changes the content of an array by removing existing elements
// and/or add new elements
var array = [1, 2, 3, 4];
console.log(array.splice()); // returns [] array = [1,2,3,4]
console.log(array.splice(1,2)); // returns [2, 3] array = [1, 4]
var array = [1, 2, 3, 4];
console.log(array.splice(1,2, 5, 6, 7)); // returns [2, 3] array = [1, 5, 6, 7, 4]
console.log(array);

// anything / object type can be added
var array = [1, 2, 3, 4];
array.splice(1,2, [5,6,7]); 
console.log(array); // [1, [5, 6, 7], 4]

var array = [1, 2, 3, 4];
array.splice(1,2, {'ss': 1}); 
console.log(array);


//concat
var array = [1, 2, 3, 4];
array.concat(); // returns [1,2,3,4], array = [1,2,3,4];
array.concat([2,3,4]) // returns [1,2,3,4,2,3,4]; array = [1,2,3,4]
