// Loops in JavaScript (Detailed Explanation) 🔄

// Loops allow us to execute a block of code multiple times until a condition is met.
//  They are commonly used for iterating over arrays, objects, or performing repetitive tasks efficiently.


// 2️⃣ for Loop

// The for loop is used when we know the number of iterations beforehand.
// Syntax:

// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 3️⃣ while Loop

// The while loop is used when we don’t know how many times the loop should run but it depends on a condition.

// Syntax:

// while (condition) {
//     // Code to be executed
// }




//Example : 

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


// 4️⃣ do-while Loop

// The do-while loop is similar to while, but it always runs at least once, even if the condition is false.
// Syntax:

// do {
//     // Code to be executed
// } while (condition);


// Example : 

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



// 5️⃣ forEach Loop (for Arrays)

// The forEach() method is used only for arrays to loop through elements.
// Syntax:

// array.forEach((element, index, array) => {
//     // Code to execute
// });


// Example : 

let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});


// 6️⃣ for...in Loop (for Objects & Arrays)

// The for...in loop is used to iterate over object properties.
// Example: Loop through an object using for...in

let person = { name: "Venkatesh", age: 24, city: "Pune" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}





// 7️⃣ for...of Loop (for Arrays & Strings)

// The for...of loop is used to iterate over iterable objects like arrays and strings.
// Example: Loop through an array using for...of

let fruit = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}


// =======================================================================================

// Interview Questions 🎯

// 1️⃣ What is the difference between for, while, and do-while loops?
//Ans : 

// //1️⃣ for Loop:
// Used when the number of iterations is known beforehand. Best for count-based loops.

// 2️⃣ while Loop:
// Used when the number of iterations is unknown and depends on a condition. It checks the condition before executing the loop body.

// 3️⃣ do-while Loop:
// Similar to while, but guarantees at least one execution because the condition is checked after the loop body.

// 2️⃣ Which loop would you use to iterate over an object’s properties?
// The for...in loop is used to iterate over an object’s properties because it allows us to access keys (property names) of an object dynamically.


// 3️⃣ How is forEach different from for and for...of?

