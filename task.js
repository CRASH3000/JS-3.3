document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = 0;

    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % cases.length;
      const nextCase = cases[currentIndex];
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = nextCase.dataset.color || 'black';
      const speed = nextCase.dataset.speed || 1000;
      setTimeout(rotate, speed);
    }

    rotate();
  });
});
