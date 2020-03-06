let numbers = [];

for (let i = 0; i<=1000; i++) {
    numbers.push(i);
}

const evenNumbers = numbers.filter(function(number) {
    if (number%2===0) {
        return true;
    } return false;
});

const oddNumbers = numbers.filter(function(number) {
    if (number%2!=0) {
        return true;
    } return false;
});

console.log("Printing last 10 odd numbers")
for (let i = oddNumbers.length-11 ; i < oddNumbers.length; i++) {
    console.log(oddNumbers[i]);
}
console.log("Printing first 20 even numbers")
for (let i = 0 ; i < 20; i++) {
    console.log(evenNumbers[i]);
}