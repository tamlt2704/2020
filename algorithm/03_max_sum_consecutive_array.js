/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = nums[0];

    var allNegative = true;
    var allPositive = true;

    var positiveSum = 0;
    var maxNegative = Number.MIN_SAFE_INTEGER;

    var max = nums[0];

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum = (sum < 0) ? 0: sum;
        maxSum = (maxSum < sum) ? sum : maxSum;

        if (nums[i] >= 0) {
            allNegative = false;
            positiveSum += nums[i];
        } else {
            allPositive = false; 
            maxNegative = (maxNegative < nums[i]) ? nums[i] : maxNegative;
        }
    }

    if (allPositive) {
        return positiveSum;
    } else if (allNegative) {
        return maxNegative;
    } else {
        return maxSum;
    }
};
