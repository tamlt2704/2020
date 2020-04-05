/*Given an array of strings, group anagrams together.

    Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
[
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
]

* @param {string[]} strs
* @return {string[][]}
**/
var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach(str => {
        let letters = str.split('').sort();
        
        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    });
    return Object.keys(hash).map(v => hash[v]);
};
