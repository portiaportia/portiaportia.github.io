const bounceBall = () => {
  const ballElement = document.getElementById("ball");
  //const bounceButton = document.getElementById("bounce-button");

  //if the ball is bouncing stop it!
  if (ballElement.classList.contains("bounce")) {
    ballElement.classList.remove("bounce");
    bounceButton.innerHTML = "Start";
  } else {
    ballElement.classList.add("bounce");
    bounceButton.innerHTML = "Stop";
  }
};

/* Execute when the page loades */
window.onload = () => {
  document.getElementById("bounce-button").onclick = bounceBall;
};
