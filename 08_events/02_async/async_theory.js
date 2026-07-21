/* ============================================================
   JAVASCRIPT EVENTS
   ============================================================ */

/*
      Events
- Events are actions performed by the user or browser.
- Examples: click, input, submit, keydown, mouseover, scroll.
*/

/*
      Avoid inline event handlers
<button onclick="handleClick()">Click</button>

Reasons:
- Mixes HTML with JavaScript.
- Hard to maintain in large projects.
- Limited flexibility.
*/

/*
    Preferred: addEventListener()

Advantages:
- Keeps JS separate from HTML.
- Multiple listeners can be attached.
- Easier to remove listeners.
- Supports event propagation (capturing & bubbling).
*/

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});


/* ============================================================
   SYNCHRONOUS & SINGLE-THREADED JAVASCRIPT
   ============================================================ */

/*
    JavaScript is synchronous by default.

- Executes one line at a time.
- The next statement waits until the current one finishes.

Example:

console.log("Start");
console.log("Middle");
console.log("End");

Output:
Start
Middle
End
*/

/*
 JavaScript is single-threaded.

- Has only ONE Call Stack.
- Can execute only one task at a time.
- Cannot execute two functions simultaneously.
*/

/*
Although JavaScript is single-threaded,
the browser (or Node.js) provides extra features
that allow asynchronous operations.
*/


/* ============================================================
   ASYNCHRONOUS JAVASCRIPT
   ============================================================ */

/*
Asynchronous operations don't block the main thread.

Examples:
- setTimeout()
- setInterval()
- fetch()
- Event Listeners
- Promises
- Async/Await
*/


/* ============================================================
   HOW JAVASCRIPT EXECUTES ASYNC CODE
   ============================================================ */

/*
1. Call Stack
----------------
- Executes JavaScript functions.
- Only one function runs at a time.

Example:
main()
 └── greet()
      └── sayHello()
*/


/*
2. Web APIs (Browser APIs)
--------------------------
Provided by the browser, NOT JavaScript itself.

Examples:
- setTimeout()
- DOM Events
- fetch()
- geolocation

Long-running tasks are handled here
instead of blocking the Call Stack.
*/


/*
3. Task Queue (Callback Queue)
------------------------------
When an async task finishes,
its callback is placed in the Task Queue.

It DOES NOT execute immediately.
It must wait until the Call Stack becomes empty.
*/


/*
4. Event Loop
-------------
The Event Loop continuously checks:

Is the Call Stack empty?

YES ➜ Move the first callback from
the Task Queue to the Call Stack.

NO ➜ Wait.
*/


/* ============================================================
   setTimeout() EXAMPLE
   ============================================================ */

/*
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

Output:
Start
End
Timer
*/

/*
Why?

1. "Start" executes.
2. setTimeout() is sent to Web APIs.
3. "End" executes.
4. Timer completes.
5. Callback enters Task Queue.
6. Event Loop waits for Call Stack to be empty.
7. Callback executes.

Even with 0ms delay,
the callback NEVER jumps ahead of synchronous code.
*/


/* ============================================================
   EXECUTION FLOW
   ============================================================ */

/*
JavaScript Code
      │
      ▼
 Call Stack
      │
      ▼
 Async Task?
      │
      ├── No → Execute immediately
      │
      └── Yes
            │
            ▼
         Web APIs
            │
            ▼
      Task Queue
            │
            ▼
       Event Loop
            │
            ▼
       Call Stack
*/

