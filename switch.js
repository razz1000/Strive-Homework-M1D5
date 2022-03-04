

let language = "IT";

if (language === "IT") {
    console.log("Bon Dia ")
} else if (language === "EN") {
    console.log("good morning ")
} else if (language === "PT") {
    console.log("Bon dia!")
} else {
    console.log("Good morning!")
}


// Instead we could be using the SWITCH statement this way: 

switch (language) {
    case "IT": 
    console.log("buonos dias")
    break;
    case "EN": 
        console.log("Welcome")
        break;
    case "PT":
        console.log("Bon Dia!")
        break;
        default:
            console.log("Your language is not supported")
            break;
}

