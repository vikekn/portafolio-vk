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
document.addEventListener("DOMContentLoaded", function () {
    // eventListeners();
    modal();
    openPopup();
});

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
function modal() {
    var images = document.querySelectorAll(".img-clickable");
    images.forEach(function (image) {
        image.addEventListener("click", function () {
            var imageUrl = this.getAttribute("src");
            var modalImage = document.getElementById("modal-image");
            modalImage.setAttribute("src", imageUrl);
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


//glitch

function activateGlitch() {
    let glitch = document.getElementsByClassName("box");
    let index = 0;

    function glitchLoop() {
        glitch[index].style.left = Math.floor(Math.random() * 160) + "vh";
        glitch[index].style.top = Math.floor(Math.random() * 80) + "vh";
        glitch[index].style.width = Math.floor(Math.random() * 300) + "px";
        glitch[index].style.height = Math.floor(Math.random() * 100) + "px";
        glitch[index].style.backgroundPosition =
            Math.floor(Math.random() * 100) + "px";

        index++;
        if (index < glitch.length) {
            setTimeout(glitchLoop, 70); // Continúa con el siguiente elemento después de 2 segundos
        } else {
            setTimeout(deactivateGlitch, 2000); // Desactiva el glitch después de 1 segundo
        }
    }

    glitchLoop();
}

function deactivateGlitch() {
    let glitch = document.getElementsByClassName("box");
    let index = 0;

    function applyNextProperty() {
        if (index < glitch.length) {
            glitch[index].style.left = "";
            glitch[index].style.top = "";
            glitch[index].style.width = "";
            glitch[index].style.height = "";
            glitch[index].style.backgroundPosition = "";

            index++;

            // Continúa aplicando las propiedades cada 2 segundos
            setTimeout(applyNextProperty, 50);
        } else {
            // Después de aplicar todas las propiedades, activa el glitch nuevamente después de 4 segundos
            setTimeout(activateGlitch, 4000);
        }
    }

    // Comienza aplicando la primera propiedad
    applyNextProperty();
}

let bg = document.getElementById("contenido-glitch");
let count = 20;
for (let i = 0; i < count; i++) {
    let glitchBox = document.createElement("div");
    glitchBox.className = "box";
    bg.appendChild(glitchBox);
}

activateGlitch(); // Inicia el ciclo activando el glitch por primera vez

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

//deletrear

// Elemento donde se mostrará el texto
const elementoTexto = document.getElementById('texto');

// Función para deletrear el texto
function deletrearTexto(elemento) {
  const texto = elemento.getAttribute('data-deletrear');
  let index = 0;
  
  function deletrear() {
    // Si el índice es menor que la longitud del texto
    if (index < texto.length) {
      // Mostrar el texto hasta el índice actual
      elemento.textContent = texto.substring(0, index + 1) + "_";
      // Llamar recursivamente a la función con el siguiente índice
      setTimeout(deletrear, 100);
      index++;
    } else {
      // Cuando se completa el deletreo, esperar 4 segundos y luego empezar a borrar el texto
      setTimeout(borrarTexto, 4000);
    }
  }

  deletrear();
}

// Función para borrar el texto
function borrarTexto() {
  let texto = elementoTexto.getAttribute('data-deletrear');
  let index = texto.length;

  function borrar() {
    // Si el índice es mayor que 0
    if (index > 0) {
      // Borrar el último caracter del texto
      elementoTexto.textContent = texto.substring(0, index - 1) + "_";
      // Llamar recursivamente a la función con el índice anterior
      setTimeout(borrar, 100);
      index--;
    } else {
      // Cuando se completa el borrado, empezar a deletrear nuevamente
      deletrearTexto(elementoTexto);
    }
  }

  borrar();
}

// Función para hacer parpadear el guion bajo
function parpadearGuion() {
  // Si el guion está visible, ocultarlo
  if (elementoTexto.textContent.endsWith("_")) {
    elementoTexto.textContent = elementoTexto.textContent.slice(0, -1);
  } else { // Si el guion no está visible, mostrarlo
    elementoTexto.textContent += "_";
  }
  // Llamar recursivamente a la función después de un breve intervalo
  setTimeout(parpadearGuion, 500);
}

// Iniciar el proceso
deletrearTexto(elementoTexto);
parpadearGuion();