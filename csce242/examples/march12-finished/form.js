const submitRaccoon = (e) => {
  e.preventDefault();
  document.getElementById("results").classList.remove("hidden");

  const form = document.getElementById("form-raccoon");
  const raccName = form.elements["raccoon-name"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;

  console.log(raccName);
  console.log(getRadioValue("size"));
  console.log(demeanor);
  console.log(termsChecked);
};

const getRadioValue = (radioName) => {
  let radios = document.getElementsByName(radioName);

  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

document.getElementById("form-raccoon").onsubmit = submitRaccoon;
