/* Practice Set 8 — Arrays
Covers:
- Creating and modifying arrays
- Accessing elements with indexes
- Common methods (push, pop, shift, unshift, splice, slice, indexOf)
- Iterating arrays with for, for...of, and forEach
Goal: Learn how to store, update, and process collections of data in arrays. */

// Questions:-


/* 
1. Create an array of your favorite foods and print it.
2. Replace the second item in the array with another food.
3. Add a new food at the end and at the beginning of the array.
4. Remove the first and last items from the array.
5. Find the index of a specific food.
6. Extract a subarray of 2 elements from the array.
7. Loop through the array and print each food item using for and for...of.
 */


/* 
//1. 
const arr = ["Cake", "Dal-chawal","paneer ki bhaji"," Baaki mujhe bhi nahi pata"];
console.log(arr);
 */

/* 
//2. 
const arr = ["Cake", "Dal-chawal","paneer ki bhaji"," Baaki mujhe bhi nahi pata"];
arr[1] = "veg-Biryani";
console.log(arr);
 */

/* 
//3.
const arr = ["Cake", "Dal-chawal","paneer ki bhaji"," Baaki mujhe bhi nahi pata"];
arr.push("pulav");
arr.unshift("aloo ke parathe");
console.log(arr);
 */

/* 
//4.
const arr = ["Cake", "Dal-chawal", "paneer ki bhaji", " Baaki mujhe bhi nahi pata"];
arr.shift();
arr.pop();
console.log(arr);
 */


/* 
// 5. 
const arr = ["Cake", "Dal-chawal", "paneer ki bhaji", "Baaki mujhe bhi nahi pata"];
console.log(arr.indexOf("Baaki mujhe bhi nahi pata"));
 */
/* 
//6.
const newArr = ["a","b","c","d","e","f"];
console.log(newArr.slice(1,3));

 */
/* 
//7.

// Using for loop:- 

const newArr = ["apple","ball","cat","dog","elephant","fish"];
for(let a = 0; a < newArr.length-1;a++){
    console.log(newArr[a]);
}

//OR//

// Using for...of loop:-
const newArr = ["apple","ball","cat","dog","elephant","fish"];
for( let names of newArr){
    console.log(names);
}

//Or//

// Using forEach loop:- 

const newArr = ["apple","ball","cat","dog","elephant","fish"];
newArr.forEach(names=>{console.log(names)});
*/