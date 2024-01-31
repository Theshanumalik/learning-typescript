var myName = "TypeScript"; //string 
// name is a reserved keyword in TS
var num = 123; //number
var isLoggedIn = true; //boolean
// console.log(myName);
// console.log(num);
// console.log(isLoggedIn);
// We can not change data type after declaration (gives compilation error)
// myName = 56;
// num = "Good Afternoon";
// isLoggedIn = 23
// Explicit type declaration
var num1, num2;
var str;
num1 = 23;
num2 = 46;
str = "this is a string";
// console.log(num1+num2)
// console.log(str);
// Arrays
var fruites; //will containe elements only data-type of string
fruites = ["banana", "grapes", "blackberry"];
// fruites.push(256)
fruites.push("apple");
// console.log(fruites);
// unioun types
var mixed = [];
mixed.push("Typescript");
mixed.push(123);
mixed.push(true);
console.log(mixed);
// Object
var person1 = {
    name: "Malik",
    age: "20",
    isAdmin: true
};
person1.isAdmin = false;
// person1.height = 6
// console.log(person1);
var newPerson;
newPerson = {
    name: "shanu malik",
    age: 20,
    isAdmin: true,
    height: 5.8
};
newPerson.isAdmin = false;
// newPerson.something = 14;
console.log(newPerson);
// Greeting Program
var uname;
uname = prompt("Enter your name");
greet(uname || "");
function greet(personName) {
    document.write("<h1>Hello, ".concat(personName, "</h1>"));
}
