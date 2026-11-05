const header = document.querySelector('#header');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
function updateHeader(){ if (header) header.classList.toggle('scrolled', window.scrollY > 50); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();