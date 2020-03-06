let tripExpenses = [
    2509, 1719, 549]

let budget = tripExpenses.reduce(function(total, actual){
    return total + actual
});

console.log(budget);