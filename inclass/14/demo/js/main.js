import '@picocss/pico/css/pico.green.min.css';

console.log('Lesson 15 main.js loaded');

// document.querySelector()
// 1) tagname
// 2) id
// 3) classname
// DOM tree consists of nodes
// two kinds of node:
// 1) element nodes
// 2) text nodes(whitespaces included as well.)

const pageHeading = document.querySelector('h1'); // selecting dom node by tagname
console.log(pageHeading);
const mainContent = document.querySelector('main');// 'main' is a selector string
console.log(mainContent);// selecting a tag does not give direct access to all the child elements.
const navLinks = document.querySelectorAll('nav a');// returns NODELIST 
// nodelist !== array, it is similar but not the same
// nodelist has lesser functionality than array.
// .map cannot work on nodelists, you need array for that.
// .forEach() will run on nodelist.
console.log(navLinks);
// converting nodelist into an array.
// [...navLinks] creates a copy in the form of array.
const navLinkLabels = [...navLinks].map((link) => {
    return link.textContent;
});
// .map() builds a new array
console.log(navLinkLabels);

const missingPanel = document.querySelector('.announcement-panel');
console.log(missingPanel);

// Once javascript selects an element,it can search inside of that element
const languageList = mainContent.querySelector('ul');
const languageItems = languageList.querySelectorAll('li');
console.log(languageList);
console.log(languageItems);

// Navigation through the dom tree through dom relationships.
const listParent = languageList.parentElement;
console.log(listParent);
const firstlanguage = languageList.firstElementChild;
const lastLanguage = languageList.lastElementChild;
console.log(firstlanguage);
console.log(lastLanguage);
// Avoid using firstchild because that can select whitespaces or textnodes too.
// prefer firstelementchild because that select the first child that is an actual html element.
const paragraphBeforeList = languageList.previousElementSibling;
console.log(paragraphBeforeList);
const ruleAfterList = languageList.nextElementSibling;
console.log(ruleAfterList);
// The firstElementChild and nextElementSibling properties skip text nodes.
pageHeading.textContent = 'DOM API Practice';
paragraphBeforeList.textContent = 'JavaScript can select, navigate, and modify the live DOM.';
// creating a tag with textcontent

const statusMessage = document.createElement('p'); // <p></p>
// the tag is in void space right now. 
// This p tag as of now is not the part of DOM tree/webpage.
statusMessage.textContent = 'created with document.createElement() and .textContent'; // <p>'created with document.createElement() and .textContent'</p>
mainContent.append(statusMessage); // this adds the newly created tag to the end of the main document.

const reminder = document.createElement('p');
const reminderLabel = document.createElement('strong');
reminderLabel.textContent = 'Reminder:';
const reminderText = document.createTextNode('created text nodes can sit besides element nodes');
console.log(reminder, reminderLabel, reminderText);

reminder.append(reminderLabel);
reminder.appendChild(reminderText);
console.log(reminder);
// .append and .appendchild both can add nodes to the DOM
// .append() can accept more than just DOM nodes e.g. text strings, can add multiple items at once
// .appendChild() can not do the above, use it for adding a single node only.

// appendChild() specifically appends one existing Node.
console.log(reminder);

mainContent.append(reminder); // It is only at this point that the <p> becomes part of the DOM

// create and insert an image
const completionFigure = document.createElement('figure'); // <figure> </figure>
const completionImage = document.createElement('img');// <img> </img>
const completionCaption = document.createElement('figcaption');// <figcaption </figcaption>

completionImage.src = './img/undraw_completed_vjc6.svg';//  <img  src = './img/undraw_completed_vjc6.svg' > </img>
completionImage.alt = 'A completed task checklist';//  <img  src = './img/undraw_completed_vjc6.svg' alt = 'A completed task checklist'> </img>
completionImage.width = '220';//  <img  src = './img/undraw_completed_vjc6.svg' alt = 'A completed task checklist' width = 220> </img>
completionCaption.textContent = 'Image element created and configured from JavaScript.'; // <figcaption>'Image element created and configured from JavaScript.' </figcaption>
completionFigure.append(completionImage, completionCaption); // <figure> //  <img  src = './img/undraw_completed_vjc6.svg' alt = 'A completed task checklist' width = 220> </img> <figcaption>'Image element created and configured from JavaScript.' </figcaption> </figure>
mainContent.append(completionFigure);

// replace and remove elements
const replacementItem = document.createElement('li');
replacementItem.textContent = 'DOM nodes can be replaced';
firstlanguage.replaceWith(replacementItem);
// remove an item
ruleAfterList.remove();

// creating a document fragment

const fragment = document.createDocumentFragment();
// a temporary container for DOM nodes.
const newTopics = ['Select', 'Navigate', 'Create', 'Insert'];
for (let topic of newTopics) {
    const topicItem = document.createElement('li');// <li> </li>
    topicItem.textContent = `Practice: ${topic}`;// <li> Practice: ${topic}</li>
    fragment.append(topicItem);
};
languageList.append(fragment);
// fragment is a temporary container, it sends its children into the languagelist





