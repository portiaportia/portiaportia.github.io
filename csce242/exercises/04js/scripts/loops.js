//first loop example
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`);
        };
    }
/*
     for(let i = 0; i < 10; i++){
        loopResult.innerHTML += `<p>${i+1}</p>`;
    }*/
};

//looping through a range
document.getElementById("btn-loop-range").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");

    if(startNum < 0 || startNum > 5){
        errorStart.innerHTML = "* Invalid";
        errorStart.classList.remove("hidden");
        return;
    }

    if(endNum < 10 || endNum > 20 || endNum < startNum){
        errorEnd.innerHTML = "* Invalid";
        errorEnd.classList.remove("hidden");
        return;
    }

    ul.innerHTML = "";

    for(let i = startNum; i < endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
};

//first array example
document.getElementById("btn-show-toys").onclick = () => {
    const toys = ["doll", "skate board", "mini car", "board game", "braclets"];
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    /*
    for(let i = 0; i < toys.length; i++){
        const p = document.createElement("p");
        p.innerHTML = toys[i];
        toyList.append(p);
    }*/

    toys.forEach((toy)=>{
        const p = document.createElement("p").innerHTML;
        p.innerHTML = toy;
        toysList.append(p);
    });
};

//show a table of toys and prices
document.getElementById("btn-show-toy-prices").onclick = () => {
    const div = document.getElementById("toy-info");
    div.innerHTML = "";
    
    const toyMap = [];
    toyMap["doll"]= 129.99;
    toyMap["skate board"] = 200.00;
    toyMap["mini car"] = 1.99;
    toyMap["board game"] = 20.99;
    toyMap["braclettes"] = 19.24;

    const table = document.createElement("table");
    div.append(table);
    table.append(createTR("Name", "Price", "th"));

    for(let toy in toyMap) {
        table.append(createTR(toy, "$" + toyMap[toy], "td")); 
    }
};

const createElement = (data, type) => {
    console.log(type);
    const elem = document.createElement(type);
    elem.innerHTML = data;
    return elem;
};

const createTR = (data1, data2, type) => {
    const tr = document.createElement("tr");
    tr.append(createElement(data1, type));
    tr.append(createElement(data2, type));
    return tr;
}