import './user-card.js';
import { users } from './users.js';

const themeToggle = document.querySelector('#theme-toggle');
const avatarDemo = document.querySelector('#avatar-demo');
let darkMode = false;
let avatarIndex = 2;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  // .dataset refers to all the properties starting with 'data-'
  themeToggle.textContent = darkMode ? 'Use light theme' : 'Use dark theme';
});

avatarDemo.addEventListener('click', () => {
  // TODO: Change the avatar attribute to another local avatar path.
  avatarIndex = (avatarIndex + 1) % users.length;
  avatarDemo.setAttribute('avatar', users[avatarIndex].avatar);
});
