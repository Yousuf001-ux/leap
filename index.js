let form = document.getElementById("year-form");
let yearInput = document.getElementById("year-input");
let overlay = document.getElementById("result-overlay");
let resultContent = document.getElementById("result-content");
let resultHeading = document.getElementById("result-heading");
let resultText = document.getElementById("result-paragraph");
let closeButton = document.getElementById("close-button");


form.addEventListener("submit", function (event){
  event.preventDefault();
  let year = yearInput.value;
//   console.log(year);
  openOverlay();
  if(year === ""){
    resultHeading.innerText = "Please enter a year";
    resultText.innerText = "You must enter a year to check if it is a leap year.";
  } else if(isNaN(year)){
    resultHeading.innerText = "Invalid Input";
    resultText.innerText = "Please enter a valid number.";
  } else if(year < 0){
    resultHeading.innerText = "Invalid Year";
    resultText.innerText = "Please enter a positive number.";
  } else if(year%1 !== 0){
    resultHeading.innerText = "Invalid Year";
    resultText.innerText = "Please enter a whole number.";
  } else if(year%4 !== 0){
    changeColor();
    resultHeading.innerText = "Not a Leap Year";
    resultText.innerText = `${year} is not a leap year.`;
  } else if(year%100 === 0 && year%400 !== 0){
    changeColor();
    resultHeading.innerText = "Not a Leap Year";
    resultText.innerText = `${year} is not a leap year.`;
  } else {
    resultHeading.innerText = "A Leap Year";
    resultText.innerText = `${year} is a leap year.`;
  }
  if(year%4 === 0 && (year%100 !== 0 || year%400 === 0)){
    resultHeading.innerText = "A Leap Year";
    resultText.innerText = `${year} is a leap year.`;
  }
  form.reset();
});

closeButton.addEventListener("click", closeOverlay)

function openOverlay(){
    overlay.classList.remove("result-overlay");
    overlay.classList.add("result-overlay-visible");
}

function closeOverlay(){
    if(overlay.classList.contains("result-overlay-visible")){
        overlay.classList.remove("result-overlay-visible");
        overlay.classList.add("result-overlay");
    }
}

function changeColor(){
    resultContent.classList.remove("result-content");
    resultContent.classList.add("result-content-notaleap");

    resultHeading.classList.remove("result-heading");
    resultHeading.classList.add("result-heading-notaleap");
}