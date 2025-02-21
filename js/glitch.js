document.addEventListener("DOMContentLoaded", function () {
    // Crear las cajas de glitch
    const bg = document.getElementById("contenido-glitch");
    if (!bg) {
        console.error("El elemento #contenido-glitch no se encuentra en el DOM");
        return;
    }

    const count = 20;
    for (let i = 0; i < count; i++) {
        const glitchBox = document.createElement("div");
        glitchBox.className = "box";
        bg.appendChild(glitchBox);
    }

    let glitchInterval;

    // Función para activar el glitch
    function activateGlitch() {
        const glitchElements = document.getElementsByClassName("box");
        let index = 0;
    
        function glitchLoop() {
            if (index >= glitchElements.length) {
                glitchInterval = setTimeout(activateGlitch, 1500); // Reducimos el tiempo para más dinamismo
                return;
            }
    
            const glitch = glitchElements[index];
            glitch.style.left = Math.floor(Math.random() * 100) + "vw"; // Usar vw para mejor escalabilidad
            glitch.style.top = Math.floor(Math.random() * 100) + "vh";
            glitch.style.width = Math.floor(Math.random() * 400) + "px";
            glitch.style.height = Math.floor(Math.random() * 150) + "px";
            glitch.style.backgroundPosition = Math.floor(Math.random() * 100) + "px";
    
            // Agregar colores RGB aleatorios
            glitch.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
            // Aplicar filtro de desenfoque o distorsión
            glitch.style.filter = `blur(${Math.random() * 2}px)`;
    
            index++;
            glitchInterval = setTimeout(glitchLoop, 50); // Más rápido para un efecto más intenso
        }
    
        glitchLoop();
    }
    // Función para detener el glitch
    function deactivateGlitch() {
        clearTimeout(glitchInterval);
        const glitchElements = document.getElementsByClassName("box");
        for (let i = 0; i < glitchElements.length; i++) {
            glitchElements[i].style.left = "";
            glitchElements[i].style.top = "";
            glitchElements[i].style.width = "";
            glitchElements[i].style.height = "";
            glitchElements[i].style.backgroundPosition = "";
        }
    }

    // Configurar el IntersectionObserver
    const section = document.getElementById("contenido-glitch");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateGlitch();
                } else {
                    deactivateGlitch();
                }
            });
        },
        { threshold: 0.5 }
    );

    // Iniciar la observación
    observer.observe(section);

    // Asegurarse de que el glitch se active si la sección ya está visible al cargar
    if (section.getBoundingClientRect().top < window.innerHeight * 0.5) {
        activateGlitch();
    }
});

// CSS necesario (asegúrate de incluir esto en tu estilo.css)
const glitchStyles = `
    #contenido-glitch {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1; /* Asegúrate de que esté detrás del contenido principal */
    }
    .box {
        position: absolute;
        background: url('img/glitch-bg.webp') no-repeat; /* Cambia esto por la imagen de glitch que desees */
        opacity: 0.8;
        pointer-events: none; /* Evita que interfiera con interacciones */
    }
`;