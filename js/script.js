//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
var hash = '#'
for (let i = 0; i < 6; i++){
let count = Math.random() * hexArr.length
count = Math.floor(count)
hash += hexArr[count]
}
body.style.backgroundColor = hash
}
