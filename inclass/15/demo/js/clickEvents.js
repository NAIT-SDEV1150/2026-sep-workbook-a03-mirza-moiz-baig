export function setupClickEvents() {
  //  Select #btn-toggle, #btn-message, and #message.
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.querySelector('#btn-message');
  const message = document.querySelector('#message');
  if (!btnMessage || !btnToggle || !message) {
    return;
  }
  // TODO: Add click listeners that update the page.
  btnToggle.addEventListener('click', function () {
    document.body.classList.toggle('highlight');
    // classList lets us work with css classes.
    // .toggle enables the class if it doesnt exist and vice versa if it exists.
    const isHighlighted = document.body.classList.contains('highlight'); // .contains() will return true or false.
    btnToggle.textContent = isHighlighted ? 'Highlight is On' : 'highlight is off';// ternary operator short if statements.
  })
  btnMessage.addEventListener('click', function () {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
  })
};



