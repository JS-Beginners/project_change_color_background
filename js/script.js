//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')

// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const red = parseInt(Math.random()*256);
const green = parseInt(Math.random()*256);
const blue = parseInt(Math.random()*256);

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
