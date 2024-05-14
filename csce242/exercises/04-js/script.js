/* 
    I'm a comment
*/
let item = "data";

const sayHello = () => {
    const messageP = document.getElementById("message");    //I'm also a comment
    messageP.innerHTML = "Hello";
}

const styleMessage = () => {
    const styleP = document.getElementById("fun-message");
    styleP.classList.add("special");
}

const hideKangeroo = () => {
    document.getElementById("img-kang").classList.add("hidden");
}

document.getElementById("btn-hi").onclick = sayHello;
document.getElementById("btn-style").onclick = styleMessage;
document.getElementById("img-kang").onclick = hideKangeroo;

document.getElementById("btn-rainbow").onclick = () => {
    document.getElementById("item").classList.add("rainbow");
};

document.getElementById("slider").oninput = () => {
    const val = document.getElementById("slider").value;
    document.getElementById("slide-val").innerHTML = val;
}


