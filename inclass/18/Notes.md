### useful acronyms:
HTTP: HYPERTEXT TRANSFER PROTOCOL
API: application programming interface
REST: representational state transfer (particular set of rules with which an API can work.)
JSON: javascript object notation
URL: Uniform resource locator
URI: Uniform Resorce Identifier

### Key JSON characteristics:
Data is stored as name/value pairs.
Property names must use double quotes.
String values must use double quotes.
JSON supports objects, arrays, strings, numbers, booleans, and null.
JSON does not allow comments, trailing commas, functions, variables, or expressions

# JS object belongs to .js file.
const body = {
  name: "Earth",
  category: "planet",
  orbitalPeriod: `${365.25} Earth days`,
};

# JSON must be plain data and it belongs to .json file or an API RESPONSE.
{
  "name": "Earth",
  "category": "planet",
  "orbitalPeriod": "365.25 Earth days"
}

### summary
Front end:	What the user sees and interacts with in the browser.
Backend:	The server-side part of an application that handles requests and data.
API:	A way for two software applications to communicate.
Endpoint:	A specific URL where an application can request or send data.
JSON Server:	A tool that simulates a backend API using a local JSON file.

http://localhost:3000/bodies/2

http:// the communication protocol, REST API generally uses HTTP protocol.
localhost: your own computer.
3000 or 5173 the port where JSON server is running.
/bodies: the resource/collection
/2: a particular resource identified with id
/bodies/2 the endpoint

# REST-style APIS commonly use HTTP methods to data operations.
GET:read the data 
POST: add news data.
PUT: replaces the data
PATCH: edits the data
DELETE: deletes the data



