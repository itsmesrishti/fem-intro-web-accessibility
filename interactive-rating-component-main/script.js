const ratingForm = document.getElementById("rating-form");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert("clicked submit btn");
});