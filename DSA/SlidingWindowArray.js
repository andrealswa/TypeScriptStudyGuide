// Sliding window problem
// Maximum Average Subarray - Sliding Window - Leet Code 643
// Description:
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average
// value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
// example, array = [1, 12, -5, -6, 50, 3], k = 4
// The sum of the first 4 (k) elements is equal to 2.
// Algorithm sum - firstElement + lastElementOfKInNewIteration
// 2 - 1 + 50 = 51
// 51 / 4 = 12.75 (because we want to get the average)
// Because 12 is larger than -5 and 50 is larger than 3 there is no need to continue
// Code:
const findMaxAverage = (array, k) => {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += array[i];
    }
    let previousSum = maxSum;
    for (let i = 1; i < array.length - k + 1; i++) {
        const sum = previousSum - array[i - 1] + array[i + k - 1];
        previousSum = sum;
        maxSum = Math.max(sum, maxSum);
    }
    // must divide by k to get the average
    return maxSum / k;
};
