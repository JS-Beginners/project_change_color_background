// Select all elements needed
const button = document.querySelector("button");
const body = document.querySelector("body");
const codeInput = document.querySelector(".colorCode > input");

//Choose a random color
const arrayOfColorFunctions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function newColor() {
  randomColor = "#";
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];
    randomColor += value;
  }
  codeInput.value = randomColor;
  button.style.color = randomColor;
  body.style.backgroundColor = randomColor;
}

button.addEventListener("click", newColor);
