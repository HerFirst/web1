const images = [
	'0.jpg',
	'1.jpg',
	'2.jpg',
]

let i = 0
// let i = Math.floor(Math.random() * images.length)
// const image = document.createElement('img')
const image = document.querySelector('img')
image.src = `${images[i]}`
// document.body.appendChild(image)
