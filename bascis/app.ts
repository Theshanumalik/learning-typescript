let myName = "TypeScript"; //string 
// name is a reserved keyword in TS
let num = 123; //number
let isLoggedIn = true; //boolean


// console.log(myName);
// console.log(num);
// console.log(isLoggedIn);

// We can not change data type after declaration (gives compilation error)
// myName = 56;
// num = "Good Afternoon";
// isLoggedIn = 23

// Explicit type declaration
let num1:number, num2:number;
let str:string;

num1 = 23;
num2 = 46;
str = "this is a string";

// console.log(num1+num2)
// console.log(str);

// Arrays
let fruites: string[]; //will containe elements only data-type of string
fruites = ["banana", "grapes", "blackberry"];
// fruites.push(256)
fruites.push("apple");
// console.log(fruites);

// unioun types
let mixed: (string | number | boolean)[] = [];
mixed.push("Typescript");
mixed.push(123);
mixed.push(true);
console.log(mixed);

// Object

let person1 = {
    name:"Malik",
    age:"20",
    isAdmin:true
};

person1.isAdmin = false;
// person1.height = 6
// console.log(person1);

let newPerson : {
    name: string,
    age: number,
    isAdmin: boolean,
    height: number
}

newPerson = {
    name: "shanu malik",
    age: 20,
    isAdmin: true,
    height: 5.8
}

newPerson.isAdmin = false;
// newPerson.something = 14;
console.log(newPerson);

// Greeting Program
let uname: string | null;
uname = prompt("Enter your name");
greet(uname || "")
function greet(personName: string) {
    document.write(`<h1>Hello, ${personName}</h1>`)
}