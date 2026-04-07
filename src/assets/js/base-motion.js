(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-motion-ready');

    const progress = document.createElement('div');
    progress.setAttribute('data-live-progress', '');
    document.body.appendChild(progress);

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = Math.min(100, Math.max(0, ratio)) + '%';
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    const revealTargets = Array.from(document.querySelectorAll('main section, .group, footer > div > *'));
    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-item');
      el.style.transitionDelay = Math.min((index % 8) * 60, 360) + 'ms';
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -5% 0px' });

    revealTargets.forEach((el) => revealObserver.observe(el));

    const tiltCards = Array.from(document.querySelectorAll('.group'));
    tiltCards.forEach((card) => {
      card.classList.add('live-tilt');
      if (prefersReducedMotion) {
        return;
      }
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        const rx = py * -5;
        const ry = px * 6;
        card.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
        card.classList.add('is-hovered');
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.classList.remove('is-hovered');
      });
    });

    if (!prefersReducedMotion) {
      const heroImage = document.querySelector('main section img');
      if (heroImage) {
        let ticking = false;
        const updateParallax = () => {
          const offset = Math.min(window.scrollY * 0.06, 30);
          heroImage.style.transform = 'translateY(' + offset.toFixed(2) + 'px) scale(1.02)';
          ticking = false;
        };
        window.addEventListener('scroll', () => {
          if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
          }
        }, { passive: true });
        updateParallax();
      }
    }
  });
})();
