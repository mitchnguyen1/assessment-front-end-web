let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

const alertColor = () => {
    alert("My favorite color is Red")
}
const alertPlace = () => {
    alert("My favorite place is California")
}
const alertRitual = () => {
    alert("My favorite ritual is Long Walks")
}


color.addEventListener('click',alertColor)
place.addEventListener('click',alertPlace)
ritual.addEventListener('click',alertRitual)

