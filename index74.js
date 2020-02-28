let stars = "*";

for (let stars = 1; stars <= 20; stars++) {
    if (stars % 2 == 0) {
        console.log(`${stars}`);
        stars += "**";
    }
}