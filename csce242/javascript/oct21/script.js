class Person {
    constructor(fName, lName){
        this._firstName = fName;
        this._lastName = lName;
    }

    getFirstName(){
        return this._firstName;
    }

    getLastName(){
        return this._lastName;
    }

    setFirstName(fName){
        this._firstName = fName;
    }
}

me = new Person("Amy", "Anderson");
me.setFirstName("Bobby");
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));