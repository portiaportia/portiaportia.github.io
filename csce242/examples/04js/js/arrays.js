document.getElementById("btn-show-toys").onclick = () => {
    let toys = ["drum", "ball", "holla hope", "barbie", "truck"];
    let ul = document.getElementById("toy-list");

    //iterate over using a for loop
    /*for(let i=0; i < toys.length; i++){
        console.log(toys[i]);
    }*/

    //i parameter is optional
    toys.forEach((toy, i)=>{
       li = document.createElement("li");
       li.innerHTML = toy;
       ul.append(li);
    });
}

//when button clicked we will make an array table
document.getElementById("btn-show-toy-table").onclick = () => {
    let toys = [];
    toys["Drum"] = 20.99;
    toys["Barbie"] = 9.85;
    toys["Truck"] = 50.99;
    toys["Sticker"] = 1.99;
    toys["Doll"] = 3.99;

    const table = document.getElementById("toy-table");

    for(let toy in toys){
        const price = toys[toy];
        let tr = document.createElement("tr");
        table.append(tr);
        let td1 = document.createElement("td");
        td1.innerHTML = toy;
        tr.append(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = price;
        tr.append(td2);

        tr.onclick = () => {
            document.getElementById("modal").classList.remove("hidden");
            document.querySelector("#modal h1").innerHTML = toy;
            document.querySelector("#modal p").innerHTML = `$${price}`;
        }
    }
};

document.getElementById("close").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
}