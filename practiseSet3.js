/* Practice Set 3 — Data Types
Covers:
- Numbers, strings, and booleans
- Undefined and null values
- Symbols as unique identifiers
- Objects as collections of key-value pairs
Goal: Get familiar with JavaScript data types and their usage. */

// Questions:-

/* 1. Declare a number variable for your age and print it.
2. Create a string variable for your city and print it.
3. Declare a boolean variable indicating if you like JavaScript and print it.
4. Declare a variable without value and print it (undefined).
5. Declare a variable with null and print it.
6. Create an object representing a car with brand and model properties and print it.
7. Create two symbols and compare them; print the result. */


/* 
let age = "23";
console.log(age); 
*/


/* 
let city = "Mumbai";
console.log(city);
 */


/* 
let likeJS = "true";
let dislikeJS = "false";
console.log(likeJS,dislikeJS);
 */


/* 
let x;
console.log(x); //undefined
 */


/* 
let intentionallyLeft = null;
console.log(intentionallyLeft); // null
 */



/* let carModel = {
    mahindra: ["XUV500", "XUV300"],
    marcedes: "benz",
    tata: "punch",
    suzuki: ["desire", "swift"],
}

console.log(carModel); */


/* 
 This is how we can access the value if we used an array to write multiple values for the same key:-
console.log(carModel.mahindra[1]); //XUV300
console.log(carModel.suzuki[0]); //desire
 */

/* 
let s1 = Symbol("S1");
let s2 = Symbol("S1");
console.log(s1===s2); // S1 is equal to S1, but we used a Symbol. A Symbol is a unique and immutable data type 
// used as a unique identifier for object properties. 
// When we use the === operator, it also checks the data type, and since they aren’t the same, the result is false. 
 */