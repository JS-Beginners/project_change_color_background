//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple' , 'lime' , 'maroon' , 'navy' , 'aqua' , 'olive' , 'silver' , 'teal' , 'rebeccapurple' , 'fuchsia' , 'coral' , 'turquoise' , 'magenta' , 'salmon' , 'orchid' , 'dodgerblue' , 'plum' , 'tomato' , 'khaki' , 'gold' , 'orange' , 'seagreen' , 'burlywood' , 'brown' , 'cadetblue' , 'crimson' , 'cyan' , 'cornsilk' , 'firebrick' , 'deepskyblue' , 'seashell' , 'saddlebrown' , 'forestgreen' , 'floralwhite' , 'ivory' , 'indigo' , 'lavender' , 'olivedrab' , 'orangered' , 'sandybrown' , 'steelblue' , 'wheat' , 'slateblue' , 'springgreen' , 'tan']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
