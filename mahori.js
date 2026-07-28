const header = document.getElementById('pageHeader');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelectorAll('.nav_link');

function closeMenu() {
  header.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});