const fibonacci = function(a) {
    let count = a;
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
}
// Do not edit below this line
module.exports = fibonacci;
