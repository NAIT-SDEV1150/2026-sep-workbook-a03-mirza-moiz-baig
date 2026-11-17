export function fetchJsonData(endpoint) {
  // TODO: Use fetch(endpoint), then pass the response to handleResponse().
  return fetch(endpoint)
  .then(handleResponse)
}

function handleResponse(response) {
  // TODO: Check response.ok.
  // TODO: Throw an Error when the server response failed.
  // TODO: Return response.json().
  if (!response.ok) {
    const message = `Server responded with ${response.status}${response.statusText}`;
    throw new Error(message);
  }
  return response.json() // converts the response to json.
}

export async function postData(endpoint, payload) {
  // you can only use await with async
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(payload) // converts json to a string 
  });
  /**
   *   if (!response.ok) {
    const message = `Server responded with ${response.status}${response.statusText}`;
    throw new Error(message);
  }
  return response.json() // converts the response to json.
   */
  return handleResponse(response);
}
/**
 * export async function fetchJsonData(endpoint) {
  const response = await fetch(endpoint);
  return handleResponse(response);
}
 
 
export function postData(endpoint, payload) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(handleResponse);
}
 */


// try to write delete put patch yourself.
export async function putData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function patchData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function deleteData(endpoint) {
  const response = await fetch(endpoint, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const message = `Server responded with ${response.status}${response.statusText}`;
    throw new Error(message);// throw keyword stops the execution rightaway and shows error msg
  }
  return response.json() // converts the response to json.
}