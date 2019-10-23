/*
let sum = function(a, b){
    return a + b;
}*/

let sum = (a,b) => a+b;
console.log(sum(5,10));

//create an arrow function called tripple
//it will take in one parameter, and return the triple of it
//then test it
let triple = (a)=>a*3;
console.log(triple(4));

let other = () => 5;
console.log(other());