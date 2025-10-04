// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
// Set current year in the footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
