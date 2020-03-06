function sort (number1, number2, number3) {
    if (number1.typeof(number)&&number2.typeof(number)&&number3.typeof(number)) {
    } else console.log('Please enter a number');
    if (number1>number2&&number2>number3) {
        console.log(number1, number2, number3);
    } else if (number1>number2&&number2<number3) {
        console.log(number1, number3, number2);
    } else if (number1<number2&&number2<number3) {
        console.log(number3, number2, number1);
    } else if (number3>number2&&number1>number2) {
        console.log(number3, number1, number2);
    } else if (number1<number2&&number3<number2&&number1>number3) {
        console.log(number2, number1, number3);
    }  else if (number2>number1&&number3>number1&&number2>number3) {
        console.log(number2, number3, number1);
    } else {
    }
}

sort(10,8,25);

