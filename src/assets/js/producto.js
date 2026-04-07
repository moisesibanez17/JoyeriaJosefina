(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.lg\\:col-span-7');
    const heroImage = gallery ? gallery.querySelector('.col-span-12 img') : null;
    const thumbs = gallery ? Array.from(gallery.querySelectorAll('.col-span-6 img')) : [];

    if (heroImage && thumbs.length) {
      thumbs.forEach((thumb) => {
        thumb.style.cursor = 'pointer';
        thumb.addEventListener('click', () => {
          const nextSrc = thumb.getAttribute('src');
          const nextAlt = thumb.getAttribute('data-alt') || '';
          const currentSrc = heroImage.getAttribute('src');
          const currentAlt = heroImage.getAttribute('data-alt') || '';

          heroImage.setAttribute('src', nextSrc);
          heroImage.setAttribute('data-alt', nextAlt);
          thumb.setAttribute('src', currentSrc);
          thumb.setAttribute('data-alt', currentAlt);
        });
      });
    }

    const price = document.querySelector('.lg\\:col-span-5 header p');
    if (price) {
      price.style.background = 'linear-gradient(90deg, #18241a 0%, #95a495 50%, #18241a 100%)';
      price.style.backgroundSize = '220% 100%';
      price.style.webkitBackgroundClip = 'text';
      price.style.backgroundClip = 'text';
      price.style.color = 'transparent';
      price.style.animation = 'premiumShine 4s linear infinite';

      const style = document.createElement('style');
      style.textContent = '@keyframes premiumShine { 0% { background-position: 100% 0; } 100% { background-position: -120% 0; } }';
      document.head.appendChild(style);
    }

    const rows = Array.from(document.querySelectorAll('.lg\\:col-span-5 .space-y-6 > div'));
    const content = [
      'Origen: Sudafrica tropical. Ciclo de crecimiento en pulsos estacionales con hojas estructurales que abren en abanico.',
      'Altura curada: 150-200 cm. Diametro visual recomendado: 70 cm libres alrededor para respiracion formal.',
      'Sustrato aireado con perlita volcanica y corteza. Nutricion moderada cada 30 dias en temporada de crecimiento.'
    ];

    rows.forEach((row, index) => {
      const panel = document.createElement('div');
      panel.textContent = content[index] || '';
      panel.style.maxHeight = '0px';
      panel.style.overflow = 'hidden';
      panel.style.opacity = '0';
      panel.style.fontSize = '0.75rem';
      panel.style.letterSpacing = '0.06em';
      panel.style.textTransform = 'uppercase';
      panel.style.color = '#705a49';
      panel.style.transition = 'max-height 0.35s ease, opacity 0.3s ease, margin 0.3s ease';
      panel.style.margin = '0';
      row.insertAdjacentElement('afterend', panel);

      row.addEventListener('click', () => {
        const open = panel.style.maxHeight !== '0px';
        rows.forEach((otherRow) => {
          const other = otherRow.nextElementSibling;
          if (other) {
            other.style.maxHeight = '0px';
            other.style.opacity = '0';
            other.style.margin = '0';
          }
        });
        if (!open) {
          panel.style.maxHeight = '120px';
          panel.style.opacity = '1';
          panel.style.margin = '8px 0 16px 0';
        }
      });
    });
  });
})();
