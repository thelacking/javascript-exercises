const palindromes = function (a) {
var string = a.split("").reverse().join("");
if(string === a){
    return true;
}
else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
