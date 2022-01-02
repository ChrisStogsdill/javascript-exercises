const getTheTitles = function(array) {
    output = [];
array.map(function(entry) {
    output.push(entry.title);
})
return output;
};

// Do not edit below this line
module.exports = getTheTitles;
