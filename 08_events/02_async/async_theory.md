# JavaScript Events & Asynchronous Programming

## JavaScript Events

### What are Events?

Events are actions or occurrences that happen in the browser, either triggered by the **user** or by the **browser itself**.

### Common Events

- `click`
- `input`
- `submit`
- `keydown`
- `keyup`
- `mouseover`
- `mouseout`
- `scroll`
- `resize`

---

## Avoid Inline Event Handlers

Instead of writing event handlers directly in HTML:

```html
<button onclick="handleClick()">Click Me</button>
```

### Why avoid inline event handlers?

- Mixes HTML and JavaScript.
- Difficult to maintain in large applications.
- Reduces code readability.
- Cannot easily attach multiple event handlers.
- Makes code less reusable.

---

## Preferred Approach: `addEventListener()`

The recommended way to handle events is by using `addEventListener()`.

### Advantages

- Separates JavaScript from HTML.
- Multiple event listeners can be attached to the same element.
- Event listeners can be removed using `removeEventListener()`.
- Supports **Event Bubbling** and **Event Capturing**.
- Makes code cleaner and easier to maintain.

### Example

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

# Synchronous & Single-Threaded JavaScript

## Synchronous JavaScript

JavaScript executes code **synchronously** by default.

This means:

- Code executes **one statement at a time**.
- The next statement waits until the current statement finishes.

### Example

```js
console.log("Start");
console.log("Middle");
console.log("End");
```

### Output

```text
Start
Middle
End
```

Execution occurs in the exact order the statements appear.

---

## Single-Threaded Nature of JavaScript

JavaScript is a **single-threaded language**.

This means:

- There is only **one Call Stack**.
- Only **one piece of JavaScript code** can execute at a time.
- Two JavaScript functions cannot execute simultaneously on the same thread.

Although JavaScript itself is single-threaded, browsers and Node.js provide additional APIs that enable asynchronous behavior.

---

# Asynchronous JavaScript

Asynchronous programming allows JavaScript to perform time-consuming tasks **without blocking the main thread**.

Examples include:

- `setTimeout()`
- `setInterval()`
- `fetch()`
- Event Listeners
- Promises
- `async` / `await`

These operations allow JavaScript to continue executing other code while waiting for external tasks to complete.

---

# How JavaScript Executes Asynchronous Code

## 1. Call Stack

The **Call Stack** is the execution context where JavaScript runs functions.

Characteristics:

- Executes one function at a time.
- Follows the **Last In, First Out (LIFO)** principle.

### Example

```text
main()
 └── greet()
      └── sayHello()
```

The most recently called function is executed first.

---

## 2. Web APIs (Browser APIs)

Web APIs are provided by the **browser**, not by JavaScript.

Examples include:

- `setTimeout()`
- DOM Events
- `fetch()`
- Geolocation API
- `localStorage`

When JavaScript encounters these APIs, the browser handles them in the background so that the Call Stack remains free.

---

## 3. Task Queue (Callback Queue)

After an asynchronous task completes:

1. Its callback function is placed into the **Task Queue**.
2. The callback waits until the Call Stack becomes empty.
3. It **does not execute immediately**.

The Task Queue simply waits for its turn.

---

## 4. Event Loop

The **Event Loop** continuously monitors the Call Stack and the Task Queue.

### How it works

- If the **Call Stack is empty**, the Event Loop moves the first callback from the Task Queue to the Call Stack.
- If the **Call Stack is busy**, the Event Loop waits.

The Event Loop is responsible for coordinating synchronous and asynchronous execution.

---

# `setTimeout()` Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

### Output

```text
Start
End
Timer
```

---

## Why does this happen?

1. `"Start"` executes immediately.
2. `setTimeout()` is sent to the browser's **Web APIs**.
3. `"End"` executes immediately.
4. The timer completes.
5. The callback is placed into the **Task Queue**.
6. The Event Loop waits for the Call Stack to become empty.
7. The callback moves to the Call Stack and executes.

> **Important:** Even if the timer delay is `0 ms`, the callback **never executes before synchronous code**.

---

# JavaScript Execution Flow

```text
JavaScript Code
      │
      ▼
 Call Stack
      │
      ▼
 Is it an asynchronous task?
      │
      ├── No
      │      │
      │      ▼
      │  Execute Immediately
      │
      └── Yes
             │
             ▼
        Browser Web APIs
             │
             ▼
        Task Queue
             │
             ▼
         Event Loop
             │
             ▼
         Call Stack
             │
             ▼
      Callback Executes
```

---

# Key Takeaways

- JavaScript is **synchronous** by default.
- JavaScript is **single-threaded**, meaning it has only one Call Stack.
- Long-running operations are handled by **Web APIs**.
- Completed asynchronous callbacks are stored in the **Task Queue**.
- The **Event Loop** transfers callbacks from the Task Queue to the Call Stack only when the Call Stack becomes empty.
- `setTimeout(..., 0)` does **not** execute immediately—it waits until all synchronous code has finished.
- `addEventListener()` is the preferred way to attach events because it keeps JavaScript modular, reusable, and easier to maintain.