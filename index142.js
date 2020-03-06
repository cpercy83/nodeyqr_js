let firstPerson = ["Angie", "Fidelak", "Regina", "36"];
let secondPerson = ["Frans", "Lotz", "Regina", "33"];

let first = firstPerson.reduce(
    function(previous, actual) {
        return previous + ", " + actual
    });
let second = secondPerson.reduce(
    function(previous, actual) {
        return previous + ", " + actual
    });
console.log(first);
console.log(second);