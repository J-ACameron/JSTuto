/*
# Variables and Data Types

## What are Variables?

Variables are containers that store data values. Think of them as labeled boxes where you can put information and retrieve it later.

## Variable Declaration Keywords

### `let` - Block-scoped, Reassignable
*/

let count;
console.log(count); // undefined
count = 10;
console.log(count); // 10

// Can be reassigned
count = 20;
console.log(count); // 20

/*
### `const` - Block-scoped, NOT Reassignable
*/

const numberOfColumns = 4;
console.log(numberOfColumns); // 4

// This will throw an error!
// numberOfColumns = 8; // TypeError: Assignment to constant variable

/*
### `var` - Function-scoped (Avoid in Modern JavaScript)
*/

var a;
console.log(a); // undefined

// var has different scoping rules (covered in Scope section)

/*
**Best Practice:** Use `const` by default. Only use `let` when you know the value will change.

## Data Types

### Numbers
*/

let amount = 6;
let price = 4.99;
let negative = -42;
let decimal = 3.14159;

/*
### Strings
*/

let single = 'Hello world';
let double = "Hello world";
let backticks = `Hello world`;

// Get string length
console.log(single.length); // 11

/*
### Booleans
*/

const found = true;
const isComplete = false;

/*
### Null
*/

let x = null; // Intentionally empty value

/*
### Undefined
*/

let y;
console.log(y); // undefined - variable declared but not assigned

/*
## Console Output
*/

// Basic logging
console.log('Hello world!');

// Multiple values
const name = "Tammy";
const found2 = false;
const x2 = null;
console.log(name, found2, x2); // Tammy false null

// Formatted output
console.log('Hello %s', 'QuickRef.ME');

// Warnings and errors
console.warn('This is a warning');
console.error(new Error('Oops!'));

/*
## Practice Exercises

Try these on your own:

1. Create a variable using `const` for your age
2. Create a variable using `let` for a counter that starts at 0
3. Try to reassign the `const` variable - what happens?
4. Log all your variables to the console

## Key Takeaways

- Use `const` for values that won't change
- Use `let` for values that will change
- Avoid `var` in modern JavaScript
- JavaScript has several primitive data types: number, string, boolean, null, undefined
- `console.log()` is your best friend for debugging

---

**Next:** 02-operators.js
*/
