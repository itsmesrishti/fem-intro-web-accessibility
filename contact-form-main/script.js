const submitBtn = document.getElementById("submit-btn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const fNameError = document.getElementById("fName-instructions");
const lNameError = document.getElementById("lName-instructions");
const emailError = document.getElementById("email-instructions");
const inputs = document.querySelectorAll("input");
const errorMsgs = document.querySelectorAll(".text-error")

function checkInput(inputs) {
    inputs.forEach((input) => {
        if (input.value === "" || input.checked === false) {
            errorMsgs.forEach((errorMsg) => {
                if (errorMsg.id = input.getAttribute("aria-describedby")) {
                    errorMsg.hidden = false;
                    input.classList.add("error-outline")
                }
                
            })
        } else {
            
        }
    })
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput(inputs);
});
