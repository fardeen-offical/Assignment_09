// =======================
// Chapter 21: DOM Manipulation
// =======================
document.writeln("<h2>Chapter 21: DOM Manipulation</h2>");

// Change text of a paragraph
document.writeln("Text updated using JavaScript!<br><br>");

// =======================
// Chapter 22: Events
// =======================
document.writeln("<h2>Chapter 22: Event Handling</h2>");
document.writeln('<button id="btnClick">Click Me</button><br><br>');

const btn = document.getElementById("btnClick");
if (btn) {
    btn.addEventListener("click", () => {
        alert("Button clicked successfully!");
    });
}

// =======================
// Chapter 23: Functions & Arrow Functions
// =======================
document.writeln("<h2>Chapter 23: Functions & Arrow Functions</h2>");

function greet(name) {
    return `Hello, ${name}! Welcome to JS Learning.`;
}
document.writeln(greet("Fardeen") + "<br>");

const multiply = (a, b) => a * b;
document.writeln("Multiply 5 * 3 = " + multiply(5, 3) + "<br><br>");

// =======================
// Chapter 24: Arrays
// =======================
document.writeln("<h2>Chapter 24: Arrays</h2>");

let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
document.writeln("Fruits after push: " + fruits + "<br>");
fruits.pop();
document.writeln("Fruits after pop: " + fruits + "<br><br>");

// =======================
// Chapter 25: Objects
// =======================
document.writeln("<h2>Chapter 25: Objects</h2>");

let person = { name: "Fardeen", age: 22, city: "Umerkot" };
document.writeln("Person Name: " + person.name + "<br>");
person.age = 23;
document.writeln("Updated Person Age: " + person.age + "<br><br>");

// =======================
// Chapter 26: Loops
// =======================
document.writeln("<h2>Chapter 26: Loops</h2>");

for (let i = 1; i <= 5; i++) {
    document.writeln("For Loop Number: " + i + "<br>");
}

for (let fruit of fruits) {
    document.writeln("Fruit: " + fruit + "<br>");
}
document.writeln("<br>");

// =======================
// Chapter 27: Conditional Statements
// =======================
document.writeln("<h2>Chapter 27: If-Else & Switch</h2>");

let score = 85;
if (score >= 90) {
    document.writeln("Grade: A<br>");
} else if (score >= 75) {
    document.writeln("Grade: B<br>");
} else {
    document.writeln("Grade: C<br>");
}

let day = "Monday";
switch (day) {
    case "Monday":
        document.writeln("Start of the week<br>");
        break;
    case "Friday":
        document.writeln("Weekend is coming!<br>");
        break;
    default:
        document.writeln("Midweek day<br>");
}
document.writeln("<br>");

// =======================
// Chapter 28: Advanced Arrays
// =======================
document.writeln("<h2>Chapter 28: Advanced Arrays</h2>");

let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(n => n * n);
document.writeln("Squared Numbers: " + squared + "<br>");

let even = numbers.filter(n => n % 2 === 0);
document.writeln("Even Numbers: " + even + "<br>");

let sum = numbers.reduce((acc, n) => acc + n, 0);
document.writeln("Sum of Numbers: " + sum + "<br><br>");

// =======================
// Chapter 29: String Methods
// =======================
document.writeln("<h2>Chapter 29: String Methods</h2>");

let text = "Hello JavaScript Learner!";
document.writeln("Text Length: " + text.length + "<br>");
document.writeln("Upper Case: " + text.toUpperCase() + "<br>");
document.writeln("Includes 'Script'? " + text.includes("Script") + "<br><br>");

// =======================
// Chapter 30: ES6 Features
// =======================
document.writeln("<h2>Chapter 30: ES6 Features</h2>");

let user = "Fardeen";
document.writeln(`Welcome, ${user}! Enjoy JS learning.<br>`);

let [firstFruit, secondFruit] = fruits;
document.writeln("Destructured Fruits: " + firstFruit + ", " + secondFruit + "<br>");

function divide(a, b = 2) {
    return a / b;
}
document.writeln("Divide 10 / default: " + divide(10) + "<br>");
