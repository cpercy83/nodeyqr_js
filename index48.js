let message = "3.14 is a great number, but 42\.\.\. it's the true meaning of Life\.";
let pi = message.substr(0 , 4);
let piNumerical = parseFloat(pi);
let separator = message.indexOf("\.\.\.");
let meaningOfLife = message.slice(separator-2);
let meaningNumerical = parseInt(meaningOfLife);
let result = piNumerical + meaningNumerical;

console.log(`Result: ${result}`);
console.log(`${result.toString()} is the result of adding ${piNumerical.toString()} and ${meaningNumerical.toString()}\.`);