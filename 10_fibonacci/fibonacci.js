const fibonacci = function(num) {
    let output = [];
    if (num < 0) {return 'OOPS'}
    for (i = 1; i < num; i++) {
        output.push('');
    }
    output.splice(0, 1, 1)
    output.map((entry, index) => {
        if (index == 0){
            output[index] = 1;
            output[index+1] = 1;
        }
        else {
            output[index+1] = output[index] + output[index-1]
        }
    })
    return output.at(-1);
}

// Do not edit below this line
module.exports = fibonacci;
