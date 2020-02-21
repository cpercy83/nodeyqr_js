let userAndPassword = "pepito2017,12345";
let userName = userAndPassword.substr(0, 10);
userName = userName.italics();
let password = userAndPassword.substr(11, 5);
password = password.italics();

console.log(`The user ${userName} has the password ${password}`);