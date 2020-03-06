const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"]

const newList = mutants.filter(function(mutant) {
    return mutant != "Magneto" || "Iceman" || "Gambit";
});

console.log(newList);