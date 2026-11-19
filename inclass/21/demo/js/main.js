import './user-card.js';
import { users } from './users.js';

const programmaticCards = document.querySelector('#programmatic-cards');

function createSlottedText(slotName, text) {
  const span = document.createElement('span');
  span.slot = slotName;
  span.textContent = text;
  return span;
}

function createUserCard(user) {
  const card = document.createElement('user-card');// runs the constructor
  card.append(
    createSlottedText('name', user.name),
    createSlottedText('description', user.about)
  );
  card.setAttribute('avatar', user.avatar);
  programmaticCards.append(card);
}

users.slice(2).forEach(createUserCard);
