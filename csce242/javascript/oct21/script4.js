class Food{
    constructor(foodName, callories){
        this._foodName = foodName;
        this._callories = callories;
    }

    getFoodName(){
        return this._foodName;
    }

    getCallories() {
        return this._callories;
    }

    getTableRow(){
        let trElem = document.createElement("tr");
        let tdNameElem = document.createElement("td");
        let tdCallElem = document.createElement("td");
        tdNameElem.innerHTML= this._foodName;
        tdCallElem.innerHTML = this._callories;
        trElem.append(tdNameElem);
        trElem.append(tdCallElem);
        return trElem;        
    }
}

//create an array of foods
foods = [];
foods.push(new Food("Popcorn", 5));
foods.push(new Food("cheese", 20));
foods.push(new Food("butter", 45));
foods.push(new Food("sprinkles",10));

let totalCalories = 0;

let tableElem = document.createElement("table");
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

for(food of foods){
    console.log(food.getFoodName());
    totalCalories += food.getCallories();

    tableElem.append(food.getTableRow());
}

console.log("Callories: " + totalCalories);





