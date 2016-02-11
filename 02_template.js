//run sudo npm install wiring-pi to install the library for controlling hardware
//write a function that will take pin as an input and blink the connected pin
var wpi = require('wiring-pi');

wpi.setup('gpio');
var pin = (process.argv[2] ? Number(process.argv[2]) : 17);

wpi.pinMode(pin, wpi.OUTPUT);

value = 1;

setInterval(togglePin, 500);

function togglePin() {
    wpi.digitalWrite(pin, value);
    value = +!value;
}