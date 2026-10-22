export function setupListDelegation() {
  // TODO: Select #list and #selection.
  const list = document.querySelector('#list');
  const selection = document.querySelector('#selection');

  if (!list || !selection) {
    return;
  }
  // TODO: Add one click listener to the list and use event.target.
  list.addEventListener('click', function(event) {
    const li = event.target.closest('li');
    if (!li || !li.contains(li)) {
      return;
    }
    const previousSelection = list.querySelector('li.active');// selects those lsit items that have class active
    if (previousSelection) {
      previousSelection.classList.remove('active');
    }
    li.classList.add('active');
    
  })
}
