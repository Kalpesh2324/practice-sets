/* Practice Set 5 — Conditionals
Covers:
- if, else, and else if statements
- switch statements for multiple conditions
- Building small programs with conditions (grades, age categories, days of the week)
Goal: Learn how to control the flow of your program using conditionals.
 */

// Questions:-

/* 
1. Write an if statement to check if a number is positive and print a message.
2. Write an if...else statement to check if a number is even or odd.
3. Write an if...else if...else to assign grades based on score.
4. Use a switch statement to print a message based on a day of the week.
5. Create a small program to check if a person is a child, teenager, adult, or senior based
on age using conditionals. 
*/

// Solutions:- 


/* 
let a = 12;
if(a>0){
console.log(`${a} is the positive number`);
}
 */


/* 
let a = 11;

if (a%2==0){
    console.log("It is an even number");

} else{
    console.log("It is an odd number.");
}

*/



/* 
let score = 90;
if (score < 50) {
    console.log("Your grade is not that much good.");
}
if (score >= 50 && score < 70) {
    console.log("You got grade B");
} else if (score >= 70 && score < 80) {
    console.log("You got grade A");
}
else if (score >= 80 && score < 100) {
    console.log("You got A+");
}
 */

/* 
let day = "monday";
switch (day){
    case "monday":
    console.log("It is monday.");
    break;
    case "tuesday":
        console.log("It is tuesday.");
        break;
    case "wed":
        console.log("It is wed today.")
        break;
        case "thur":
            console.log("It is thur.");
            break;

}
 */


/*

let age = 25;
if(age<12){
    console.log("Child");
} else if(age>=12 && age<=17){
    console.log("Teenager");
} else if (age>=18 && age<60){
    console.log("Adult");
}else if (age>=60){
    console.log("Senior Citizen");
}
    
*/


// This is my first time when I'm uploading file through terminal.