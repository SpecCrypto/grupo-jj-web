/* =========================================
   ARCHIVO JAVASCRIPT PRINCIPAL
   - Control del Menú Móvil
   - Control del Carrusel Hero 3D
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. MENÚ MÓVIL (INTERACCIÓN)
       ========================================= */
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');

    // Evento al hacer clic en el botón de hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar el menú
            navMobile.classList.toggle('active');
            
            // Lógica para cambiar el ícono y la posición del botón
            if (navMobile.classList.contains('active')) {
                menuToggle.innerHTML = "✕"; // Cambiar a Cruz de cerrar
                
                // Fijar botón para que no se pierda al hacer scroll mientras el menú está abierto
                menuToggle.style.position = "fixed"; 
                menuToggle.style.right = "20px";
                menuToggle.style.top = "25px";
            } else {
                menuToggle.innerHTML = "☰"; // Regresar a Hamburguesa
                menuToggle.style.position = "absolute"; // Volver a su posición original
            }
        });
    }

    // Cerrar el menú automáticamente al hacer clic en un enlace
    document.querySelectorAll('.nav-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            
            // Restaurar el ícono y posición del botón
            menuToggle.innerHTML = "☰";
            menuToggle.style.position = "absolute";
        });
    });


    /* =========================================
       2. CARRUSEL HERO (OBJETOS 3D)
       ========================================= */
    
    // Seleccionamos las imágenes con la clase '.hero-object'
    const slides = document.querySelectorAll('.hero-object');
    let currentSlide = 0;
    const slideInterval = 4000; // Tiempo de transición: 4 segundos

    // Función para cambiar a la siguiente diapositiva
    function nextSlide() {
        if (slides.length > 0) {
            // 1. Quitar la clase 'active' de la imagen actual (la oculta)
            slides[currentSlide].classList.remove('active');
            
            // 2. Calcular el índice de la siguiente imagen
            // (El operador % asegura que el carrusel vuelva al inicio al llegar al final)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // 3. Agregar la clase 'active' a la nueva imagen (la muestra)
            slides[currentSlide].classList.add('active');
        }
    }

    // Iniciar el temporizador automático solo si existen imágenes
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    /* =========================================
       3. HEADER SCROLL EFFECT (NUEVO)
       ========================================= */
    const header = document.querySelector('.header-merged');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Si bajas más de 50px, ponle fondo azul
            header.classList.add('scrolled');
        } else {
            // Si estás arriba, déjalo transparente
            header.classList.remove('scrolled');
        }
    });

});