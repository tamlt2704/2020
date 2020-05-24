var twoSum = function(nums, target) {
    var s = {};
    for(let i = 0; i < nums.length; i++) {
        const v = target - nums[i];
        if (v in s) {
            return [s[v], i];
        }
        s[nums[i]] = i; 
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
