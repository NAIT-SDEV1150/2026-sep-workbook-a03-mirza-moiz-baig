export function setupPropagationEvents() {
  // TODO: Select the nested boxes, inner button, event log, and clear button.
  const outerBox = document.querySelector('#outer-box');
  const middleBox = document.querySelector('#middle-box');
  const innerButton = document.querySelector('#inner-button');
  const eventLog = document.querySelector('#event-log');
  const btnClearLog = document.querySelector('#btn-clear-log');

  if (!outerBox || !middleBox || !innerButton || !eventLog || !btnClearLog) {
    return;
  }
  // TODO: Add bubbling and capturing listeners.

  function addLog(messageText) {
    const logItem = document.createElement('li');
    logItem.textContent = messageText;
    eventLog.append(logItem);
  };

  outerBox.addEventListener('click', function() {
    addLog('Bubble:outer box');
  });
  middleBox.addEventListener('click', function () {
    addLog('Bubble:middle box');
  });
  innerButton.addEventListener('click', function () {
    addLog('Bubble:INNER box');
  });
  // clicking on an inner item has the click event “bubble” up through the DOM, triggering the event listeners of the parent elements.
  btnClearLog.addEventListener('click', function () {
    eventLog.textContent = '';
  });
  outerBox.addEventListener('click', function () {
    addLog('Capture:outer box');
  }, true);
  middleBox.addEventListener('click', function() {
    addLog('Capture: middle box');
  }, true);
  // BUBBLING: child --> parent
  // CAPTURING: parent --> child
  // e.stopPropagation() will stop bubbling
}
