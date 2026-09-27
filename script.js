const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const modal = document.querySelector('.celebration-modal');
const giftButton = document.querySelector('.gift-button');
const closeButton = document.querySelector('.modal-close');
const soundToggle = document.querySelector('.sound-toggle');

function toggleModal(isOpen) {
  modal.classList.toggle('open', isOpen);
  modal.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

giftButton.addEventListener('click', () => toggleModal(true));
closeButton.addEventListener('click', () => toggleModal(false));
modal.addEventListener('click', (event) => {
  if (event.target === modal) toggleModal(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') toggleModal(false);
});

soundToggle.addEventListener('click', () => {
  const isActive = soundToggle.getAttribute('aria-pressed') === 'true';
  soundToggle.setAttribute('aria-pressed', String(!isActive));
  soundToggle.innerHTML = isActive
    ? '<span class="sound-dot"></span> celebration mode'
    : '<span class="sound-dot"></span> good vibes on';
});

const cursorHeart = document.querySelector('.cursor-heart');
window.addEventListener('pointermove', (event) => {
  cursorHeart.style.left = `${event.clientX + 12}px`;
  cursorHeart.style.top = `${event.clientY - 6}px`;
  cursorHeart.style.opacity = '1';
});