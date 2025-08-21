const ratingForm = document.getElementById("rating-form");
const submitBtn = document.getElementById("submit-btn");
const inputFields = Array.from(document.querySelectorAll("fieldset input"));
const thanksCard = document.getElementById("thanks-card");
const selectedRating = document.getElementById("selected-rating");

function findRating(hasRating) {
  let rating = undefined;

  switch (hasRating) {
    case "one-star":
      rating = 1;
      break;
    case "two-star":
      rating = 2;
      break;
    case "three-star":
      rating = 3;
      break;
    case "four-star":
      rating = 4;
      break;
    case "five-star":
      rating = 5;
      break;
  }

  return rating;
}

function isRatingGiven() {
  let hasRating = inputFields.filter((input) => input.checked);
  if (hasRating.length === 0) {
    return false;
  } else {
    selectedRating.innerText = findRating(hasRating[0]["id"]);
    return hasRating;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isRatingGiven()) {
    thanksCard.removeAttribute("hidden");
    ratingForm.setAttribute("hidden", true);
  } else {
    window.alert("give a rating first");
  }
});
