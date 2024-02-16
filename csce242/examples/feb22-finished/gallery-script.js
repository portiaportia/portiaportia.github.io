//https://www.w3schools.com/w3css/w3css_modal.asp

document.querySelectorAll(".items section").forEach((section) => {
  section.onclick = (e) => {
    const dialog = (document.getElementById("dialog").style.display = "block");
    document.querySelector("#dialog-content img").src =
      e.currentTarget.querySelector("img").src;

    const dialogDetails = document.querySelector("#dialog-details");
    dialogDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = e.currentTarget.querySelector("h3").innerHTML;
    dialogDetails.append(h3);

    const p = document.createElement("p");
    p.innerHTML = e.currentTarget.querySelector("p").innerHTML;
    dialogDetails.append(p);
  };
});
