// 1️⃣ Implicit Type Conversion (Type Coercion)

// JavaScript automatically converts data types when needed.
// Example: Number to String

console.log(5 + "10");  // "510" (Number is converted to String)

//Here, 5 (Number) is coerced into "5" (String), and concatenation happens.


// Example: String to Number

console.log("5" - 2);  // 3  (String is converted to Number)
console.log("5" * "2"); // 10 (Both are converted to Numbers)
console.log("10" / 2);  // 5  (String is converted to Number)


// "-", "*", and "/" operators trigger automatic conversion to Number.


console.log(true + 1);  // 2   (true → 1)
console.log(false + 1); // 1   (false → 0)
console.log("5" + true); // "5true" (Boolean is converted to String)



// 2️⃣ Explicit Type Conversion (Type Casting)

// When we manually convert data types using functions like Number(), String(), or Boolean().
// Convert String to Number

console.log(Number("123"));  // 123
console.log(Number("ABC"));  // NaN (Not a Number)
console.log(parseInt("12.34"));  // 12  (Integer conversion)
console.log(parseFloat("12.34")); // 12.34  (Float conversion)

// Convert Number to String

console.log(String(100));  // "100"
console.log((100).toString());  // "100"

// Convert to Boolean

console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("Hello"));  // true (Non-empty string)
console.log(Boolean(""));  // false (Empty string)

