document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------ NAVEGACIÓN SUAVE ------------------------ */
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ------------------ ANIMACIÓN AL HACER SCROLL ------------------ */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.energy-card, .collection-card, .favorite-card').forEach((el) => {
    observer.observe(el);
  });

  /* ------------------- SLIDER DE FAVORITOS ------------------- */
  const track = document.querySelector('.slider-track');
  const btnPrev = document.querySelector('.slider-btn.left');
  const btnNext = document.querySelector('.slider-btn.right');

  if (track && btnPrev && btnNext) {
    const scrollAmount = 240;
    let isScrolling = false;

    const handleScroll = (amount) => {
      if (isScrolling) return;
      isScrolling = true;
      track.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(() => (isScrolling = false), 400);
    };

    btnPrev.addEventListener('click', () => handleScroll(-scrollAmount));
    btnNext.addEventListener('click', () => handleScroll(scrollAmount));
  }

  /* ------------------- BOTÓN VOLVER ARRIBA ------------------- */
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 600 ? 'flex' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------ EFECTO HOVER EN ICONOS ------------------ */
  const socialButtons = document.querySelectorAll('.contact-icons a');
  socialButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('active');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('active');
    });
  });
});
