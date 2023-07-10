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

// Je crée des variables sur les selecteurs arrows
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
// Mettre un event listener sur chacune des flèches. 
arrow_left.addEventListener("click", () => {
	console.log('vous avez cliqué à gauche')
})
arrow_right.addEventListener("click", () => {
	console.log('vous avez cliqué à droite')
})

//Ajoutez des bullet points au slider

const dots = document.querySelector(".dots")

for (i=0 ; i < slides.length ; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dots.appendChild(dot)

	dot.addEventListener('click', () => {
		// Ajouter la classe 'dot_selected' uniquement au dot cliqué
		dot.classList.add('dot_selected');
})
}