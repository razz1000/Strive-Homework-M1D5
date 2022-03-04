/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let area = (side1, side2) => {
    return side1 * side2;
};
console.log(area(2, 2));



/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = (number1, number2) => {
    if (number1 === number2) {
        return ((number1 + number2) * 3);
    } else { 
        return number1 + number2;
    }
}
console.log(crazySum(5, 5)); // Prints out 30
console.log(crazySum(2, 5)); // prints out 7.



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = (number3) => {
        if (number3 <= 19) {
        return (19 - number3) ;
    } else {
        return ((number3 - 19) * 3);
    }
}

console.log(crazyDiff(20)); // prints 3 ( meaning that it multiplies 1 by 3. )
console.log(crazyDiff(18)); // Prints 1. 



/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundary = (n) => {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false
    }
}
console.log(boundary(20)); // Prints true
console.log(boundary(400)); // Prints true
console.log(boundary(101)); // Prints false

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = (myString) => {
    typeof(myString) === String;
    if (myString === "Strive") { 
    return myString 
} else {
    return "Strive " + myString ;
}   
}
console.log(strivify("Strive")); // Prints Strive 
console.log(strivify("rasmus")); // Prints Strive rasmus 

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let check3and7 = (positiveNumber) => {
    if (positiveNumber > 0 && positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
        return positiveNumber + " Well done"
    } else {
        return "Not accepted"
    }
}
console.log(check3and7(12)) // Prints 12 Well done

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/


let reverseString = (reverse1) => {
    return reverse1.split("").reverse().join("");
}

console.log(reverseString("rasmus")) // Prints sumsar

/* EXERCISE 8

 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/


let upperFirst = (words) => { 
    let rasmus = []
   rasmus = words.split(" ")

for (let i = 0; i < rasmus.length; i++) {
    
    rasmus[i] = rasmus[i][0].toUpperCase() + rasmus[i].substr(1);
    
}
return rasmus.join(" ")
}

console.log(upperFirst("rasmus is strive school participant")) // Spits out undefined. Not sure what I am doing wrong here.....



/* 
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = (str) => {
    return str.substring(1, str.length -1); 
}
console.log(cutString("rasmus")) // Prints "asmu"


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/


let giveMeRandom = (n) => {
    let arrWithNums = [];
   
    for(i = 0; i < n; i++) {
        arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
   
    return arrWithNums;
}
console.log(giveMeRandom(10));



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
 