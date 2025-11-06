const submitBtn = document.getElementById("submit-btn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const fNameError = document.getElementById("fName-instructions");
const lNameError = document.getElementById("lName-instructions");
const emailError = document.getElementById("email-instructions");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (fName.value === "" || lName.value === "" || email.value === "") {
        fNameError.hidden = false;
        fName.classList.add("error-outline");
        lNameError.hidden = false;
        lName.classList.add("error-outline");
        emailError.hidden = false;
        email.classList.add("error-outline");
    }
    else {
        fNameError.hidden = true;
        fName.classList.remove("error-outline");
        lNameError.hidden = true;
        lName.classList.remove("error-outline");
        emailError.hidden = true;
        email.classList.remove("error-outline");
    }
})