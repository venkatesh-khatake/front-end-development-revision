// What is Function?

// A function is a reusable block of code that performs a specific task
// It helps modularize code, making it easier to read, debug and reuse.


// regular function:

greet()

function greet(){
    console.log("Hello World");
}


// function expression(Anonymous function)

const disp = function(){
    return "Hello Venkey";
}

console.log(disp())


// Arrow Function 

const add = (a, b) =>{
    return a + b;
}

console.log(add(4,5));


// 4️⃣ Immediately Invoked Function Expression (IIFE)

//     Executes immediately after defining.
//     Prevents global variable pollution.


(function() {
    console.log("I run immediately!");
})();

