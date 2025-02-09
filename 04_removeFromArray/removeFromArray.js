const removeFromArray = function(arr,...args) {
    const newarr = [];
    arr.forEach((i) => {
        if (!args.includes(i)) {
          newarr.push(i);
        }
      });
      return newarr;
    };

// Do not edit below this line
module.exports = removeFromArray;
