function showMessage() {
    //alert("hi");

    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello";
    messageP.className = "special";
}

function sayWelcome() {
    const welcomeP = document.getElementById("welcome");
    const text = document.getElementById("txtName").value;
    welcomeP.innerHTML = "Welcome " + text;
}