# Fetch API Calls

*At the end of this lesson, you should be able to*

1. Explain the concept of asynchronous programming and why HTTP requests do not return data immediately.
1. Utilize promises with `.then()` and `.catch()` to handle asynchronous operations.
1. Compare and contrast promise chaining with the `async`/`await` approach.
1. Implement the browser-native Fetch API to make HTTP requests to server-side endpoints.
1. Parse JSON responses and render API data into the DOM.
1. Send JSON data to a server-side endpoint with `fetch()`, `POST`, headers, and `JSON.stringify()`.
1. Provide basic loading, success, and error feedback while working with API data.

### things to watch out for
Issue ||	Likely Cause ||	Fix
Failed to fetch ||	JSON Server is not running	|| Run pnpm dev and check the api-server output
CORS or module error ||	Page opened with file:// ||	Use the Vite URL
Empty list	|| API returned an empty array	|| Check db.json and smoke-test the endpoint
POST returns an error||	JSON body or headers are wrong	||Check Content-Type and JSON.stringify()
Form reloads the page	|| Missing preventDefault()	|| Add event.preventDefault() in the submit handler
