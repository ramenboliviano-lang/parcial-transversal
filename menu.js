// Menu hamburguesa, navegacion y footer comun para Envuelto

document.addEventListener('DOMContentLoaded', function() {
  const navMount = document.getElementById('main-nav');
  const footerMount = document.getElementById('main-footer');

  if (!window.envueltoCursorReady) {
    window.envueltoCursorReady = true;

    let cursor = document.getElementById('cursor');
    let ring = document.getElementById('cursorRing');

    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      cursor.id = 'cursor';
      document.body.prepend(cursor);
    }

    if (!ring) {
      ring = document.createElement('div');
      ring.className = 'cursor-ring';
      ring.id = 'cursorRing';
      document.body.prepend(ring);
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(${isHovering ? 1.5 : 1})`;
    });

    function animateCursorRing() {
      ringX += (mouseX - ringX - 18) * 0.15;
      ringY += (mouseY - ringY - 18) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateCursorRing);
    }
    animateCursorRing();

    document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1.5)`;
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.opacity = '0.3';
      });
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1)`;
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '0.5';
      });
    });
  }

  if (navMount) {
    const nav = document.createElement('div');
    nav.className = 'site-nav';
    nav.innerHTML = `
      <a href="envuelto.html" class="nav-logo">Envuelto</a>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false" type="button">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="envuelto.html">Inicio</a></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="personaliza.html">Personaliza</a></li>
        <li><a href="recursos.html">Recursos</a></li>
        <li><a href="cotiza.html" class="nav-cta">Cotizar</a></li>
      </ul>
    `;
    navMount.appendChild(nav);

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (footerMount) {
    const footer = document.createElement('div');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="footer-brand">
        <a href="envuelto.html" class="footer-logo">Envuelto</a>
        <p>Packaging sustentable, ecol&oacute;gico y pensado para marcas que quieren reducir impacto sin perder dise&ntilde;o.</p>
      </div>
      <nav class="footer-nav" aria-label="Navegaci&oacute;n del pie de p&aacute;gina">
        <a href="envuelto.html">Inicio</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="nosotros.html#ciclo">Proceso</a>
        <a href="productos.html">Productos</a>
        <a href="personaliza.html">Personaliza</a>
        <a href="recursos.html">Recursos</a>
        <a href="cotiza.html">Cotizar</a>
      </nav>
      <div class="footer-contact">
        <span>Contacto<br>Email: hola@envuelto.eco<br>Tel: +591 7000 0000</span>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>
        <a href="cotiza.html">Armar cotizaci&oacute;n</a>
      </div>
      <p class="footer-copy">&copy; 2026 Envuelto. Reduc&iacute; &bull; Reutiliz&aacute; &bull; Recicl&aacute; &bull; Compost&aacute;</p>
    `;
    footerMount.appendChild(footer);
  }
});
const video = document.getElementById('brandVideo');
const playBtn = document.getElementById('playBtn');
const soundBtn = document.getElementById('soundBtn');

/* PLAY / PAUSE */
playBtn.addEventListener('click', () => {

  if(video.paused){
    video.play();
    playBtn.style.opacity = "0";
    playBtn.style.pointerEvents = "none";
  } else {
    video.pause();
    playBtn.style.opacity = "1";
    playBtn.style.pointerEvents = "auto";
  }

});

/* MOSTRAR PLAY AL PAUSAR */
video.addEventListener('pause', () => {
  playBtn.style.opacity = "1";
  playBtn.style.pointerEvents = "auto";
});

/* VOLUMEN */
video.muted = true;

soundBtn.addEventListener('click', () => {

  video.muted = !video.muted;

  if(video.muted){
    soundBtn.textContent = '🔇';
  } else {
    soundBtn.textContent = '🔊';
  }

});
