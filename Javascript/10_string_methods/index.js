// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
