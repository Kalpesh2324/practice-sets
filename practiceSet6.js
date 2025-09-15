/* Practice Set 6 — Loops
Covers:
- Using for, while, and do...while loops
- Printing sequences and ranges
- Using break and continue statements
- Working with even/odd numbers
Goal: Learn how to repeat tasks and control loop execution in JavaScript. */

// Questions:-

/* 1. Print numbers from 1 to 10 using a for loop.
2. Print numbers from 10 down to 1 using a while loop.
3. Use a do...while loop to print numbers 1 to 5.
4. Print all even numbers from 1 to 20 using a loop.
5. Use break in a loop to stop printing numbers after reaching 7.
6. Use continue in a loop to skip multiples of 3 from 1 to 10. */

// solutions:-

/* 
// 1.

for (let a = 1; a <=10; a++){
    console.log(a);
}
 */

/* 
// 2.

let a = 10;
while(a>=1){
    console.log(a);
    a--;
}
*/

/* 
// 3.

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);
 
*/


/* 
// 4.                                      

for( let a = 1; a <=20;a++ ){
    if(a%2===0){
        console.log(a);
    }
}
 */


/* 
//5.

for ( let a = 1; a<=10; a++){
    if(a>7) break;
    console.log(a);
}
 */


/* 

//6.

for ( let a = 1; a <= 10; a++ ){
    if(a%3===0) continue;
        console.log(a);
} */