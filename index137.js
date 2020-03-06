let n = [];

for (let i = 0; i<=1000; i++) {
    n.push(i);
}

let incremental = n.map(function(x) {
    return x + 10;
})

n.forEach(function(n, index) {
    console.log(`index: ${index}, original number: ${n}, next increment: ${incremental}`);
})