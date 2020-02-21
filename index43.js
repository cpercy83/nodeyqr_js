let text = "Game of Moans";
let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);

let result = (firstChar.concat(secondChar.concat(thirdChar)));
result = result.toUpperCase();
result = result.italics();

console.log(`The Final Result is ${result}`);

