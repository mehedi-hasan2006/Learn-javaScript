// Function is a block of code that performs a specific task, can be invoked/call whenever needed

function sum(a, b){
    console.log(a+b);
}

sum(12, 20);


// using return keyword
function zog(x, y){
    s = x + y;
    return s;
}
let zogfol = zog(5, 6);
console.log(zogfol)


//Arrow Function =>

//multiplication

function mul(a, b){
    return a*b;
}

const gunFol= (a, b) =>{
    return a*b;
};



//Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str){
    let count =0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "o" || char === "i" || char === "u"){
            count++;
        } 
    }
    return count;
}

let result = countVowels("mehedi hasan");
console.log(result);


//Qs. Create an arrow function to perform the same task.

const countVow = (str) => {
let count =0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "o" || char === "i" || char === "u"){
            count++;
        } 
    }
    return count;
}

let findResults = countVow("i'm learning javaScript");
console.log(findResults);