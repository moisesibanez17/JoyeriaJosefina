(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('main section');
    const heroImage = heroSection ? heroSection.querySelector('img') : null;
    const heroPanel = heroSection ? heroSection.querySelector('.relative.z-10') : null;

    if (!heroSection || !heroImage) {
      return;
    }

    const cinematicStyle = document.createElement('style');
    cinematicStyle.textContent = '\n      @keyframes slowZoom {\n        0% { transform: scale(1.02); }\n        100% { transform: scale(1.08); }\n      }\n      .cinematic-hero-image {\n        animation: slowZoom 18s ease-in-out infinite alternate;\n        transform-origin: center center;\n      }\n      .cinematic-vignette {\n        position: absolute;\n        inset: 0;\n        pointer-events: none;\n        background: radial-gradient(circle at 50% 40%, rgba(251, 249, 244, 0.05) 0%, rgba(24, 36, 26, 0.4) 100%);\n      }\n    ';
    document.head.appendChild(cinematicStyle);

    heroImage.classList.add('cinematic-hero-image');

    const vignette = document.createElement('div');
    vignette.className = 'cinematic-vignette';
    heroSection.appendChild(vignette);

    let ticking = false;
    const updateHeroMood = () => {
      const depth = Math.min(window.scrollY * 0.12, 90);
      heroImage.style.transform = 'translateY(' + depth.toFixed(2) + 'px) scale(1.07)';
      if (heroPanel) {
        const fade = Math.max(0, 1 - window.scrollY / 700);
        heroPanel.style.opacity = fade.toFixed(3);
        heroPanel.style.transform = 'translateY(' + (window.scrollY * 0.05).toFixed(2) + 'px)';
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHeroMood);
        ticking = true;
      }
    }, { passive: true });

    updateHeroMood();
  });
})();
