const reverseString = function(str) {
    let newChars = [];
    for (let i = str.length; i >= 0; i--) {
        newChars.push(str[i]);
    }
    return newChars.join('');
};

// Do not edit below this line
module.exports = reverseString;
