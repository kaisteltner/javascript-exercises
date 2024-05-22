const removeFromArray = function(arrayIn, ...elementsToBeRemoved) {
    let arrayOut = [];
    outerLoop: for (element of arrayIn) {
        for (elementToBeRemoved of elementsToBeRemoved) {
            if (element === elementToBeRemoved) {continue outerLoop};
        }
        arrayOut.push(element);
    }
    return arrayOut
};

// Do not edit below this line
module.exports = removeFromArray;
