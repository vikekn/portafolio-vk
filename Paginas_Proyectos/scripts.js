document.addEventListener('DOMContentLoaded', function () {
    initSmoothScroll();
    initGalleryModalCarousel();
});

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (!target) return;

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function initGalleryModalCarousel() {
    const thumbnails = Array.from(document.querySelectorAll('.img-clickable'));
    if (thumbnails.length === 0) return;

    const modalEl = document.getElementById('exampleModal');
    const carouselEl = document.getElementById('projectCarousel');

    if (!modalEl || !carouselEl) return;

    const innerEl = carouselEl.querySelector('.carousel-inner');
    const indicatorsEl = carouselEl.querySelector('.carousel-indicators');

    if (!innerEl || !indicatorsEl) return;

    // Armo el carrusel usando las mismas imágenes del grid (así no duplico el listado)
    innerEl.innerHTML = '';
    indicatorsEl.innerHTML = '';

    thumbnails.forEach(function (img, idx) {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || ('Imagen ' + (idx + 1));

        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#projectCarousel');
        indicator.setAttribute('data-bs-slide-to', String(idx));
        indicator.setAttribute('aria-label', 'Ir a la imagen ' + (idx + 1));
        if (idx === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicatorsEl.appendChild(indicator);

        const item = document.createElement('div');
        item.className = 'carousel-item' + (idx === 0 ? ' active' : '');

        const slideImg = document.createElement('img');
        slideImg.src = src;
        slideImg.alt = alt;
        slideImg.className = 'd-block';

        item.appendChild(slideImg);
        innerEl.appendChild(item);
    });

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
        interval: false,
        ride: false,
        touch: true,
        keyboard: true,
        wrap: true
    });

    thumbnails.forEach(function (img, idx) {
        img.addEventListener('click', function () {
            modal.show();
            carousel.to(idx);
        });
    });

    modalEl.addEventListener('hidden.bs.modal', function () {
        carousel.pause();
    });
}
