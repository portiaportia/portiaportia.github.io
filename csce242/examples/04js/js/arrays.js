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
    console.log("sdfew");
};