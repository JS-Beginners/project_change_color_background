//Choose a random color
const button = document.getElementsByClassName('button');
const body = document.getElementsByClassName('container');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];


button[0].addEventListener('click', function () {
const randomcolor= colors[Math.floor(Math.random()*colors.length)];
body[0].style.background= randomcolor;
return Math.PI; 
});