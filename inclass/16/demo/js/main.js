const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  const fullName = formEl.elements.fullName.value;
  const email = formEl.elements.email.value;
  const bio = formEl.elements.bio.value;
  const plan = formEl.elements.plan.value;// selecting the value of a radio button
  const topics = formEl.querySelectorAll('input[name="topics"]:checked');// this returns a nodelist
  const topicsArray = Array.from(topics)// converts nodelist to an array
  const topicValues =  topicsArray.map((checkbox) => checkbox.value);
  // const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked')).map((checkbox) => checkbox.value);
  // const {fullName, email, bio} = formEl.elements; destructures the object fullName = formEl.elements.fullName
  //formEl.elements returns an HTMLformControlsCollection(like an array)
  return {
    fullName: fullName.trim(), // or fullname.value.trim()
    // .trim() removes the leading and trailing whitespaces
    email: email.trim(),
    plan: plan,
    bio: bio,
    topics: topicValues,
    submittedAt: new Date().toLocaleString()
  }
}
function formatSubmission(data) {
  return `Submission received:
    - Name: ${data.fullName || '(none)'}
    - Email: ${data.email || '(none)'}
    - Skill: ${data.plan || '(none)'}
    - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
    - Bio: ${data.bio || '(none)'}
    - Time: ${data.submittedAt}`;
}
function validateFullName(input) {
  const nameParts = input.value.trim().split(/\s+/).filter(Boolean);// \s refers to whitespaces
  // /the expression inside these is a regular expression /
  // + refers multiple instances of something.
  // .filter(Boolean) remove empty strings from the resulting array
  // VALIDATION ALWAYS HAPPENS BEFORE FORM GETS SUBMITTED.
  if(nameParts.length < 2) {
    input.setCustomValidity('Full name must contain atleast two words');
  } else {
    input.setCustomValidity('');
  }
}

function validateEmail(input) {
  if(!input.value.includes('@')) {
    input.setCustomValidity('Email must contain @ symbol.');
  } else {
    input.setCustomValidity('');
  }}

function validateBio(textarea){
  if(textarea.value.trim().length < 40) {
    textarea.setCustomValidity('Bio must be atleast 40 characters');
  } else {
    textarea.setCustomValidity('');
  }
}



function validateField(field) {
  // TODO: Use setCustomValidity() for fullName, email, and bio.
  if (field.name === 'fullName') {
    validateFullName(field);
  }
  if (field.name === 'email') {
    validateEmail(field);
  }
  if (field.name === 'bio') {
    validateBio(field);
  }
}

function validateForm() {
  // TODO: Validate each field that has custom validation rules.
  validateField(form.elements.fullName);
  validateField(form.elements.email);
  validateField(form.elements.bio);
}

function clearCustomValidity() {
  // TODO: Clear custom validity messages when the form resets.
  form.elements.fullName.setCustomValidity('');
  form.elements.email.setCustomValidity('');
  form.elements.bio.setCustomValidity('');
}

form.addEventListener('input', (event) => {
  // TODO: Validate the field that triggered the input event
  validateField(event.target);
  event.target.reportValidity();
  // TODO: Use reportValidity() to show dynamic browser feedback.
});

form.addEventListener('submit', (event) => {
  event.preventDefault();// never reload the webpage
  validateForm();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = serializeForm(form);// holds an object
  result.textContent = formatSubmission(data);

});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
  clearCustomValidity();
});

/**
 * Built-in validation is done using built-in validation attributes
 * 1) required
 * 2) type = email
 * We can do custom validation with javascript.
 * Empty strings can clear(also means that the field is valid) an already set msg inside .setCustomValidity()
 * 
 */
