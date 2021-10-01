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

let Bred = 255,Bgreen = 255,Bblue = 255,Btextcolor = 0;
if(red === 255 && green === 255 && blue === 255){
    [Bred,Bgreen,Bblue] = 0;
    Btextcolor = 255;
}

button.style.backgroundColor = `rgb(${Bred}, ${Bgreen}, ${Bblue})`;
button.style.Color = `rgb(${Btextcolor}, ${Btextcolor}, ${Btextcolor})`;

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
