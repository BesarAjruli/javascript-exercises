const convertToCelsius = function(temp) {
  if(temp === 32){
    return 0
  }
  var celsius = (temp - 32) * (5/9)
  return Number(parseFloat(celsius).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  if(temp === 0){
    return 32
  }
  var fahrenheit = (temp * (9/5) + 32)
  return Number(parseFloat(fahrenheit).toFixed(1))
};

convertToCelsius(-100)
convertToFahrenheit(-10)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
