const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  const fullName = formEl.elements.fullName.value;
  const email = formEl.elements.email.value;
  const bio = formEl.elements.bio.value;
  const plan = formEl.elements.plan.value;// selecting the value of a radio button
  const topics = formEl.querySelectorAll('input[name="topics"]:checked')// this returns a nodelist
  const topicsArray = Array.from(topics)// converts nodelist to an array
  const topicValues =  topicsArray.map((checkbox) => {
    checkbox.value;
  });
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

function validateField(field) {
  // TODO: Use setCustomValidity() for fullName, email, and bio.
}

function validateForm() {
  // TODO: Validate each field that has custom validation rules.
}

function clearCustomValidity() {
  // TODO: Clear custom validity messages when the form resets.
}

form.addEventListener('input', (event) => {
  // TODO: Validate the field that triggered the input event.
  // TODO: Use reportValidity() to show dynamic browser feedback.
});

form.addEventListener('submit', (event) => {
  event.preventDefault();// never reload the webpage
  const data = serializeForm(form);// holds an object
  result.textContent = formatSubmission(data);
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});
