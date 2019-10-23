//let person = new Object();

//let person = {};

let person = {
    firstName: "Amy",
    lastName: "Smith",
    age: 20,
    hobbies: ["reading","learning","studdying"],

    sayHello(){
        console.log("Hello " + this.firstName);
    },
}

//console.log(person.firstName + " " + person.lastName);

//get a key from the user and display the value
//let key = "firstName";
//console.log(person[key]);
//console.log(person["lastName"]);

//Loop through the keys
//for(let item in person){
//    console.log(item + ": " + person[item]);
//}

person.sayHello();







