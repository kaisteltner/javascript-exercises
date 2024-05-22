const removeFromArray = function(arrayIn, ...elementsToBeRemoved) {
    let arrayOut = [];
    for (element of arrayIn) {
        if (!elementsToBeRemoved.includes(element)) {arrayOut.push(element)}
    }
    return arrayOut
};

// Do not edit below this line
module.exports = removeFromArray;
