
/* Dato un array contenente una lista di cinque immagini */

const immagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];


/* inserire immagini nel div container */

    /* creare div con classe item */

 for (let i = 0; i < immagini.length; i++) {
    const element = immagini[i];
    
    document.getElementById('container').innerHTML += '<div class="item active"></div>';

    /* inserire img nel div con classe item */

    const img = document.getElementsByClassName("item");

    img[0].innerHTML = '<img src="">';


 }


