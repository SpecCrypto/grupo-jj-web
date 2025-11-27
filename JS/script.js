document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. CÓDIGO DEL MENÚ (TU CÓDIGO ORIGINAL)
       ========================================= */
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');

    if (menuToggle) { // Pequeña seguridad por si acaso
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar menú
            navMobile.classList.toggle('active');
            
            // Cambiar el ícono (opcional)
            if(navMobile.classList.contains('active')) {
                menuToggle.innerHTML = "✕"; // Cruz de cerrar
            } else {
                menuToggle.innerHTML = "☰"; // Hamburguesa
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-mobile a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            if (menuToggle) menuToggle.innerHTML = "☰";
        });
    });


    /* =========================================
       2. CÓDIGO DEL CARRUSEL
       ========================================= */
    
    // Seleccionamos todas las imágenes que tengan la clase .hero-slide
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 3000ms = 3 segundos

    function nextSlide() {
        // Verificamos que existan imágenes para evitar errores
        if (slides.length > 0) {
            // 1. Quitar la clase 'active' de la imagen actual
            slides[currentSlide].classList.remove('active');

            // 2. Calcular cuál es la siguiente imagen
            // (El operador % hace que cuando llegue a la última, vuelva a la 0)
            currentSlide = (currentSlide + 1) % slides.length;

            // 3. Poner la clase 'active' a la nueva imagen
            slides[currentSlide].classList.add('active');
        }
    }

    // Iniciar el temporizador automático solo si hay imágenes
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

});