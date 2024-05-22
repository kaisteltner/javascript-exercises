const sumAll = function(start, end) {
    let sum = 0;
    if (typeof(start) !== 'number' || typeof(end) !== 'number') {return 'ERROR'};
    if (start < 0 || end < 0) {return 'ERROR'};
    // Check if first number is greater than second and switch if necessary
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    // Add numbers
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
