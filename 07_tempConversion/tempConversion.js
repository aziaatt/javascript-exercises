const convertToCelsius = function(degreesFahrenheit) {
    let celsius;
    celsius = ((degreesFahrenheit-32)* (5/9));
    celsiusRounded = Math.round(celsius * 10) / 10;
    return celsiusRounded;
};

const convertToFahrenheit = function(degreesCelsius) {
    let fahrenheit;
    fahrenheit = ((degreesCelsius*(9/5))+ 32);
    fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
    return fahrenheitRounded
};
convertToFahrenheit(73.2)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
