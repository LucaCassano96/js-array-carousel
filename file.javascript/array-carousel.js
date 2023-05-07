
/* Dato un array contenente una lista di cinque immagini */

const immagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

/* inseriamo le immagini nell'html */

for (let i = 0; i < immagini.length; i++) {
    const element = immagini[i];

    console.log(element);

    const lista = document.querySelector("#container");
    const item = `<div class="item hidden"> <img src="${element}" alt="immagine"></div>`;
    lista.innerHTML += item;

/* inseriamo la classe active al primo elemento */

    elementZero = immagini[0];
    const primoElemento = document.querySelector(".item").classList.add("active");;
    elementZero.innerHTML += primoElemento;
}

/* seleziono in un arrey tutti gli elementi per poterli gestire */

const divItems = document.querySelectorAll(".item");
console.log(divItems);

let divActive = 0;

const buttonAvanti = document.querySelector(".button_avanti");
console.log(buttonAvanti);

/* gestisco l'evento sul click avanti */

buttonAvanti.addEventListener("click",
function(){

    if (divActive < divItems.length -1 ) {

        divItems[divActive].classList.remove("active");
        divActive = divActive + 1;
        divItems[divActive].classList.add("active");
    }
    

    if (divActive === divItems.length -1) {
        buttonAvanti.classList.add("bottone_none");
        
    }

}

)

let divActive2 = 4;

const buttonIndietro = document.querySelector(".button_indietro");
console.log(buttonIndietro);

/* gestisco l'evento sul click indietro */

buttonIndietro.addEventListener("click",
function(){

    if (divActive2 === divItems.length ) {

        divItems[divActive2].classList.remove("active");
        divActive2 = divActive2 -1;
        divItems[divActive2].classList.add("active");
    }
    

    if (divActive2 === divItems.length +1) {
        buttonIndietro.classList.add("bottone_none");
        
    }

    

})

   
    






    
   
   
    




/* inserire immagini nel div container */

    /* creare div con classe item */

 /* for (let i = 0; i < immagini.length; i++) { */
 /*    const element = immagini[i]; */
 /*     */
 /*    document.getElementById('container').innerHTML += '<div class="item active"></div>'; */

 /*    /* inserire img nel div con classe item */ 

 /*    const img = document.getElementsByClassName("item"); */

 /*    img[0].innerHTML = '<img src="">'; */


 /* } */


