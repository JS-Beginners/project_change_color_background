
//variables definition
var button = document.getElementById('button')
var body = document.getElementById('body')
var colors = ['Azure', 'Aqua', 'Beige', 'Cornsilk', 'DarkSalmon']

//initial body color
body.style.backgroundColor = 'Azure'

//click action
button.onclick = changeBackground;

//change color function
function changeBackground() {
    var colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}