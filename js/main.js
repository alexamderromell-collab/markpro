document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DEFINICIÓN DE COMPONENTES GLOBALES (HTML incrustado)
    // ==========================================
    
    // Estructura de la Barra de Navegación
    const headerTemplate = `
        <div class="logo">Mark<span>Pro</span></div>
        
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="nav-container" id="navContainer">
            <ul class="nav-links">
                <li><a href="index.html#hero">El Inicio</a></li>
                <li><a href="index.html#servicios">El Manifiesto</a></li>
                <li><a href="index.html#contacto">Escribe tu Guion</a></li>
            </ul>
        </nav>
    `;

    // Estructura del Pie de Página (con los iconos SVG)
    const footerTemplate = `
        <div class="footer-container">
            <div class="footer-socials">
                <a href="#" aria-label="Instagram" class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" aria-label="Vimeo" class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M22.396 7.158c-.092 2.029-1.508 4.804-4.246 8.324-2.854 3.716-5.27 5.574-7.252 5.574-1.228 0-2.271-1.135-3.128-3.407-.571-2.087-1.144-4.175-1.714-6.262-.643-2.396-1.328-3.594-2.062-3.594-.16 0-.713.333-1.66.997l-.995-1.278c1.03-.9 2.036-1.796 3.015-2.693 1.356-1.189 2.378-1.815 3.067-1.876 1.626-.143 2.628.973 3.003 3.344.412 2.585.698 4.19.86 4.81.365 1.488.756 2.233 1.173 2.233.322 0 .825-.461 1.508-1.385.682-.924 1.055-1.624 1.118-2.1.133-1.144-.333-1.717-1.402-1.717-.5 0-1.015.115-1.543.344 1.025-3.351 2.99-4.969 5.895-4.854 2.14.084 3.142 1.45 3.006 4.099z"/></svg>
                </a>
            </div>
            <p class="footer-text">&copy; 2026 MarkPro Creative Studio. Codificando narrativas de alto impacto visual.</p>
        </div>
    `;

    // ==========================================
    // 2. INYECCIÓN AUTOMÁTICA EN EL DOM
    // ==========================================
    const globalHeader = document.getElementById('global-header');
    const globalFooter = document.getElementById('global-footer');

    if (globalHeader) {
        globalHeader.innerHTML = headerTemplate;
    }
    if (globalFooter) {
        globalFooter.innerHTML = footerTemplate;
    }

    // ==========================================
    // 3. LOGICA DEL MENÚ HAMBURGUESA RESPONSIVO
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navContainer = document.getElementById('navContainer');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContainer.classList.toggle('open');
        });

        // Cierra el menú al hacer click en una sección (crucial en móviles)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navContainer.classList.remove('open');
            });
        });
    }

    // ==========================================
    // 4. EFECTO VISUAL DE SCROLL EN NAVBAR
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '1rem 10%';
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.padding = '1.5rem 10%';
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }
        });
    }

    // ==========================================
    // 5. EFECTO PARALLAX INTERACTIVO (DESKTOP)
    // ==========================================
    const hero = document.getElementById('hero');
    const heroBg = document.getElementById('heroBg');
    const heroGlow = document.getElementById('heroGlow');
    const heroContent = document.getElementById('heroContent');

    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const { width, height, left, top } = hero.getBoundingClientRect();
            const mouseX = e.clientX - left;
            const mouseY = e.clientY - top;

            const xOffset = (mouseX / width) - 0.5;
            const yOffset = (mouseY / height) - 0.5;

            if (heroBg) heroBg.style.transform = `translate(${xOffset * -40}px, ${yOffset * -40}px) scale(1.08)`;
            if (heroContent) heroContent.style.transform = `translate(${xOffset * 20}px, ${yOffset * 20}px)`;

            if (heroGlow) {
                heroGlow.style.left = `${mouseX}px`;
                heroGlow.style.top = `${mouseY}px`;
            }
        });

        hero.addEventListener('mouseleave', () => {
            if (heroBg) heroBg.style.transform = 'translate(0px, 0px) scale(1)';
            if (heroContent) heroContent.style.transform = 'translate(0px, 0px)';
        });
    }

    // ==========================================
    // 6. ENVÍO DE FORMULARIO (FEEDBACK)
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            
            formFeedback.classList.remove('hidden', 'success');
            formFeedback.textContent = "Preparando claqueta de rodaje...";
            
            setTimeout(() => {
                formFeedback.classList.add('success');
                formFeedback.textContent = `¡Foco listo, ${name}! Tu historia acaba de entrar en preproducción. Un estratega de MarkPro se pondrá en contacto contigo para desplegar el plan de ataque.`;
                contactForm.reset();
            }, 1500);
        });
    }
});
// Activar clic completo en las tarjetas de servicios de forma segura
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.services-grid .service-card');
    
    cards.forEach(card => {
        // Verifica si la tarjeta tiene la url asignada en el HTML
        const url = card.getAttribute('data-url');
        
        if (url) {
            card.addEventListener('click', () => {
                window.location.href = url;
            });
        }
    });
});