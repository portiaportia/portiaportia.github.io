const submitRaccoon = (e) => {
  e.preventDefault();
  document.getElementById("results").classList.remove("hidden");
  const form = document.getElementById("form-raccoon");

  const userName = form.elements["raccoon-name"].value;
  const birthDay = form.elements["birth-date"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;
  const size = getRadioValue("size");
  console.log("Name: " + userName);
  console.log("Dob: " + birthDay);
  console.log("Size: " + size);
  console.log("Demeanor: " + demeanor);
  console.log("Agreed to terms: " + termsChecked);
};

const getRadioValue = (itemName) => {
  let radios = document.getElementsByName(itemName);
  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

window.onload = () => {
  document.getElementById("form-raccoon").onsubmit = submitRaccoon;
};
