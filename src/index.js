import './styles.css';
import './script/listItem';

const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', changeTheme);

const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme() {
  if (!checkbox.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  checkbox.checked = true;
  changeTheme();
}
console.log();
