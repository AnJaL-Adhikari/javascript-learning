
/*
====================================================================
TOPIC: JavaScript Behind the Scenes - Execution Context
====================================================================

=============================================================================
1. What is an Execution Context?
=============================================================================

- JavaScript creates an Execution Context whenever code is executed.
- It is the environment where JavaScript runs and evaluates code.
- It contains everything needed to execute the code.

Types of Execution Context:
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rarely used)

=============================================================================
2. Global Execution Context (GEC)
=============================================================================

- Created automatically when a JavaScript program starts.
- Only one Global Execution Context exists.
- All global variables and functions are stored here.
- The 'this' keyword refers to the global object.

Browser:
    this === window

Node.js:
    this === global (or module-specific depending on context)

Example:

console.log(this);

=============================================================================
3. Function Execution Context (FEC)
=============================================================================

Whenever a function is called:

✔ A new execution context is created.
✔ It gets its own memory.
✔ It has its own execution thread.
✔ After execution finishes, it is removed from memory.

Example:

function greet(name){
    return "Hello " + name;
}

greet("Alice");

Execution Flow:

Global Execution Context
        ↓
Call greet()
        ↓
Create Function Execution Context
        ↓
Execute Function
        ↓
Destroy Function Execution Context
        ↓
Return to Global Context

=============================================================================
4. JavaScript is Single-Threaded
=============================================================================

JavaScript executes ONE task at a time.

It has:

✔ One Call Stack
✔ One Main Thread

Execution order:

Task 1
 ↓
Task 2
 ↓
Task 3

No two JavaScript statements execute simultaneously on the main thread.

Example:

console.log("First");
console.log("Second");
console.log("Third");

Output:

First
Second
Third

=============================================================================
5. Phases of Execution Context
=============================================================================

Every execution context has TWO phases.

------------------------------------
Phase 1 : Memory Creation Phase
------------------------------------

Also called:

- Creation Phase
- Memory Phase

JavaScript scans the entire code before executing it.

During this phase:

Memory is allocated for variables.
Memory is allocated for functions.

Variables:

var x;

Stored as:

x → undefined

Functions:

Entire function definition is stored in memory.

Example:

function add(a,b){
    return a+b;
}

Memory stores the complete function body.

------------------------------------
Phase 2 : Execution Phase
------------------------------------

Now JavaScript executes code line by line.

During this phase:

✔ Variables receive actual values.
✔ Expressions are evaluated.
✔ Functions are called.
✔ New execution contexts are created for function calls.

=============================================================================
6. Example of Memory + Execution Phase
=============================================================================

Code:

var num1 = 10;
var num2 = 20;

function addNumber(a,b){
    return a+b;
}

var result = addNumber(num1,num2);

-------------------------------------------------
Memory Creation Phase
-------------------------------------------------

num1     → undefined

num2     → undefined

result   → undefined

addNumber → Entire Function Stored

-------------------------------------------------
Execution Phase
-------------------------------------------------

num1 = 10

num2 = 20

Call addNumber()

↓

Create New Function Execution Context

Inside Function:

a = 10

b = 20

return 30

↓

result = 30

↓

Function Execution Context Destroyed

Final Values:

num1 = 10

num2 = 20

result = 30

=============================================================================
7. What Happens During a Function Call?
=============================================================================

Suppose:

function multiply(x,y){
    return x*y;
}

multiply(4,5);

JavaScript performs:

Step 1
Memory already contains the function.

↓

Step 2
Function is called.

↓

Step 3
Create Function Execution Context.

↓

Step 4
Create Variable Environment.

x = 4

y = 5

↓

Step 5
Execute function body.

↓

Step 6
Return value.

↓

Step 7
Delete Function Execution Context.

=============================================================================
8. Variable Environment
=============================================================================

Every execution context has its own Variable Environment.

It stores:

- Variables
- Function parameters
- Inner functions

Example:

function demo(){

    let x = 10;

    let y = 20;

}

Only this function can access x and y.

Once the function finishes,
its variable environment is removed.

=============================================================================
9. Execution Thread
=============================================================================

Each execution context has an Execution Thread.

Responsible for:

✔ Running statements
✔ Evaluating expressions
✔ Executing functions

Only one execution thread runs at a time because JavaScript is single-threaded.

=============================================================================
10. Execution Context Lifecycle
=============================================================================

Program Starts

↓

Create Global Execution Context

↓

Memory Creation Phase

↓

Execution Phase

↓

Function Call

↓

Create Function Execution Context

↓

Memory Creation Phase

↓

Execution Phase

↓

Return Value

↓

Destroy Function Execution Context

↓

Continue Global Execution

↓

Program Ends

=============================================================================
11. Key  Points
=============================================================================

Q. What is an Execution Context?
→ The environment where JavaScript executes code.

Q. How many types of Execution Context are there?
→ Global, Function, and Eval (rarely used).

Q. What are the two phases of execution?
→ Memory Creation Phase and Execution Phase.

Q. What happens during the Memory Creation Phase?
→ Variables are initialized as 'undefined' and function definitions are stored.

Q. What happens during the Execution Phase?
→ Values are assigned, expressions are evaluated, and functions execute.

Q. What happens when a function is invoked?
→ A new Function Execution Context is created with its own Variable Environment and Execution Thread.

Q. Why is JavaScript called single-threaded?
→ It executes one task at a time using a single Call Stack and one main execution thread.

=============================================================================
12. Quick Revision
=============================================================================

 JavaScript first creates the Global Execution Context.

 Every function call creates a new Function Execution Context.

 Every Execution Context has:
   - Memory Phase
   - Execution Phase

 Variables become 'undefined' during the Memory Creation Phase.

 Functions are fully stored in memory before execution.

 During Execution Phase, actual values are assigned.

 Every function gets:
   - Its own Variable Environment
   - Its own Execution Thread

 After the function finishes, its Execution Context is destroyed.

 JavaScript executes code sequentially because it is single-threaded.

====================================================================
====================================================================
*/

