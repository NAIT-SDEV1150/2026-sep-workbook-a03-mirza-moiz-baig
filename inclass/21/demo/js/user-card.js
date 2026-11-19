const template = document.createElement('template');

template.innerHTML = `
  <style>
    .card {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 0.85rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid #9aa8ba;
      border-radius: 8px;
      background: #ffffff;
      color: #172033;
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }

    .name {
      display: block;
      font-weight: 700;
    }

    .description {
      display: block;
      margin-top: 0.25rem;
      color: #5f6f84;
      line-height: 1.4;
    }
  </style>

  <article class="card">
    <img src="" alt="">
    <div>
      <slot name="name" class="name">Unknown user</slot>
      <slot name="description" class="description">No description provided.</slot>
    </div>
  </article>
`;

class UserCard extends HTMLElement {
  constructor() { // this runs as soon as an instance is intiated.
    super(); // calls the parents constructor.
    const shadow = this.attachShadow({ mode: 'open'}); // attach the shadow DOM ( mode:'open' This means that our “shadow DOM” is “open” for querying elements inside our component.)
    const content = template.content.cloneNode(true);
    //.cloneNode(true); does deep cloning , if false, it will just copy the tag and not its descendents.
    // template.content <template>everything inside here is being referred to with template.content </template>
    this.image = content.querySelector('img');
    this.image.src = 'assets/avatars/avatar.jpg';
    this.image.alt = `Profile photo for user`;
    /**
     * const image = content.querySelector('img');
  const name = this.querySelector('[slot="name"]')?.textContent ?? 'user';

  image.src = this.getAttribute('avatar') || 'assets/avatars/avatar.png';
  image.alt = `Profile photo for ${name}`;
     */


    shadow.append(content);

  }

  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && oldValue !== newValue) {
      this.image.src = newValue || 'assets/avatars/avatar.png';
      const name = this.querySelector('[slot="name"]')?.textContent ?? 'user';
      this.image.alt = `Profile photo for ${name}`;
    }
  }
}
customElements.define('user-card', UserCard);// this registers the element with the webpage. 






/**
 * Custom web component: We define out own html tags.
 * These tags will have - hyphen to distinguish between built-in and custom elements.
 * Two broad components;
 * 1) Autonomous Custom Elements: extend HTMLElement and use their own tag name.
 * 2) Customized built-in Element: extend an existing element such as custom button.
 */

/**
 * SHADOW DOM AND TEMPLATE
 * A <template> stores markup the browser doesnot render immediately. Javascript can clone this template and place a copy of this inside the component.
 * 
 * Shadow DOM  gives the component an internal DOM tree.
 * 
 */

/**
 * Attributes and slots:
 * Attributes are useful for simple string configuration such as avatar image path.
 * Slots let the page provide light DOM content for the component to display.
 * we have 2 slots currently: name and desciption
 */