const button = document.querySelector('button');

function changeColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

button.addEventListener('click', changeColor);