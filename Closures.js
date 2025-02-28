// 🔹 What is a Closure?

// A closure is a function that remembers variables from its outer (lexical) scope even after the outer function has finished executing.

// ✅ Closures allow functions to maintain private data.
// ✅ They are useful for data hiding and encapsulation.

// Ex.:

function outerFunction() {
    let outerVariable = "I am from outer function";  

    function innerFunction() {
        console.log(outerVariable); // ✅ Accessible due to closure
    }

    return innerFunction;
}

const closureFunc = outerFunction();  
closureFunc(); // Output: I am from outer function  
