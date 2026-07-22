# Fetch API

## What is Fetch?

- `fetch()` is the modern JavaScript API used to make HTTP/network requests.
- It is **Promise-based**, making asynchronous code much cleaner than the older **XMLHttpRequest (XHR)** approach.
- Since it returns a **Promise**, we can handle the response using:
  - `.then()` / `.catch()`
  - `async` / `await`

---

## Basic Syntax

```js
fetch(url);
```

> `fetch()` returns a **Promise**.

### Example

```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## Request Configuration

The second argument of `fetch()` is an **options object** that allows us to customize the request.

### Common Properties

| Property | Description |
|----------|-------------|
| `method` | HTTP method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) |
| `headers` | Request headers |
| `body` | Data sent with the request (usually for `POST`, `PUT`, or `PATCH`) |

### Example

```js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

### Notes

- `GET` requests usually do **not** contain a request body.
- Convert JavaScript objects to JSON using `JSON.stringify()`.
- Request headers tell the server what type of data is being sent.

---

## Fetch Standard

- `fetch()` follows the official **Fetch Standard**.
- Browser engines implement `fetch()` according to this specification.
- Major browsers that follow the standard include:
  - Google Chrome
  - Mozilla Firefox
  - Safari
  - Microsoft Edge

This standard ensures consistent behavior across modern browsers.

---

## Fetch and Asynchronous JavaScript

- `fetch()` is **asynchronous**.
- It **does not block** the JavaScript main thread.
- While the network request is in progress, JavaScript continues executing other code.

### Under the Hood

1. `fetch()` starts the network request.
2. It immediately returns a **Promise**.
3. The browser handles the request in the background (Web APIs).
4. Once the request completes, the Promise is either:
   - **Resolved** (successful response), or
   - **Rejected** (network error).
5. The callback (`.then()`) or `await` continues execution.

---

## Connection with the Event Loop

```text
fetch()
    │
    ▼
Web APIs handle the request
    │
    ▼
Response arrives
    │
    ▼
Promise is resolved/rejected
    │
    ▼
Microtask Queue
    │
    ▼
Event Loop
    │
    ▼
.then() callback / await resumes execution
```

### Important

- Promise callbacks are placed in the **Microtask Queue**.
- The **Event Loop** executes microtasks before processing tasks from the **Callback Queue (Macrotask Queue)** after the Call Stack becomes empty.

---

# Key Takeaways

- `fetch()` is the modern API for making HTTP requests.
- It is built on top of **Promises**.
- Use the **options object** to configure requests.
- Common options include `method`, `headers`, and `body`.
- `fetch()` follows the official **Fetch Standard**, ensuring consistent behavior across browsers.
- It is asynchronous and **does not block** the JavaScript main thread.
- Promise callbacks are executed through the **Microtask Queue**, working together with the **Event Loop**.