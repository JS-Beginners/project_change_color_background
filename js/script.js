//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['#ff0000', '#3cb371', '#0000ff', '#ffa500', '#ff6375', '#6a5acd'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor = colors[colorIndex];
}
