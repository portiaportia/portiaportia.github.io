const myButton = document.getElementById("btn-say-hello");

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

document.getElementById("btn-say-goodbye").onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");  
}

//Showing data from an input field
document.getElementById("txt-first-name")

