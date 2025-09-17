/* Practice Set 7 — Functions
Covers:
- Declaring functions (declaration, expression, arrow functions)
- Parameters and arguments
- Return values
- Local vs global scope
Goal: Understand how to create reusable code using functions. */

// Questions:-

/* 
1. Create a function to print your name.
2. Create a function that accepts two numbers and prints their sum.
3. Create a function that returns the square of a number.
4. Create a function with multiple parameters and return a formatted string.
5. Demonstrate local vs global scope using variables inside and outside a function. 
*/


/* 
// 1.

 function nam(){
    console.log("KAlPESH DUBEY");
 }

 nam();
*/

/* 2.


const sum = (a,b) =>{
 //return returns the value when get called but it doesn't visible to us.
    return a+b;             
}                         

console.log(sum(2,3)); // That's why we logged it to the console.
 */


// or //


/* 
const sum = (a,b)=>{
console.log(a+b); // here we have used console the sum of two numbers in function so when this function get called then it will
                    //  log the value
}
sum(2,5);       //here we are just calling the function so it will just show the 5.

console.log(sum(2,3)); // here also by default "return value" has been returned when we call the function and their value is undefined.
 */


/* 3.


const sqr = function(a){
    return a^2;
}

console.log(sqr(5));
 */


/* 

//4.


function str(a, b, c, d, e, f,g){
 console.log(`${a}${b}${c}${d}${e}${f}${g}`);
}
str("k","a","l","p","e","s","h"); 
*/


/* 

//5.


let a =5;

const fun = () => {
    let b = 6;
    console.log(b);
}

 console.log(a); //This will print 5 as "a" is defined outside of the function so it is global variable.
 console.log(b); // This will give error as b is declared inside the variable inside the function so it has local scope.
 fun(); // This will print 6 as the "b" is local scope and we can use it in inside of the function only.
  */