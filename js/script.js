//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', () =>  {
const colorIndex = Math.floor((Math.random()*colors.length))
body.style.backgroundColor = colors[colorIndex]
}
)
