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

   - [Avoid mixing spaces and tabs for indentation](#1-avoid-mixing-spaces-and-tabs-for-indentation)
   - [Use tabs for indentation](#2-use-tabs-for-indentation)

### :large_blue_diamond: [Declaration](#declaration)

   - [Remove unused variables]()
   - [Camelcase when naming variables and functions]()
   - [Every variable declaration should have it’s own statement]()
   - [Avoid modifying variables declared using const]()
   - [Initialize to undefined is not allowed]()
   - [Sparse arrays are not allowed]()
   - [Use array literals instead of array constructors]()
   - [No floating decimals]()
   - [No multiline strings]()
   - [No redeclaring variables]()
   - [Avoid assigning variable to itself]()
   - [Regular string must not contain template literal placeholders]()

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
var value = 'hello world'


console.log(value)
```
```javascript
// ✓ ok
var value = 'hello world'
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
var obj = { 'key' : 'value' }    // ✗ avoid
var obj = { 'key' :'value' }     // ✗ avoid
var obj = { 'key':'value' }      // ✗ avoid
var obj = { 'key': 'value' }     // ✓ ok
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

#### 1. Avoid mixing spaces and tabs for indentation

```javascript
// ✗ avoid
function add() {
   var x = 10;    // tab
   var y = 10;    // tab
  return x + y;   // 2 spaces
}
```

#### 2. Use tabs for indentation

```javascript
// ✓ ok
function add() {
   var x = 10;    // tab
   var y = 10;    // tab
   return x + y;  // tab
}
```

## Declaration
## Operators
## Comma
## Function
## Control flow
## Class and Object
## RegExp
## General
