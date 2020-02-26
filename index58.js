let hour = 23
if (hour >= 5 && hour <= 12) {
    console.log(`Good Morning, Sunshine!`);
} else if (hour >= 12 && hour < 18) {
    console.log(`Good Afternoon, Friends!`);
} else if (hour > 18 && hour <= 22) {
    console.log(`Good Evening, Beautiful!`);
} else if (hour > 22 && hour <= 24 || hour > 0 && hour <= 5) {
    console.log(`Good Night, Mofos!`);
} else {
    console.log(`Invalid Input!`);
}