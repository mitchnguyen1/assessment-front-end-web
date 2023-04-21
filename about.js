console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//mouse over event for image to alert user
//image != id,class. grab the first and only image element
let image = document.querySelector('img')

const alertUser = () => {
	alert("YOU'RE THE BEST")
}
image.addEventListener('mouseover',alertUser)