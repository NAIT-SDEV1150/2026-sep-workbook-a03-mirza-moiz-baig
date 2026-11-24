const template = document.createElement('template');

template.innerHTML = `
  <style>
     :host {
     --card-bg: var(--user-card-bg, #ffffff);
     --card-color: var(--user-card-color, #172033);
     --card-accent: var(--user-card-accent, #0f766e);
     display: block;
     }

     :host([variant="featured"]) .card {
     border-color: var(--card-accent);
     }

    .card {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 0.85rem;
      align-items: center;
      min-height: 124px;
      padding: 1rem;
      border: 1px solid #9aa8ba;
      border-radius: 8px;
      background: var(--card-bg);
      color: var(--card-color);
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }
    ::slotted([slot="name"]) {
    display:block;
    color: var(--card-accent);
    font-weight: 700;
    }
    ::slotted([slot="description"]) {
    display:block;
    margin-top:0.25rem;
    color: var(--card-muted);
    line-height: 1.4;
    }
  </style>

  <article class="card" part="card">
    <img part="avatar" src="" alt="">
    <div>
      <slot name="name">Unknown user</slot>
      <slot name="description">No description provided.</slot>
    </div>
  </article>
`;
/**
 * adding a part attribute to the <img> element of our template. This makes our image shadow DOM element “visible” to the parent DOM, allowing us to apply CSS styles based on the ::part pseudo-element
 */
class UserCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    this.image = content.querySelector('img');
    this.image.src = 'assets/avatars/avatar.png';
    this.image.alt = `Profile photo for user`;

    shadow.append(content);
  }

  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'avatar' && oldValue !== newValue) {
      this.image.src = newValue || 'assets/avatars/avatar.png';
      let name = this.querySelector('[slot="name"]')?.textContent ?? 'user';
      this.image.alt = `Profile photo for ${name}`;
    }
  }
}

customElements.define('user-card', UserCard);
