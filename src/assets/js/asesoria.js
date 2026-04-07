(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector('.space-y-32');
    if (!quizContainer) {
      return;
    }

    const steps = Array.from(quizContainer.children).slice(0, 5);
    let answered = 0;

    const meter = document.createElement('div');
    meter.className = 'sticky top-24 z-40 mb-10 bg-surface/80 backdrop-blur-md p-4';
    meter.innerHTML = '<div class="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-secondary"><span>Progreso Curatorial</span><span data-meter-label>0 / 5</span></div><div class="mt-3 h-[3px] bg-surface-container-high"><div data-meter-bar class="h-full bg-primary" style="width:0%"></div></div>';
    quizContainer.parentElement.insertBefore(meter, quizContainer);

    const bar = meter.querySelector('[data-meter-bar]');
    const label = meter.querySelector('[data-meter-label]');

    const updateMeter = () => {
      const value = Math.min(5, answered);
      bar.style.width = (value / 5) * 100 + '%';
      label.textContent = value + ' / 5';
    };

    const markStep = (stepIndex) => {
      const step = steps[stepIndex];
      if (!step || step.dataset.done === 'true') {
        return;
      }
      step.dataset.done = 'true';
      answered += 1;
      updateMeter();
      const next = steps[stepIndex + 1];
      if (next) {
        next.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    steps.forEach((step, stepIndex) => {
      const choices = Array.from(step.querySelectorAll('button, .cursor-pointer'));
      choices.forEach((choice) => {
        choice.addEventListener('click', () => {
          choices.forEach((item) => {
            item.classList.remove('ring-2', 'ring-primary', 'bg-secondary-container');
          });
          choice.classList.add('ring-2', 'ring-primary', 'bg-secondary-container');
          markStep(stepIndex);
        });
      });
    });

    const upload = document.getElementById('upload');
    const uploadLabel = document.querySelector('label[for="upload"] .font-label');
    if (upload && uploadLabel) {
      upload.addEventListener('change', () => {
        const file = upload.files && upload.files[0] ? upload.files[0].name : 'Subir Capturas del Espacio';
        uploadLabel.textContent = file;
      });
    }

    const submitButton = document.querySelector('button.bg-primary.text-white.px-24');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.opacity = '0.45';

      const unlock = () => {
        if (answered >= 3) {
          submitButton.disabled = false;
          submitButton.style.opacity = '1';
        }
      };

      quizContainer.addEventListener('click', unlock);
    }

    updateMeter();
  });
})();
