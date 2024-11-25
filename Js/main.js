// let name = "joel";
// let age = 12;
// let status = "single";

// if (name === "john") {
//     console.log("Hello, John!");
// }else if (name === "Joshua") {
//     console.log("Hello, Joshua!");
// }else {
//     console.log("Hello, " + name);
// }

// for (num = 0;num <= 10; num++) {
//     console.log(num);
// }


// ### get user input === install prompt first, :: npm install prompt-sync
const prompt = require('prompt-sync')();
let name = prompt("Enter your name: ");
console.log("Your name is ", name);
