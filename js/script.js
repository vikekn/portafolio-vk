let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("photoshop");
//         habilidades[3].classList.add("php");
//         habilidades[4].classList.add("c");
//         habilidades[5].classList.add("python");
//         habilidades[6].classList.add("mysql");
//         habilidades[7].classList.add("comunicacion");
//         habilidades[8].classList.add("trabajo");
//         habilidades[9].classList.add("creatividad");
//         habilidades[10].classList.add("dedicacion");
//         habilidades[11].classList.add("proyect");
//         habilidades[12].classList.add("autodidacta");

//     }
// }
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        var habilidades = document.querySelectorAll(".progreso");
        var clasesHabilidades = ["javascript", "htmlcss", "photoshop", "php", "c", "python", "mysql", "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect", "autodidacta"];
        habilidades.forEach(function (habilidad, index) {
            if (!habilidad.classList.contains(clasesHabilidades[index])) {
                habilidad.classList.add(clasesHabilidades[index]);
            }
        });
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//modal
document.addEventListener('DOMContentLoaded', function () {
    modal();
    openPopup();
});

//modal
function modal() {
    var images = document.querySelectorAll('.img-clickable');
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            var imageUrl = this.getAttribute('src');
            var modalImage = document.getElementById('modal-image');
            modalImage.setAttribute('src', imageUrl);
        
        });
    });
}





function openPopup() {
    document.getElementById("popup").style.display = "block";
}

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

//descargar pdf cv
function descargarCV() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/14g095kml68HN_aUaOOOuZw2pa_GCq6t6';
    link.target = '_blank';
    link.click();
}

//funcion copiar
function copiar() {
    let texto = document.getElementById("miTexto").textContent;
    let mensajeCopiado = document.getElementById("mensajeCopiado");

    navigator.clipboard.writeText(texto)
        .then(() => {
            mensajeCopiado.textContent = '¡Copiado/Copy!';
            mensajeCopiado.style.display = 'block'; // Mostrar el mensaje
            setTimeout(function() {
                mensajeCopiado.style.display = 'none'; // Ocultar el mensaje después de un segundo
            }, 1000);
        })
        .catch((error) => {
            console.error('Error al copiar: ', error);
        });
}

//lupa
// document.addEventListener('DOMContentLoaded', function () {
//     const zoomInButton = document.getElementById('zoom-in-btn');
//     const modalImage = document.getElementById('modal-image');
//     const modalImageContainer = document.getElementById('modal-image-container');

//     zoomInButton.addEventListener('click', function () {
//         modalImage.style.transform = 'scale(2.2)'; // Cambia el valor de escala según tus necesidades
//     });
// });
