# Nova JavaScript Style Guide

This style guide is based on [standardJS](https://standardjs.com/rules.html)

### :large_blue_diamond: [Spacing](#spacing)

   - [Keyword Spacing](#1-keyword-spacing)
   - [Multiple blank lines not allowed](#2-multiple-blank-lines-not-allowed)
   - [Semicolons must have a space after and no space before](#3-semicolons-must-have-a-space-after-and-no-space-before)
   - [Unary operators must have a space after](#4-unary-operators-must-have-a-space-after)
   - [Space before a function declaration parentheses](#5-space-before-a-function-declaration-parentheses)
   - [Space inside single line blocks](#6-space-inside-single-line-blocks)
   - [Space between colon and value in key value pairs](#7-space-between-colon-and-value-in-key-value-pairs)
   - [Do not use multiple spaces](#8-do-not-use-multiple-spaces)
   - [Use spaces inside comments](#9-use-spaces-inside-comments)
   - [Must have a space before blocks](#10-must-have-a-space-before-blocks)
   - [The asterisk in yield* expression must have a space before and after](#11-the-asterisk-in-yield-expression-must-have-a-space-before-and-after)
   - [No whitespace before properties](#12-no-whitespace-before-properties)
   - [No padding within blocks](#13-no-padding-within-blocks)
   - [No whitespace between spread operators and their expressions](#14-no-whitespace-between-spread-operators-and-their-expressions)
   - [No space inside parentheses](#15-no-space-inside-parentheses)
   - [No spacing in template strings](#16-no-spacing-in-template-strings)

### :large_blue_diamond: [Indentation](#indentation)

   - [Avoid mixing spaces and tabs for indentation use tabs throughout](#1-avoid-mixing-spaces-and-tabs-for-indentation-use-tabs-throughout)

### :large_blue_diamond: [Declaration](#declaration)

   - [Camelcase when naming variables and functions](#1-camelcase-when-naming-variables-and-functions)
   - [Remove unused variables](#2-remove-unused-variables)
   - [Every variable declaration should have its own statement](#3-every-variable-declaration-should-have-its-own-statement)
   - [Use array literals instead of array constructors](#4-use-array-literals-instead-of-array-constructors)
   - [Avoid modifying variables declared using const](#5-avoid-modifying-variables-declared-using-const)
   - [No floating decimals](#6-no-floating-decimals)
   - [No multiline strings](#7-no-multiline-strings)
   - [No redeclaring variables](#8-no-redeclaring-variables)
   - [Avoid assigning variable to itself](#9-avoid-assigning-variable-to-itself)
   - [Sparse arrays are not allowed](#10-sparse-arrays-are-not-allowed)
   - [Regular string must not contain template literal placeholders](#11-regular-string-must-not-contain-template-literal-placeholders)
   - [Initialize to undefined is not allowed](#12-initialize-to-undefined-is-not-allowed)

### :large_blue_diamond: [Operators](#operators)

   - [Assignment operator must be spaced]()
   - [=== instead of ==]()
   - [Ternary operator]()
   - [No ternary operators when simpler alternative exist]()
   - [No delete operator on variables]()
   - [Avoid unnecessary boolean casts]()
   - [typeof must be compared to a valid string]()

### :large_blue_diamond: [Comma](#comma)

   - [Spacing]()
   - [Style]()
   - [Trailing commas not allowed]()
   - [Avoid using comma operator]()

### :large_blue_diamond: [Function](#function)

   - [No duplicate arguments]()
   - [No unnecessary parentheses around function expressions]()
   - [No space between function identifiers and their invocation]()
   - [No function declaration in nested blocks]()
   - [Assignment in return statements must be surrounded by parentheses]()
   - [Dot should be on same line as method]()
   - [Avoid unnecessary function bindings]()
   - [Avoid reassigning function declaration]()
   - [No label that share a name with an in scope variable]()
   - [No unnecessary nested blocks]()
   - [Always handle function err parameter]()
   - [No reassigning exceptions in catch clauses]()
   - [When using try catch and throw only use Error object to throw an error]()
   - [No unreachable code after return, throw, continue and break statements]()
   - [No flow control statements in finally blocks]()
   - [Immediately invoked function expressions (IIFEs) must be wrapped]()

### :large_blue_diamond: [Control flow](#control-flow)

   - [Keep else statement on same line as curly braces]()
   - [Use curly braces for multiline if statements]()
   - [Avoid using const expressions in conditions except for loops]()
   - [Avoid comparing variable to itself]()
   - [No undefined conditions of loops]()
   - [Avoid Yoda conditions]()
   - [Wrap conditional assignments]()
   - [No label statements]()
   - [No duplicate case labels in switch statements]()
   - [Use break to prevent fall-through in switch cases]()

### :large_blue_diamond: [Class and Object](#class-and-object)

   - [Constructor names must begin with capital letters]()
   - [Constructor with no arguments must be invoked with parentheses]()
   - [Constructor of derived class must call super]()
   - [Super must be called before using this keyword]()
   - [Avoid modifying variables of class declaration]()
   - [Maintain consistency of newlines between object properties]()
   - [Object must contain a getter when a setter is defined]()
   - [No duplicate name in class members]()
   - [No duplicate keys in object literals]()
   - [No new without assigning object to a variable]()
   - [No using the Function constructor]()
   - [No using the Object constructor]()
   - [No using the Symbol constructor]()
   - [No calling global object properties as functions]()
   - [No unnecessary constructor]()

### :large_blue_diamond: [RegExp](#regexp)

   - [No empty character classes in regular expressions]()
   - [No invalid regular expression string in RegExp constructors]()
   - [Avoid multiple spaces in regular expressions literals]()

### :large_blue_diamond: [General](#general)

   - [Quotes]()
   - [Use single import statement per module]()
   - [Renaming import, export and restructured assignments to the same name is not allowed]()
   - [No unnecessary use of escape]()
   - [Use isNaN() when checking for NaN]()
   - [Avoid semicolons]()

## Spacing

#### 1. Keyword Spacing

```javascript
if(condition) { ... }    // ✗ avoid
if (condition) { ... }   // ✓ ok
```

#### 2. Multiple blank lines not allowed 

```javascript
// ✗ avoid
let value = 'hello world'


console.log(value)
```
```javascript
// ✓ ok
let value = 'hello world'
console.log(value)
```

#### 3. Semicolons must have a space after and no space before

```javascript
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

#### 4. Unary operators must have a space after

```javascript
typeof!admin        // ✗ avoid
typeof !admin       // ✓ ok
```

#### 5. Space before a function declaration parentheses

```javascript
function name(arg) { ... }    // ✗ avoid
function name (arg) { ... }   // ✓ ok
```
```javascript
run(function() { ... })       // ✗ avoid
run(function () { ... })      // ✓ ok
```

#### 6. Space inside single line blocks

```javascript
function foo () {return true}    // ✗ avoid
function foo () { return true }  // ✓ ok
```

#### 7. Space between colon and value in key value pairs

```javascript
let obj = { 'key' : 'value' }    // ✗ avoid
let obj = { 'key' :'value' }     // ✗ avoid
let obj = { 'key':'value' }      // ✗ avoid
let obj = { 'key': 'value' }     // ✓ ok
```

#### 8. Do not use multiple spaces

```javascript
const id =    1234    // ✗ avoid
const id = 1234       // ✓ ok
```

#### 9. Use spaces inside comments

```javascript
//comment           // ✗ avoid
// comment          // ✓ ok

/*comment*/         // ✗ avoid
/* comment */       // ✓ ok
```

#### 10. Must have a space before blocks

```javascript
if (admin){...}     // ✗ avoid
if (admin) {...}    // ✓ ok
```

#### 11. The asterisk in yield* expression must have a space before and after

```javascript
yield* increment()    // ✗ avoid
yield * increment()   // ✓ ok
```

#### 12. No whitespace before properties

```javascript
user .name      // ✗ avoid
user.name       // ✓ ok
```

#### 13. No padding within blocks

```javascript
// ✗ avoid
if (user) {
                       
  const name = getName()

}
```
```javascript
// ✓ ok
if (user) {
  const name = getName()    
}
```

#### 14. No whitespace between spread operators and their expressions

```javascript
fn(... args)    // ✗ avoid
fn(...args)     // ✓ ok
```

#### 15. No space inside parentheses

```javascript
getName( name )     // ✗ avoid
getName(name)       // ✓ ok
```

#### 16. No spacing in template strings

```javascript
const message = `Hello, ${ name }`    // ✗ avoid
const message = `Hello, ${name}`      // ✓ ok
```

## Indentation

#### 1. Avoid mixing spaces and tabs for indentation use tabs throughout

```javascript
// ✗ avoid
function add() {
   let x = 10;    // tab
   let y = 10;    // tab
  return x + y;   // 2 spaces
}
```
```javascript
// ✓ ok
function add() {
   let x = 10;    // tab
   let y = 10;    // tab
   return x + y;  // tab
}
```

## Declaration

#### 1. Camelcase when naming variables and functions

```javascript
// ✗ avoid
function my_function () { }
let my_var = 'hello'
```
```javascript
// ✓ ok
let myVar = 'hello'
function myFunction () { }
```

#### 2. Remove unused variables 

```javascript
// ✗ avoid
function add(a, b) {
   let c = 10;    // unused variable
   return a + b;
}
```
```javascript
// ✓ ok
function add(a, b) {
   return a + b;
}
```

#### 3. Every variable declaration should have its own statement

```javascript
// ✗ avoid
let a = 10, b = 10, c = 10;
let a = 10,
    b = 10,
    c = 10;
```
```javascript
// ✓ ok
let a = 10;
let b = 10;
```

#### 4. Use array literals instead of array constructors

```javascript
let nums = new Array(1, 2, 3)   // ✗ avoid
let nums = [1, 2, 3]            // ✓ ok
```

#### 5. Avoid modifying variables declared using const

```javascript
const score = 100
score = 125       // ✗ avoid
```

#### 6. No floating decimals

```javascript
const discount = .5      // ✗ avoid
const discount = 0.5     // ✓ ok
```

#### 7. No multiline strings

```javascript
// ✗ avoid
let x = "some very \
         long text";
```
```javascript
// ✓ ok
let x = "some very long text";
let x = "some very " +
        "long text";
```

#### 8. No redeclaring variables

```javascript
// ✗ avoid
let name = 'John'
let name = 'Jane'
```
```javascript
// ✓ ok
let name = 'John'
name = 'Jane'         
```

#### 9. Avoid assigning variable to itself

```javascript
// ✗ avoid
foo = foo;
[name, age] = [name, age];
```
```javascript
// ✓ ok
name = personname;
[a, b] = [b, a];        
```

#### 10. Sparse arrays are not allowed

```javascript
// ✗ avoid
let fruits = ['apple',, 'orange']
let numbers = [1, 2,,,, 6]
```
```javascript
// ✓ ok
let fruits = ['apple', 'banana', 'orange']
let numbers = [1, 2, 3, 4, 5, 6]       
```

#### 11. Regular string must not contain template literal placeholders

```javascript
// ✗ avoid
let message1 = 'Hello ${name}'
let message2 = "Hello ${name}"
```
```javascript
// ✓ ok
const message = `Hello ${name}`
```

#### 12. Initialize to undefined is not allowed

```javascript
let name = undefined    // ✗ avoid

let name
name = 'value'          // ✓ ok
```

## Operators
## Comma
## Function
## Control flow
## Class and Object
## RegExp
## General
