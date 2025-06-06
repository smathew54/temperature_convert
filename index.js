const convertToCelsius = (fahrenheit) => {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return celsius;
};

console.log("this is the first function")
console.log(convertToCelsius(32));

const describeTemperature = (fahrenheit) => {
  let celsius = (5 / 9) * (fahrenheit - 32);
  if (celsius < 0) {
    return ("very cold");
  } else if (celsius < 20) {
    return ("cold");
  } else if (celsius < 30) {
    return ("warm");
  } else if (celsius < 40) {
    return ("hot");
  } else if (celsius >= 40) {
    return ("very hot");
  }
};

console.log("this is the second function")
console.log(convertToCelsius(110));
console.log(describeTemperature(110));


console.log("this is the final function")
let temperature = prompt("");
let fahrenheit = Number(temperature);
let tempInCelsius = convertToCelsius(fahrenheit)
let newTemperature = describeTemperature(fahrenheit);
console.log(`it is ${tempInCelsius} in celsius which is ${newTemperature}`)
alert(`it is ${tempInCelsius} in celsius which is ${newTemperature}`)

