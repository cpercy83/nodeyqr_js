let grade = 66
if (grade >= 9 && grade <= 10) {
    console.log(`Great Work!`);
}
else if (grade < 9 && grade >= 6) {
    console.log(`You Did It!`);
}
else if (grade < 6 && grade >= 0) {
    console.log(`You Did Not Do It; Please Try Again!`);
} else {
    console.log(`Silly Rabbit, That's Not a Grade!`);
}