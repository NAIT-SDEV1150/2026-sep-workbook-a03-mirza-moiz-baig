export function setupPanoramaPanels() {
  // TODO: Select #panorama, #panorama-status, and #panorama-credit.
  const panorama = document.querySelector('#panorama');
  const panoramaStatus = document.querySelector('#panorama-status');
  const panoramaCredit = document.querySelector('#panorama-credit');

  if (!panorama || !panoramaStatus || !panoramaCredit) {
    return;
  }
  // TODO: Add mouseover and mouseout listeners to the panorama container.
  panorama.addEventListener('mouseover', function (event) {
    const panel = event.target.closest('.panorama-panel');
    // event.target refers to the element whwere the event originates from.
    if (!panel || !panorama.contains(panel)) {
      return;
    };
    panorama.classList.add('is-joined');
    panoramaStatus.textContent = `Panorama: panels joined`;
    panoramaCredit.hidden = false;
  })
  panorama.addEventListener('mouseout', function(event) {
    if (panorama.contains(event.relatedTarget)) {
      // .relatedTarget checks for the event the mouse was previously over
      return;
    }
    panorama.classList.remove('is-joined');
    panoramaStatus.textContent = `Panorama: separated panels `;
    panoramaCredit.hidden = true;
  })
}
