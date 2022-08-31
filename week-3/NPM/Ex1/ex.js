import validator from "validator";

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const email = "shoobert@dylan";
console.log(validator.isEmail(email));

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const phone = "786-329-9958";
console.log(validator.isMobilePhone(phone, "en-US"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist).toLowerCase());
