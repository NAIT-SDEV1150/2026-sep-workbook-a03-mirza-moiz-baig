export function setupKeyboardEvents() {
  // TODO: Select #key-output.
  const keyOutput = document.querySelector('#key-output');

  if (!keyOutput) {
    return;
  }
  // TODO: Add a keydown listener on document.
  document.addEventListener('keydown', function(event) {
    keyOutput.textContent = `Last key: ${event.key} (code: ${event.code})`;
  });

}
