/* Practice Set 9 — Objects
Covers:
- Creating objects with key-value pairs
- Accessing and modifying properties
- Adding methods to objects
- Nested objects and iteration with for...in
Goal: Get comfortable working with objects to represent real-world entities.
 */

//Questions:-

/* 
1. Create an object representing your favorite book with properties: title, author,
year.
2. Access and print the author property using both dot and bracket notation.
3. Add a new property "genre" to the object and print it.
4. Create a method in the object that prints a formatted description of the book.
5. Create a nested object representing a student with marks in 3 subjects and print
math marks.
6. Iterate over the object and print all property names and values.
*/


/* 

//1.

const obj = {
    title : "The darkness in me.",
    author : "Kalpesh",
    year : "2025"
}
console.log(obj);
 */


/*
//2.  
const obj = {
    title : "The darkness in me.",
    author : "Kalpesh",
    year : "2025"
}

console.log(obj.author);
console.log(obj["author"]);
 */
/* 
//3
const obj = {
    title : "The darkness in me.",
    author : "Kalpesh",
    year : "2025"
}

obj.genre = "Phantom";
console.log(obj); 

*/

/*
// 4
const obj = {
    title : "The darkness in me",
    author : "Kalpesh",
    year : "2025",
    description : function(){
        console.log(`${this.title} is written by ${this.author} in ${this.year}.`);
    }
}

obj.description(); */

/* 

//5.
const student = {
    name : "Kalpesh",
    age : 23,
    rollNo : 201910,
    subjects : {
      english : 60,
      maths : 75,
      science : 23
    }
}

console.log(student["subjects"]["maths"]);
 */


/* 

//6.
const student = {
    name : "Kalpesh",
    age : 23,
    rollNo : 201910,
    subjects : {
      english : 60,
      maths : 75,
      science : 23
    }
}

for (stu in student){
    console.log(`${stu} : ${student[stu]}`);
} 
    
*/