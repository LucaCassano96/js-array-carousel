/* Dato un array contenente una lista di cinque immagini */

const carouselImages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];


/* inseriamo le immagini nell'html */
for (let i = 0; i < carouselImages.length; i++) {

    const carouselImage = carouselImages[i];
    const carouselContainer = document.querySelector("#container");
    const carouselElement = `<div class="item hidden"> <img src="${carouselImage}" alt="immagine"></div>`;
    carouselContainer.innerHTML += carouselElement;

}


/* seleziono in un array tutti gli elementi per poterli gestire */
const carouselElements = document.querySelectorAll(".item");

let activeElement = 0;

const carouselLastElement = carouselElements.length - 1;

/* inseriamo la classe active all elemento iniziale attivo */
carouselElements[activeElement].classList.add('active')

/* seleziono pulsanti avanti indietro */
const buttonIndietro = document.querySelector(".button_indietro");
const buttonAvanti = document.querySelector(".button_avanti");


if (activeElement === 0) {
    buttonIndietro.classList.add("bottone_none");
}


if (activeElement === carouselLastElement) {
    buttonAvanti.classList.add("bottone_none");
}


/* gestisco l'evento sul click avanti */
buttonAvanti.addEventListener("click", function () {

    const oldActiveElement = activeElement;

    
    activeElement = activeElement + 1;

    carouselElements[activeElement].classList.add('active')
    carouselElements[oldActiveElement].classList.remove('active')

    if (activeElement === carouselLastElement) {
        buttonAvanti.classList.add("bottone_none");
    }

    if (activeElement !== 0) {
        buttonIndietro.classList.remove("bottone_none");
    }

})


/* gestisco l'evento sul click indietro */
buttonIndietro.addEventListener("click", function () {

    const oldActiveElement = activeElement;

    activeElement = activeElement - 1;

  
    carouselElements[activeElement].classList.add('active')
    carouselElements[oldActiveElement].classList.remove('active')

   
    if (activeElement === 0) {
        buttonIndietro.classList.add("bottone_none");
    }

    if (activeElement !== carouselLastElement) {
        buttonAvanti.classList.remove("bottone_none");
    }

})









