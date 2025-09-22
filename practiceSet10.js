/* Practice Set 10 — Strings
Covers:
- Creating and manipulating strings
- String properties and methods (length, slice, substring, replace, includes, etc.)
- Template literals with variables and expressions
Goal: Practice handling and formatting text in JavaScript. */

//Questions:- 
/* 
1. Create a string variable with your full name and print its length.
2. Convert the string to uppercase and lowercase.
3. Trim extra spaces from a string.
4. Extract your first name using slice() or substring().
5. Replace a part of a string with another word.
6. Check if your string contains a specific word.
7. Split a sentence into words using split().
8. Use template literals to print a formatted message with your name and age.
 */


/* 
//1. 
let namee = "kalpesh dubey";
console.log(namee.length); 
*/

/* 
//2
let namee = "kalpesh dubey";
console.log(namee.toUpperCase());
console.log(namee.toLowerCase());
 */

/* 
//3
let namee = "    kalpesh dubey   ";
console.log(namee.trim());
 */

/* 
//4.
let namee = "kalpesh dubey";
console.log(namee.slice(0,7));
console.log(namee.substring(0,7));
 */


/* 
//5.
let namee = "kalpesh dubey";
console.log(namee.replace("dubey","kalpesh"));
console.log(namee.replaceAll("e","kkkkk"));
 */


/* 
//6.
let namee="kalpesh dubey";
console.log(namee.includes("kalpesh"));
 */

/* 
//7.
let namee ="kalpesh dubey";
console.log(namee.split(" ")); 
*/

/* 
//8.
let namee = "kalpesh";
let age  = 23;
console.log(`My name is ${namee} and my age is ${age}.`);
 */