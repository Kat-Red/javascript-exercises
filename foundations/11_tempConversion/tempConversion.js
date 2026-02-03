const convertToCelsius = function(f) {
  
  let c = (f - 32) * (5/9);
  let rounded = Math.round(c * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) + 32;
  let rounded = Math.round(f * 10) / 10;
  return rounded;
};

// x °C ≘ (x × ⁠9/5⁠ + 32) °F   x °F ≘ (x − 32) × ⁠5/9⁠ °C 
convertToCelsius(63);
convertToFahrenheit(195);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
