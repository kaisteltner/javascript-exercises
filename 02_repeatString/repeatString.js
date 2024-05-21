const repeatString = function(string, num) {
    if (num < 0) {return 'ERROR'}
    return string.repeat(Math.floor(num))
};

// Do not edit below this line
module.exports = repeatString;
