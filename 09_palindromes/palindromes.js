const palindromes = function (str) {
    const letters = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i <= Math.floor(letters.length / 2); i++) {
        if (letters[i] !== letters[letters.length - (i + 1)]) {return false} 
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
