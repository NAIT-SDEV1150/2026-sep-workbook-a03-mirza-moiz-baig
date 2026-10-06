console.log('main.js loaded');
import '@picocss/pico/css/pico.green.min.css'; // this import is a style sheet import
import { fillCredits } from './credits'; // this is a local import
// import smartquotes from 'smartquotes'; // importing package name
fillCredits(2026, 'Moiz'); 
let message = 'Exploring dependecies';
console.log(message);

