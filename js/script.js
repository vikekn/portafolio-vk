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
        var clasesHabilidades = [
            "javascript",
            "htmlcss",
            "photoshop",
            "php",
            "c",
            "python",
            "mysql",
            "comunicacion",
            "trabajo",
            "creatividad",
            "dedicacion",
            "proyect",
            "autodidacta",
        ];

        habilidades.forEach(function(habilidad, index) {
            // Utilizamos Intersection Observer para observar las habilidades
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        habilidad.classList.add(clasesHabilidades[index]);
                    } else {
                        habilidad.classList.remove(clasesHabilidades[index]);
                    }
                });
            }, observerOptions);

            observer.observe(habilidad);
        });
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

// Ejecuto la función al cargar la página para observar las habilidades desde el inicio
window.onload = function () {
    efectoHabilidades();
};


//modal
// document.addEventListener("DOMContentLoaded", function () {
//     // eventListeners();
//     // modal();
//     openPopup();
// });

//Mostrar Menú
// function eventListeners() {
//     const mobileMenu = document.querySelector(".mobile-menu");

//     mobileMenu.addEventListener("click", navegacionResponsive);
// }

// function navegacionResponsive() {
//     const navegacion = document.querySelector(".navegacion");

//     navegacion.classList.toggle("mostrar");
// }

//modal
// function modal() {
//     var images = document.querySelectorAll(".img-clickable");
//     images.forEach(function (image) {
//         image.addEventListener("click", function () {
//             var imageUrl = this.getAttribute("src");
//             var modalImage = document.getElementById("modal-image");
//             modalImage.setAttribute("src", imageUrl);
//         });
//     });
// }

// function openPopup() {
//     var popup = document.getElementById("popup");
//     if (popup) {
//         popup.style.display = "block";
//     } else {
//         console.error("Elemento con ID 'popup' no encontrado porque esta versión es en Español.");
//     }
// }

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }

//descargar pdf cv
function descargarCV(opcion) {
    let link = document.createElement("a");
    if (opcion === "1") {
        link.href = "curriculum.html";
    } else if (opcion === "2") {
        link.href = "curriculum-eng.html";
    } else {
        link.href =
            "https://drive.google.com/drive/folders/14g095kml68HN_aUaOOOuZw2pa_GCq6t6";
    }
    link.target = "_blank";
    link.click();
}

//funcion copiar
function copiar() {
    let texto = document.getElementById("miTexto").textContent;
    let mensajeCopiado = document.getElementById("mensajeCopiado");

    navigator.clipboard
        .writeText(texto)
        .then(() => {
            mensajeCopiado.textContent = "¡Copiado/Copy!";
            mensajeCopiado.style.display = "block"; // Mostrar el mensaje
            setTimeout(function () {
                mensajeCopiado.style.display = "none"; // Ocultar el mensaje después de un segundo
            }, 1000);
        })
        .catch((error) => {
            console.error("Error al copiar: ", error);
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

document.addEventListener("DOMContentLoaded", function () {
    // Agregar event listener para abrir el menú de navegación
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.addEventListener("click", toggleNavigation);

    // Vibración al presionar la imagen del menú móvil
    const mobileMenuImg = document.getElementById("menu-icon");
    let estaVibrando = false;
    let vibrationInterval;

    mobileMenuImg.addEventListener("mousedown", function (event) {
        if (!estaVibrando) {
            event.stopPropagation(); // Evitar que el evento 'click' en mobileMenu se dispare
            startVibration();
            setTimeout(stopVibration, 1000); // Detener la vibración después de 3 segundos
        }
    });

    function startVibration() {
        estaVibrando = true;
        startVibrationAnimation();
    }

    function startVibrationAnimation() {
        vibrationInterval = setInterval(function () {
            // Cambiar el estilo de la imagen para simular la vibración
            mobileMenuImg.style.transform =
                "translateX(" +
                (Math.random() * 2 - 1) +
                "px) translateY(" +
                (Math.random() * 2 - 1) +
                "px)";
        }, 50); // Cambiar la posición cada 50 milisegundos (20 veces por segundo)
    }

    function stopVibration() {
        clearInterval(vibrationInterval);
        estaVibrando = false;
        mobileMenuImg.style.transform = ""; // Restaurar la posición original
    }

    // Función para alternar la visibilidad del menú de navegación
    function toggleNavigation() {
        const navegacion = document.querySelector(".navegacion");
        navegacion.classList.toggle("mostrar");
    }
});
//ocultar meme
// function mostrarImagen() {
//     var imagen = document.getElementById("meme-img");
//     imagen.classList.remove("meme");
//     imagen.classList.add("meme-vista");
//     var overlay = document.querySelector(".overlay");
//     overlay.classList.add("oculto"); // Añade la clase 'oculto' al overlay
// }

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var memeImg = document.getElementById("meme-img");

    toggleButton.addEventListener("click", function() {
        memeImg.classList.toggle("hidden");
    });
});



//nav activo
// Obtener todos los enlaces de navegación
const enlaces = document.querySelectorAll(".contenedor-header .navegacion a");

// Recorrer cada enlace
enlaces.forEach(function (enlace) {
    // Agregar evento de mousedown a cada enlace
    enlace.addEventListener("mousedown", function () {
        // Si el enlace presionado no es "LANGUAGE EN" y tiene la clase "excluir-activo",
        // entonces activar el enlace actual
        if (!this.classList.contains("excluir-activo")) {
            this.classList.add("activo");
        }
    });

    // Agregar evento de mouseup a cada enlace
    enlace.addEventListener("mouseup", function () {
        // Si el enlace presionado no es "LANGUAGE EN" y tiene la clase "excluir-activo",
        // entonces desactivar el enlace actual
        if (!this.classList.contains("excluir-activo")) {
            this.classList.remove("activo");
        }
    });
});





