let userAndPassword = "pepito2017,12345";

let userName = userAndPassword.substr(0, 10);//When we know the size of the UN
userName = userName.italics();
let password = userAndPassword.substr(11, 5);//When we know the size of the PW
password = password.italics();

let separator = userAndPassword.indexOf(","); //Thinking dynamically, we need to know how to separate the UN and PW as they will not be constant
if (separator != -1) {
    userName1 = userAndPassword.slice(0,separator);
    password1 = userAndPassword.slice(separator+1)

    console.log(`The user ${userName1} has the password ${password1}`);

} else { 
    
    console.log(`Cannot find username or password\.`)
}


