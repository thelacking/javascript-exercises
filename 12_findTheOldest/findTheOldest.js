const findTheOldest = function(list) {
let oldestperson;
let oldestAge= 0;
    for (let index = 0; index < list.length; index++) {
        let deathyear;
        if(list[index].yearOfDeath === undefined) deathyear = 2025; else deathyear = list[index].yearOfDeath;
        let age = deathyear-list[index].yearOfBirth;
        if(age > oldestAge){
            oldestperson = list[index];
            oldestAge = age;
        }
    }
    return oldestperson;
};

// Do not edit below this line
module.exports = findTheOldest;
