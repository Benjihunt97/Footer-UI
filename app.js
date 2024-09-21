const body = document.querySelector('body');
const footer = document.querySelector('footer');
const ball = document.getElementById('ball');

const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('bg-slate-700');
  footer.classList.toggle('dark-footer');
  footer.querySelector('.footer-info').classList.toggle('text-white');
  ball.classList.toggle('blue-ball');
  toggleTheme.classList.toggle('bg-white');
  toggleTheme.classList.toggle('text-slate-700')
  toggleTheme.querySelector('.dark-icon').classList.toggle('-translate-y-[200%]');
  toggleTheme.querySelector('.light-icon').classList.toggle('-translate-y-[200%]');
});
