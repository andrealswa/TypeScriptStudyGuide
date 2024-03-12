// Constant
// Runs in O(1) time and O(1) space, as degreesCelsius is only taking ~1byte of memory
// and we are not trying to access or store more than that
const getFahrenheit = (degreesCelsius) => {
    return 1.8 * degreesCelsius + 32;
};
// Logarithm is basically the inverse of an exponential
// Linear
// Runs in O(n) time and O(1) space, because we are replacing i with each value so it is only created once.
const logNums = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
    // linear time and space
    // This loop will run in O(n) time and O(n) space, because we are creating an array of size n
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i]);
        console.log(result);
    }
};
// quadratic
// Runs in O(n^2) time and O(1) space
const logPairs = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            console.log(i, j);
        }
    }
};
