(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = Array.from(document.querySelectorAll('main section:nth-of-type(2) button'));
    const headings = Array.from(document.querySelectorAll('main h2'));
    const cards = Array.from(document.querySelectorAll('.group'));

    const setActiveFilter = (button) => {
      filterButtons.forEach((item) => {
        item.classList.remove('bg-primary', 'text-on-primary');
        item.classList.add('bg-surface-container-high', 'text-on-surface');
      });
      button.classList.remove('bg-surface-container-high', 'text-on-surface');
      button.classList.add('bg-primary', 'text-on-primary');
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveFilter(button);
        const label = button.textContent.toLowerCase();
        const target = headings.find((item) => item.textContent.toLowerCase().includes(label.replace('coleccion ', '').replace('todas las especies', '').trim()));
        if (target && !label.includes('todas')) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    cards.forEach((card) => {
      card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease';
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.backgroundImage = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(248, 218, 197, 0.32) 0%, rgba(251, 249, 244, 0) 55%)';
      });
      card.addEventListener('pointerenter', () => {
        card.style.boxShadow = '0 20px 34px rgba(112, 90, 73, 0.14)';
      });
      card.addEventListener('pointerleave', () => {
        card.style.backgroundImage = '';
        card.style.boxShadow = '';
        card.style.transform = '';
      });
      card.addEventListener('pointerdown', () => {
        card.style.transform = 'scale(0.985)';
      });
      card.addEventListener('pointerup', () => {
        card.style.transform = '';
      });
    });
  });
})();
