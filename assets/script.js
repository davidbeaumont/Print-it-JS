const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Crée des variables sur les selecteurs arrows
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

// Ajoute un event listener sur chacune des flèches. 
arrow_left.addEventListener("click", () => {
	console.log('vous avez cliqué à gauche')
})
arrow_right.addEventListener("click", () => {
	console.log('vous avez cliqué à droite')
})

//Ajoute des bullet points au slider
const dots = document.querySelector(".dots")
const dot_selected = document.querySelector(".dot_selected")

for (i = 0 ; i < slides.length ; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
 	// Ajoute la classe 'dot_selected' uniquement au premier dot
	if (i === 0) {
		dot.classList.add('dot_selected');
	  }

	dots.appendChild(dot)
}