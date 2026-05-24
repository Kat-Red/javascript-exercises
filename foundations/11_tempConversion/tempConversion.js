const convertToCelsius = function(f) {
  return Math.round(((f - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(c) {
  return Math.round((c * (9/5) + 32) * 10 ) / 10
};

// x °C ≘ (x × ⁠9/5⁠ + 32) °F   x °F ≘ (x − 32) × ⁠5/9⁠ °C 
convertToCelsius(63);
convertToFahrenheit(195);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
