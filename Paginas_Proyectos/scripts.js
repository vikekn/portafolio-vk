document.addEventListener('DOMContentLoaded', function () {
    modal();
    // Manejo de navegación suave
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// scripts.js

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
