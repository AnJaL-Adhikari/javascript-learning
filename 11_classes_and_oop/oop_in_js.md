````md
# JavaScript and Classes

## OOP (Object-Oriented Programming)

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into **objects**. An object contains **data (properties)** and **behavior (methods)**.

### Why use OOP?
- Makes code easier to organize and maintain.
- Promotes code reusability.
- Makes large applications easier to manage.
- Improves readability and scalability.
- Models real-world entities using objects.

---

# Object

An **object** is a collection of **properties** (data) and **methods** (functions).

```javascript
const user = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

user.greet();
```

### Properties
Store data.

```javascript
user.name
user.age
```

### Methods
Functions attached to an object.

```javascript
user.greet();
```

### Built-in Objects
JavaScript provides many built-in objects.

Examples:

```javascript
"HELLO".toLowerCase(); // string method

const p = new Promise((resolve) => {
    resolve("Done");
});
```

Some common built-in objects:

- Object
- Array
- String
- Number
- Math
- Date
- Promise
- Map
- Set

---

# Parts of OOP in JavaScript

## 1. Object Literal

The simplest way to create an object.

```javascript
const user = {
    username: "Alice",
    loginCount: 5,
    signedIn: true
};
```

### Pros
- Simple
- Easy to read

### Cons
- Not reusable for creating many similar objects

---

## 2. Constructor Function

Used before ES6 classes to create multiple objects.

```javascript
function User(username, age) {
    this.username = username;
    this.age = age;
}

const user1 = new User("Alice", 22);
const user2 = new User("Bob", 25);
```

### Why `new`?

The `new` keyword:

1. Creates a new empty object.
2. Sets `this` to that object.
3. Links the object to the constructor's prototype.
4. Returns the object automatically.

---

## 3. Prototypes

Every JavaScript object has an internal link to a prototype.

Methods placed on the prototype are shared among all instances.

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

const u1 = new User("Alice");
u1.greet();
```

### Advantages
- Saves memory.
- Shared methods.
- Basis of inheritance.

---

## 4. Classes (ES6)

Classes are a cleaner syntax over constructor functions and prototypes.

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const user = new User("Alice", 21);
user.greet();
```

> Classes are **syntactic sugar** over JavaScript's prototype-based inheritance.

---

## 5. Instances

An instance is an object created from a constructor or class.

```javascript
const user1 = new User("Alice");
const user2 = new User("Bob");
```

Here, `user1` and `user2` are instances of `User`.

---

# Important Keywords

## `this`

`this` refers to the current object.

```javascript
const user = {
    name: "Alice",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```
Alice
```

---

## `new`

Creates a new instance from a constructor or class.

```javascript
const user = new User("Alice");
```

---

# Four Pillars of OOP

## 1. Abstraction

Hide unnecessary implementation details and expose only essential features.

Example:

```javascript
class CoffeeMachine {
    start() {
        this.#boilWater();
        console.log("Coffee Ready");
    }

    #boilWater() {
        console.log("Boiling...");
    }
}
```

Users only call:

```javascript
machine.start();
```

They don't need to know the internal steps.

---

## 2. Encapsulation

Bundle data and methods together while restricting direct access to internal data.

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

Private fields (`#balance`) cannot be accessed directly.

```javascript
account.#balance ❌
account.getBalance() ✅
```

---

## 3. Inheritance

Allows one class to inherit properties and methods from another.

```javascript
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const dog = new Dog();

dog.speak();
dog.bark();
```

Benefits:
- Code reuse
- Less duplication
- Easier maintenance

---

## 4. Polymorphism

The same method behaves differently depending on the object.

```javascript
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
```

Output:

```
Woof!
Meow!
```

One method (`speak`) behaves differently for different classes.

---

# OOP Flow in JavaScript

```
Object Literal
      ↓
Constructor Function
      ↓
Prototype
      ↓
Class (ES6 Syntax)
      ↓
Instance (new)
```

---

# Summary

| Concept | Description |
|----------|-------------|
| Object | Collection of properties and methods |
| Property | Data stored inside an object |
| Method | Function inside an object |
| Object Literal | Simple way to create objects |
| Constructor Function | Creates multiple similar objects |
| Prototype | Shared methods between objects |
| Class | Modern syntax for OOP |
| Instance | Object created using `new` |
| `this` | Refers to the current object |
| `new` | Creates a new object from a constructor/class |
| Abstraction | Hide implementation details |
| Encapsulation | Protect data and expose controlled access |
| Inheritance | Reuse code by extending classes |
| Polymorphism | Same interface, different behavior |

---

# Key Takeaways

- JavaScript is **prototype-based**, not class-based at its core.
- ES6 `class` is a cleaner syntax built on top of prototypes.
- Objects combine **state (properties)** and **behavior (methods)**.
- `new` creates instances from constructors or classes.
- `this` refers to the current object (context-dependent).
- The four pillars of OOP are:
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism
````
