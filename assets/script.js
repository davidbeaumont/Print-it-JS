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
// Ajoute un event listener sur chacune des flèches.
const diapoPrecedente = document.querySelector('.arrow_left')
const diapoSuivante = document.querySelector('.arrow_right')

diapoPrecedente.addEventListener("click", showPrevSlide)
diapoSuivante.addEventListener("click", showNextSlide)

//Ajoute des bullet points au slider
const dots = document.querySelector(".dots")

for (let i in slides) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
 	// Ajoute la classe 'dot_selected' uniquement au premier dot
	if (i === 0) {
	dot.classList.add('dot_selected')
	  }
	dots.appendChild(dot)
}

// Affiche le slider en javascript
let currentSlideIndex = 0

function displaySlide(slideIndex) {
  const banner = document.getElementById("banner")
  const bannerImage = banner.querySelector(".banner-img")
  const tagLine = banner.querySelector("p")

  const slide = slides[slideIndex]
  bannerImage.src = "./assets/images/slideshow/" + slide.image
  bannerImage.alt = "Banner Print-it"
  tagLine.innerHTML = slide.tagLine

  const dotSelected = document.querySelectorAll(".dot")
  dotSelected.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('dot_selected')
    } else {
      dot.classList.remove('dot_selected')
    }
  })
}

function showNextSlide() {
	currentSlideIndex++
	if (currentSlideIndex >= slides.length) {
	  currentSlideIndex = 0
	}
	displaySlide(currentSlideIndex)
  }

function showPrevSlide() {
	currentSlideIndex--
	if (currentSlideIndex < 0) {
	  currentSlideIndex = slides.length - 1
	}
	displaySlide(currentSlideIndex)
  }
  
// Afficher la première diapositive
displaySlide(currentSlideIndex)