/*
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 *
 * If there're duplicates in arr, count them seperately
 * [1,2,3] -> 2
 * [1,1,3,3,5,5,7,7] -> 0
 * [1,3,2,3,5,0] -> 3
 * [1,1,2,2] -> 2
 * */

/**
 *  * @param {number[]} arr
 *   * @return {number}
 *    */
var countElements = function(arr) {
        let hash = {};
        arr.forEach(v => {hash[v] = 1})
        return arr.map(v => hash[v+1] || 0).reduce((a,b) => a + b);
};

