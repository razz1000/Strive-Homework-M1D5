



let longString = "This is a long string";

// String are actually Arrays of characters. 

console.log(longString[2]);

console.log(longString.length); // Prints the amount of characters
console.log()

/* 
for (char of longString) {
    console.log(char)
}

 */

for (let i = 0; i < longString.length; i++) {
    console.log(longString[i])
}

