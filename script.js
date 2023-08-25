const result = document.querySelector(".result");
const digits = document.querySelectorAll("button");
const symbols = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  result.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && symbols.includes(btnValue)) return;
    output += btnValue;
  }
  result.value = output;
};

digits.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});