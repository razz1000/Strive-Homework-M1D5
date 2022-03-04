

 
console.log("----------------------Title---------------------")


function rasmus() {
    console.log("Hi there")
    
}


rasmus();


function name(params) {
    


}
//We defined a function that takes 2 parameters. Will return the sum of the two. 
function plus(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber
    return result
}

// This below one is probably a more cleaner way to do it : 
function plus(firstNumber, secondNumber) {
    return firstNumber + secondNumber
    
}


sum = plus(2,3); // wea are storing the result. 

sum2 = console.log(plus(50, 50));




 
function printTitle(titleText) {
    console.log("========" + titleText + "========")
};

printTitle("This is the title");




let squareFunction = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber
};

console.log(squareFunction(1,2));



let squareFunction2 = (firstNumber2, secondNumber2) => { 
    return firstNumber2 + secondNumber2
}

console.log(squareFunction2(20, 20))


