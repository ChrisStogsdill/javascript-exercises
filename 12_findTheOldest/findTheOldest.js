const findTheOldest = function(array) {
    let sorted =  array.sort(function(item1, item2) {
        let age1 = 0
        let age2 = 0
        if (item1.hasOwnProperty('yearOfDeath')){
             age1 = item1.yearOfDeath - item1.yearOfBirth;
        }
        else {
            age1 = new Date().getFullYear - item1.yearOfBirth;
        }
        if (item2.hasOwnProperty('yearOfDeath')) {
         age2 = item2.yearOfDeath - item2.yearOfBirth;
        }
        else {
         age2 = new Date().getFullYear() - item2.yearOfBirth;
        }
         if (age1 > age2) {
             return 1;
         }
         else {
             return -1;
         }
     })
     return sorted.at(-1);
 };

// Do not edit below this line
module.exports = findTheOldest;
