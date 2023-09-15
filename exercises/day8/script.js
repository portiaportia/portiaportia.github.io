const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const validateForm = () => {
  const firstName = document.getElementById("txt-first-name").value;
  const lastName = document.getElementById("txt-last-name").value;
  const age = document.getElementById("txt-age").value;
  const resultP = document.getElementById("result");

  if (
    isBlank(firstName, "error-first-name") |
    isBlank(lastName, "error-last-name") |
    isNotNumber(age, "error-age")
  ) {
    return false;
  }

  resultP.innerHTML = "Hello " + firstName + " " + lastName + "!";
};

const isBlank = (data, id) => {
  if (data.trim() == "") {
    document.getElementById(id).classList.remove("hide");
    return true;
  }
  return false;
};

const isNotNumber = (data, id) => {
  if (data.trim() == "" || isNaN(data)) {
    document.getElementById(id).classList.remove("hide");
    return true;
  }

  return false;
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  document.getElementById("button-validate").onclick = validateForm;
};
