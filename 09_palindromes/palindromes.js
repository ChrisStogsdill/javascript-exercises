const palindromes = function (input) {
    let lowerInput = input.toLowerCase();
    let nonCharacterRegex = /[^a-z]/gi;
    let filteredInput = lowerInput.replace(nonCharacterRegex, '')
    let forwardArray = filteredInput.split('');
    let backwardArray = filteredInput.split('').reverse();

    return forwardArray.toString() == backwardArray.toString();
};


// Do not edit below this line
module.exports = palindromes;
