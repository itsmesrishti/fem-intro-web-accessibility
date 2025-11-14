const submitBtn = document.getElementById("submit-btn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const fNameError = document.getElementById("fName-instructions");
const lNameError = document.getElementById("lName-instructions");
const emailError = document.getElementById("email-instructions");
const inputs = document.querySelectorAll("input");
const errorMsgs = document.querySelectorAll(".text-error");

let emptyInputs = [];
let nonEmptyInputs = [];

function separateInputs(inputs) {
  inputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
      if (input.checked === false) {
        emptyInputs.push(input.id);
      } else {
        nonEmptyInputs.push(input.id);
      }
    } else if (input.type === "text" || input.type === "email") {
      if (input.value === "") {
        emptyInputs.push(input.id);
      } else {
        nonEmptyInputs.push(input.id);
      }
    }
  });
}

function showError() {
  emptyInputs.forEach((input) => {
    errorMsgs.forEach((errorMsg) => {
      if ((errorMsg.id = input.getAttribute("aria-describedby"))) {
        errorMsg.hidden = false;
        input.classList.add("error-outline");
      }
    });
  });
}

function removeError() {
  nonEmptyInputs.forEach((input) => {
    errorMsgs.forEach((errorMsg) => {
      if ((errorMsg.id = input.getAttribute("aria-describedby"))) {
        errorMsg.hidden = true;
        input.classList.remove("error-outline");
      }
    });
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("empty: " + emptyInputs);
  console.log("non-empty: " + nonEmptyInputs);
  separateInputs(inputs);
  console.log("empty: " + emptyInputs);
  console.log("non-empty: " + nonEmptyInputs);
  //   showError();
  //   removeError();
});
