document.addEventListener('DOMContentLoaded', () => {
  /* Desplazamiento suave para los enlaces del menú */
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Observador para animar la aparición de tarjetas al hacer scroll */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  document.querySelectorAll('.energy-card').forEach((el) => {
    observer.observe(el);
  });

  /* Lógica del slider de favoritos */
  const track = document.querySelector('.slider-track');
  const btnPrev = document.querySelector('.slider-btn.left');
  const btnNext = document.querySelector('.slider-btn.right');
  if (track && btnPrev && btnNext) {
    const scrollAmount = 240; // cantidad de desplazamiento en px
    btnPrev.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  /* Botón volver arriba */
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});