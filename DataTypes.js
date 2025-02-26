// What is Data Type?
// A data type in JavaScript defines the type of value a variable can hold. It determines how the data is stored, accessed, and manipulated in memory.

// JavaScript has two main categories of data types:

//     Primitive Data Types (immutable, stored directly in memory)
//     Non-Primitive (Reference) Data Types (mutable, stored as references)


// 🔹 1. Primitive Data Types (7 Types)

// Primitive types store simple values directly in memory.

// ----------------------------------------------------------------------------------------------------------
// Data Type	            Description	                                            Example
// ----------------------------------------------------------------------------------------------------------

// Number	                Stores integers & floating-point numbers	            let num = 10;

// String	                Stores text, enclosed in quotes	                        let name = "Venkatesh";

// Boolean	                Stores true or false	                                let isStudent = true;

// Undefined	            Variable declared but not assigned a value	            let x;

// Null	                    Represents intentional absence of a value	            let y = null;

// Symbol (ES6)	            Unique and immutable value	                            let sym = Symbol("id");

// BigInt (ES11)	        Used for very large numbers	                            let big = 123n;

// ----------------------------------------------------------------------------------------------------------



let age = 25; // Number
let userName = "Venkatesh"; // String
let isAvailable = false; // Boolean
let notDefined; // Undefined
let emptyValue = null; // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt





// 🔹 2. Non-Primitive (Reference) Data Types

// These store references to values rather than the value itself.

// ----------------------------------------------------------------------------------------------------
// Data Type	    Description	                                Example
// ----------------------------------------------------------------------------------------------------

// Object	        Collection of key-value pairs	            {name: "Venkatesh", age: 22}

// Array	        Stores multiple values in an ordered list	[1, 2, 3, "hello"]

// Function	        A block of reusable code	                function greet() { return "Hello"; }

// -----------------------------------------------------------------------------------------------------



// Object
let person = { name: "Venkatesh", age: 22 };

// Array
let colors = ["red", "blue", "green"];

// Function
function greet() {
    return "Hello, world!";
}




// 🔹 Key Differences Between Primitive and Non-Primitive
// ---------------------------------------------------------------------------------------------------------------------
// Feature	        Primitive	                                                     Non-Primitive
// ---------------------------------------------------------------------------------------------------------------------
// Storage	        Stored directly in memory	                                     Stored as a reference

// Mutability	    Immutable (cannot be changed)	                                 Mutable (values can be modified)

// Examples	        Number, String, Boolean, Null, Undefined, Symbol, BigInt	     Object, Array, Function

// ----------------------------------------------------------------------------------------------------------------------