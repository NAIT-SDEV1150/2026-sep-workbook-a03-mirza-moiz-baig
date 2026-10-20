import '@picocss/pico/css/pico.green.min.css';

console.log('Lesson 15 main.js loaded');

// document.querySelector()
// 1) tagname
// 2) id
// 3) classname
// DOM tree consists of nodes
// two kinds of node:
// 1) element nodes
// 2) text nodes

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





