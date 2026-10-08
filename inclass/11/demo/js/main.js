import '@picocss/pico/css/pico.green.min.css';
import { fillCredits } from './credits';
fillCredits(2026, 'Moiz'); // Use YOUR name
console.log('Lesson 11 loaded');
let lessonNumber = 12;
console.log(lessonNumber);
// Selecting elements from DOM
// SELECTING with tag name
const pageHeading = document.querySelector('h1');// selects the first occurence of h1
console.log(pageHeading);
console.log(typeof pageHeading);
console.log(pageHeading.__proto__.constructor.name);
// SELECTING WITH id
const brandName = document.querySelector('#brand-name'); // # is used for ids
console.log(brandName);
// selecting with classname
const firstContainer = document.querySelector('.container'); // .indicates classname
console.log(firstContainer);
const missingElement = document.querySelector('.missing-card');
console.log(missingElement);

const mainContent = document.querySelector('main');
console.log(mainContent);

const languageList = mainContent.querySelector('ul');
console.log(languageList);

// searching from a part of document is a useful habit
const firstUnorderedList = document.querySelector('ul');
console.log(firstUnorderedList);

// textContent vs INNERHTML
// Prefer textContent over Innerhtml
pageHeading.textContent = 'Javascript can update the DOM';

const brandLabel = brandName.querySelector('strong');
brandLabel.textContent = 'Dynamic DOM';

const threeTrustedLanguages =  `
  <li><strong>HTML</strong> gives the page <u>structure</u>.</li>
  <li><strong>CSS</strong> controls how the page <u>looks</u>.</li>
  <li><strong>JavaScript</strong> can <u>update</u> the live DOM.</li>
`;

languageList.innerHTML = threeTrustedLanguages;

// innerHTML can cause a vulnerability
/** @type {HTMLImageElement} */ 
const asideImg = document.querySelector('aside img'); // selects only the img that is nested inside aside tag
asideImg.setAttribute('width', '180');
asideImg.setAttribute('alt', 'A person building a website');
// setAttribute changes or assigns a value to the attribute

asideImg.src = './img/undraw_code-review_jdgp.svg';

languageList.style.borderLeft = '0.4rem solid var(--pico-primary)';
languageList.style.paddingLeft = '1 rem';
// applying inline styles through javascript



