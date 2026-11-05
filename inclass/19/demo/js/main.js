import { fetchJsonData, postData } from './utils.js';

const loadButton = document.querySelector('#load-bodies');
const addForm = document.querySelector('#add-body');
const bodyList = document.querySelector('#body-list');
const statusMessage = document.querySelector('#status-message');

const endpoint = 'http://localhost:3000/bodies';

function showStatus(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.dataset.status = type;
}

function renderBodies(bodies) {
  // TODO: Clear the current list.
  bodyList.replaceChildren(); // removes any existing list items.
  bodies.forEach((body) => {
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.src = `http://localhost:3000/${body.image}`;
    image.alt = body.name;
    const text = document.createElement('span');
    text.textContent = `${body.name} - ${body.category} - ${body.orbitalPeriod}`;
    li.append(image, text);
    bodyList.append(li);
  })
  // TODO: Create and append one <li> for each body.
  // TODO: Include the thumbnail image for each body.
}

function loadHandler() {
  bodyList.innerHTML = `<li>Loading bodies....</li>`;
  fetchJsonData(endpoint)
  .then((bodies) => {
    renderBodies(bodies);
    showStatus(`Loaded ${bodies.length} bodies, 'success'`);
  })
  .catch((error)=> {
    bodyList.replaceChildren();
    showStatus(`Error: ${error.message}, 'error'`);
  })
}

async function submitHandler(event) {
  event.preventDefault();// never reloads the webpage

  const form = new FormData(event.target);
  const body = Object.fromEntries(form.entries());
  try {
    await postData(endpoint, body);// await is used because we want to handle the delayed response.
    event.target.reset();
    showStatus(`Body added, 'success'`);
    loadHandler();
  }
  catch(error) {
    showStatus(`Error: ${error.message}, 'error'`);
  }
}

loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);
