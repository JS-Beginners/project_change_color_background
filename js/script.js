//Choose a random color
const button = document.querySelector("button");
const body = document.querySelector("body");

changeBackground();
button.addEventListener("click", changeBackground);

function changeBackground() {
  const h = parseInt(Math.random() * 360);
  body.style.backgroundColor = `hsl(${h}, 60%, 45%)`;
}
