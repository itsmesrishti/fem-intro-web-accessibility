const submitBtn = document.getElementById("submit-btn");
const inputs = document.querySelectorAll("input");
const errorMsgs = document.querySelectorAll(".text-error");
const msgInput = document.getElementsByTagName("textarea")[0];
const toast = document.querySelector(".toast");

let emptyInputs = [];
let nonEmptyInputs = [];

function separateInputs(inputs) {
  inputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
      if (input.checked === false) {
        emptyInputs.push(input);
      } else {
        nonEmptyInputs.push(input);
      }
    } else if (input.type === "text" || input.type === "email") {
      if (input.value === "") {
        emptyInputs.push(input);
      } else {
        nonEmptyInputs.push(input);
      }
    }
  });

  if (msgInput.value === "") {
    emptyInputs.push(msgInput);
  } else {
    nonEmptyInputs.push(msgInput);
  }
}

function showError() {
  emptyInputs.forEach((input) => {
    errorMsgs.forEach((errorMsg) => {
      if ((errorMsg.id == input.getAttribute("aria-describedby"))) {
        errorMsg.hidden = false;
        input.classList.add("error-outline");
      }
    });
  });
}

function removeError() {
  nonEmptyInputs.forEach((input) => {
    errorMsgs.forEach((errorMsg) => {
      if ((errorMsg.id == input.getAttribute("aria-describedby"))) {
        errorMsg.hidden = true;
        input.classList.remove("error-outline");
      }
    });
  });
}

function resetArrays() {
  emptyInputs = [];
  nonEmptyInputs = [];
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  separateInputs(inputs);
  showError();

  if (nonEmptyInputs.length === 6) {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
    inputs.forEach(input => {
      input.value = "";
      input.checked = false;
    });
    msgInput.value="";
  }

  removeError();
  resetArrays();
});
