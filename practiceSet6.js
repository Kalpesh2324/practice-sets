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
// 1. For loop 1 to 10
for (let i = 1; i <= 10; i++) {
 console.log(i);
}
 */


/* 
// 2. While loop 10 to 1
let i = 10;
while (i >= 1) {
 console.log(i);
 i--;
}
 */


/* 
// 3. Do...while 1 to 5
let j = 1;
do {
 console.log(j);
 j++;
} while (j <= 5);
// 4. Even numbers 1 to 20
for (let k = 1; k <= 20; k++) {
 if (k % 2 === 0) console.log(k);
}
 */

/* 
// 5. Break at 7
for (let n = 1; n <= 10; n++) {
 if (n > 7) break;
 console.log(n);
}
 */


/* // 6. Continue multiples of 3
for (let m = 1; m <= 10; m++) {
 if (m % 3 === 0) continue;
 console.log(m);
}
 */



