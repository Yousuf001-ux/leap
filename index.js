let form = document.getElementById("year-form");
let yearInput = document.getElementById("year-input");
let overlay = document.getElementById("result-overlay");
let resultContent = document.getElementById("result-content");
let resultHeading = document.getElementById("result-heading");
let resultText = document.getElementById("result-paragraph");
let closeButton = document.getElementById("close-button");

yearInput.focus();

form.addEventListener("submit", function (event){
  event.preventDefault();
  let year = yearInput.value;

  openOverlay();
  resetColor();

  // Check if the input is empty, not a number, negative, or not an integer
  if(year === ""){
    resultHeading.innerText = "Please enter a year";
    resultText.innerText = "You must enter a year to check if it is a leap year.";
  } else if(isNaN(year)){
    // Check if the input is not a number
    resultHeading.innerText = "Invalid Input";
    resultText.innerText = "Please enter a valid number.";
  } else if(year < 0){
    // Check if the input is negative
    resultHeading.innerText = "Invalid Year";
    resultText.innerText = "Please enter a positive number.";
  } else if(year%1 !== 0){
    // Check if the input is not an integer
    resultHeading.innerText = "Invalid Year";
    resultText.innerText = "Please enter a whole number.";
  } else if(year%4 !== 0 || (year%100 === 0 && year%400 !== 0)){
    // If the year is not divisible by 4 or if it is divisible by 100 but not by 400
    changeColor();
    resultHeading.innerText = "Not a Leap Year";
    resultText.innerText = `${year} is not a leap year.`;
  } else {
    // If the year is divisible by 4 and either not divisible by 100 or divisible by 400
    resultHeading.innerText = "A Leap Year";
    resultText.innerText = `${year} is a leap year.`;
  }
  form.reset();
});

closeButton.addEventListener("click", function(){
    closeOverlay();
    yearInput.focus();
});

function openOverlay(){
    // Open the overlay
    overlay.classList.remove("result-overlay");
    overlay.classList.add("result-overlay-visible");
}

function closeOverlay(){
    // Close the overlay
    if(overlay.classList.contains("result-overlay-visible")){
        overlay.classList.remove("result-overlay-visible");
        overlay.classList.add("result-overlay");
    }
}

function changeColor(){
    // Change the color of the result content and heading to indicate that the year is not a leap year
    resultContent.classList.remove("result-content");
    resultContent.classList.add("result-content-notaleap");

    resultHeading.classList.remove("result-heading");
    resultHeading.classList.add("result-heading-notaleap");
}

function resetColor(){
    // Reset the color of the result content and heading to the default state
    resultContent.classList.remove("result-content-notaleap");
    resultContent.classList.add("result-content");

    resultHeading.classList.remove("result-heading-notaleap");
    resultHeading.classList.add("result-heading");
}