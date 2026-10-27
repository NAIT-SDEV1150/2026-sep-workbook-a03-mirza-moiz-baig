export function setupListDelegation() {
  // TODO: Select #list and #selection.
  const list = document.querySelector('#list');
  const selection = document.querySelector('#selection');

  if (!list || !selection) {
    return;
  }
  // TODO: Add one click listener to the list and use event.target.
  list.addEventListener('click', function(event) {
    const li = event.target.closest('li');// searches for the nearest li tag near the click. If none found, return null.
    if (!li || !list.contains(li)) { // !list.contains(li) makes sure that i am selecting the intended list.
      return;
    }
    const previousSelection = list.querySelector('li.active');// selects those list items that have class active
    if (previousSelection) {
      previousSelection.classList.remove('active');
    }
    li.classList.add('active');
    const id = li.getAttribute('data-id');// gets the attribute inside the brackets.
    selection.textContent = `Selected: item ${id}`;
  });
}
