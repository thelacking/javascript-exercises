const convertToCelsius = function(input) {
  return (input-+32)*(9/5);
};

const convertToFahrenheit = function(input) {
  return ((9/5)*input)+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
