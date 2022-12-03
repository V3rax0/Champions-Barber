const imagenes = ['./img/slideShow/slide1.jpg', './img/slideShow/slide2.jpg', './img/slideShow/slide3.jpg', './img/slideShow/slide4.jpg', './img/slideShow/slide5.jpg']
let contador = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.slidershow__atras'),
        adelante = contenedor.querySelector('.slidershow__adelante'),
        img = contenedor.querySelector('.slideshow__imgs'), 
        tgt = e.target;

        if(tgt == atras) {
            if(contador > 0) {
                img.src = imagenes[contador - 1]
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1];
                contador = imagenes.length - 1
            }
        } else if(tgt == adelante) {
            if(contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1]
                contador++
            } else {
                img.src = imagenes[0];
                contador = 0
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".slideshow")
    carrousel(contenedor)
})