function celsiusToFahrenheit(celsius){
    fahrenheit = celsius/5*9+32;
    return console.log(`${celsius}° C is ${fahrenheit}° F`);

}
function fahrenheitToCelsius(fahrenheit){
    celsius = ((fahrenheit-32)/9)*5
    return console.log(`${fahrenheit}° F is ${celsius}° C`);
}
celsiusToFahrenheit(60);
fahrenheitToCelsius(45);