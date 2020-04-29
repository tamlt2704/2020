// 1. String access
console.log('dog'.charAt(0)); //d

// 2. substring (start, end)
console.log('youtube'.substring(3,7)); //tube

// if end is not passed. It will return all character from start until the end

console.log('youtube'.substring(1));

// 3. String comparison

console.log('a' < 'b'); // true
console.log('add' < 'ab'); // true

// 4. String search
// indexOf(searchValue[, fromIndex])
console.log('Red Dragon'.indexOf('Red')); // 0
console.log('Red Dragon'.indexOf('Red Scal')); // -1

console.log('Red Dragon'.startsWith('Red')); // true
console.log('Red Dragon'.endsWith('Dragon')); // true

// 5. String decomposition
var test1 = 'chicken,noodle,soup,broth';
console.log(test1.split(','));

// 6. String replace
console.log('Wizard of Oz'.replace('Wizard', 'Witch'));

// 7. Regex
/*
i   perform case-insensitive matching
g   perform global match, find all matches rather than stopping after first match
m   perform multiline matching

RegExp has following 2 functions:
    search() test for matches in  string. Return index of the match
    match() test for matches, return all the matches
String object has following to regex-related function that accept regexp object 
as an argument
    exec(): Test for matches in string, return first match
    test(): test for matches in a string. retunr true/false
*/

// 8. Commonly used regex


// any numeric character
var reg = /\d+/
console.log(reg.test('123'));       // true
console.log(reg.test('123asd'));    // true
console.log(reg.test('asd'));       // false

// only numeric character
console.log('only numeric character');
var reg = /^\d+$/;
console.log(reg.test('123'));       // true
console.log(reg.test('123asd'));    // false
console.log(reg.test('asd'));       // false

// floating numeric characters
console.log('floating numeric characters');
var reg = /^[0-9]*\.[0-9]*[1-9]+$/
console.log(reg.test('12'));        // false
console.log(reg.test('12.2'));      // true

// query string
var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {}
uri.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id']);

// 9. Encoding
// base64 encoding: function: btoa(). atob()
// console.log(btoa('Hello world'));
console.log(Buffer.from('Hello World', 'binary').toString('base64'));
console.log(Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('binary'));








