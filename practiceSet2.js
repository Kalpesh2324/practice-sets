/* Practice Set 2 — Variables
Covers:
- Declaring variables with var, let, and const
- Rules for naming variables
- Understanding scope (global, function, and block)
- Reassigning values and constants
Goal: Learn how variables are declared, scoped, and used in JavaScript. */

/* Practice — Set 2
1. Declare a variable for your favorite color using let and print it.
2. Create a constant for gravity (9.8) and print it.
3. Use var to declare a variable for your city and print it.
4. Change the value of a let variable and print the updated value.
5. Try changing the value of a const variable and observe the error in console.
6. Write a function and declare var, let, and const variables inside it, then try accessing
them outside the function to see the scope. */

// Solutions:-

/* let color = "black";
console.log(color); */

/* const gravityConstant= 9.8;
console.log(gravityConstant); */

/* var city = "Mumbai";
console.log(city); */

/* color = "White";
console.log(color); */

/* gravityConstant = 10;
console.log(gravityConstant); //TypeError: Assignment to constant variable. */

/* function kalpesh(){
    var x= 3;
    let y=5;
    const z=6;
}

console.log(x); //Var has a function scope means they can be accessible in function only.

console.log(y);    let and const are block scope means it can be accessible inside the block only {}.
console.log(z); */

/*Global Scope: Variable is accessible anywhere in the code.
Function Scope: Variable declared with var inside a function is accessible only
within that function.
Block Scope: Variable declared with let or const inside a block (like { }) is
accessible only inside that block. */