const sumAll = function(s, f) {
    let num = s;
    for (let index = s+1; index < f+1; index++) {
    num += index;    
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
