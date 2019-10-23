let MenuItem = {
    Cheese: 3,
    Banana: 2,
    OJ:5
}

//loop through and double all the items, then
//add them to the total
total = 0

for(let item in MenuItem){
    MenuItem[item] *= 2;
    total += MenuItem[item];
}

console.log("Total is " + total);