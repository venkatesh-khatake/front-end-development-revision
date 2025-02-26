// What is Variable?

// Ans. : The Variable is a container used to store data. in Javascript variables can be declared using : 
// 
//          1. let (recommended  for mutable values)
//          2. var (old, has issues)
//          3. const (for constant, cannot be reassigned)
// 


// ✅ var:

// Oldest way to declare a variable.
// Function-scoped (accessible inside a function).
// Can be reassigned and re-declared.
// Hoisted but initialized as undefined (causes issues).

// Ex : 
console.log(name) // Hoisting
var name = "Venkatesh";
console.log(name); // Venkatesh

var name = "Venkey" // Allowed 


// ✅ let (Introduced in ES6):

// Block-scoped (works only inside {} where it's declared).
// Can be reassigned but not re-declared.
// Hoisted but gives ReferenceError if accessed before declaration.

let age = 22;
// let age = 55; // re-declaration not Allowed

age = 45; // re-assignment is allowed

// ✅ const (Introduced in ES6):

// Block-scoped like let.
// Cannot be reassigned (constant value).
// Must be initialized during declaration..

const course = "BBA(CA)"; // must be initialized at the time of declaration;

// course = "BSC(Ag.)"; // Re-assignment not allowed

