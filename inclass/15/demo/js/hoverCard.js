export function setupHoverCard() {
  // TODO: Select #hover-card and #hover-status.
  const hoverCard = document.querySelector('#hover-card');
  const hoverStatus = document.querySelector('#hover-status');
  if (!hoverCard || !hoverStatus) {
    return;
  }
  // TODO: Add mouseover and mouseout listeners.
  hoverCard.addEventListener('mouseover', function () {
    hoverStatus.textContent = `Status: hovering`;
  });
  hoverCard.addEventListener('mouseout', function () {
    hoverStatus.textContent = `Status: Not hovering`;
  });
}
