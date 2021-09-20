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
   - [Infix operator must be spaced](#17-infix-operator-must-be-spaced)

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

   - [=== instead of ==](#1-triple-equals-operator-instead-of-double-equals-operator)
   - [Ternary operator](#2-ternary-operator)
   - [No ternary operators when simpler alternative exist](#3-no-ternary-operators-when-simpler-alternative-exist)
   - [No delete operator on variables](#4-no-delete-operator-on-variables)
   - [Avoid unnecessary boolean casts](#5-avoid-unnecessary-boolean-casts)
   - [typeof must be compared to a valid string](#6-typeof-must-be-compared-to-a-valid-string)

### :large_blue_diamond: [Comma](#comma)

   - [Spacing](#1-spacing)
   - [Style](#2-style)
   - [Trailing commas not allowed](#3-trailing-commas-not-allowed)
   - [Avoid using comma operator](#4-avoid-using-comma-operator)

### :large_blue_diamond: [Function](#function)

   - [No duplicate arguments](#1-no-duplicate-arguments)
   - [No unnecessary parentheses around function expressions](#2-no-unnecessary-parentheses-around-function-expressions)
   - [No space between function identifiers and their invocation](#3-no-space-between-function-identifiers-and-their-invocation)
   - [No function declaration in nested blocks](#4-no-function-declaration-in-nested-blocks)
   - [Assignment in return statements must be surrounded by parentheses](#5-assignment-in-return-statements-must-be-surrounded-by-parentheses)
   - [Dot should be on same line as method](#6-dot-should-be-on-same-line-as-method)
   - [Avoid unnecessary function bindings](#7-avoid-unnecessary-function-bindings)
   - [Avoid reassigning function declaration](#8-avoid-reassigning-function-declaration)
   - [No label that share a name with an in scope variable](#9-no-label-that-share-a-name-with-an-in-scope-variable)
   - [No unnecessary nested blocks](#10-no-unnecessary-nested-blocks)
   - [Always handle function err parameter](#11-always-handle-function-err-parameter)
   - [No reassigning exceptions in catch clauses](#12-no-reassigning-exceptions-in-catch-clauses)
   - [When using try catch and throw only use Error object to throw an error](#13-when-using-try-catch-and-throw-only-use-Error-object-to-throw-an-error)
   - [No unreachable code after return, throw, continue and break statements](#14-no-unreachable-code-after-return-throw-continue-and-break-statements)
   - [No flow control statements in finally blocks](#15-no-flow-control-statements-in-finally-blocks)
   - [Immediately invoked function expressions (IIFEs) must be wrapped](#16-immediately-invoked-function-expressions-IIFEs-must-be-wrapped)

### :large_blue_diamond: [Control flow](#control-flow)

   - [Keep else statement on same line as curly braces](#1-keep-else-statement-on-same-line-as-curly-braces)
   - [Use curly braces for multiline if statements](#2-use-curly-braces-for-multiline-if-statements)
   - [Avoid using const expressions in conditions except for loops](#3-avoid-using-const-expressions-in-conditions-except-loops)
   - [Avoid comparing variable to itself](#4-avoid-comparing-variable-to-itself)
   - [No unmodified conditions of loops](#5-no-unmodified-conditions-of-loops)
   - [Avoid Yoda conditions](#6-avoid-Yoda-conditions)
   - [Wrap conditional assignments](#7-wrap-conditional-assignments)
   - [No label statements](#8-no-label-statements)
   - [No duplicate case labels in switch statements](#9-no-duplicate-case-labels-in-switch-statements)
   - [Use break to prevent fall-through in switch cases](#10-use-break-to-prevent-fall-through-in-switch-cases)

### :large_blue_diamond: [Class and Object](#class-and-object)

   - [Constructor names must begin with capital letters](#1-constructor-names-must-begin-with-capital-letters)
   - [Constructor with no arguments must be invoked with parentheses](#2-constructor-with-no-arguments-must-be-invoked-with-parentheses)
   - [Constructor of derived class must call super](#3-constructor-of-derived-class-must-call-super)
   - [Super must be called before using this keyword](#4-super-must-be-called-before-using-this-keyword)
   - [Avoid modifying variables of class declaration](#5-avoid-modifying-variables-of-class-declaration)
   - [Maintain consistency of newlines between object properties](#6-maintain-consistency-of-newlines-between-object-properties)
   - [Object must contain a getter when a setter is defined](#7-object-must-contain-a-getter-when-a-setter-is-defined)
   - [No duplicate name in class members](#8-no-duplicate-name-in-class-members)
   - [No duplicate keys in object literals](#9-no-duplicate-keys-in-object-literals)
   - [No new without assigning object to a variable](#10-no-new-without-assigning-object-to-a-variable)
   - [No using the Function constructor](#11-no-using-the-Function-constructor)
   - [No using the Object constructor](#12-no-using-the-Object-constructor)
   - [No using the Symbol constructor](#13-no-using-the-Symbol-constructor)
   - [No calling global object properties as functions](#14-no-calling-global-object-properties-as-functions)
   - [No unnecessary constructor](#15-no-unnecessary-constructor)

### :large_blue_diamond: [RegExp](#regexp)

   - [No empty character classes in regular expressions](#1-no-empty-character-classes-in-regular-expressions)
   - [No invalid regular expression string in RegExp constructors](#2-no-invalid-regular-expression-string-in-regexp-constructors)
   - [Avoid multiple spaces in regular expressions literals](#3-avoid-multiple-spaces-in-regular-expressions-literals)

### :large_blue_diamond: [General](#general)

   - [Quotes](#1-quotes)
   - [Use single import statement per module](#2-use-single-import-statement-per-module)
   - [Renaming import export and restructured assignments to the same name is not allowed](#2-renaming-import-export-and-restructured-assignments-to-the-same-name-is-not-allowed)
   - [No unnecessary use of escape](#3-no-unnecessary-use-of-escape)
   - [Use isNaN function when checking for NaN](#4-use-isnan-function-when-checking-for-nan)
   - [Avoid semicolons](#5-avoid-semicolons)

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

#### 17. Infix operator must be spaced

```javascript
// ✗ avoid
var x=2
var message = 'hello, '+name+'!'
```
```javascript
// ✓ ok
var x = 2
var message = 'hello, ' + name + '!'
```

## Indentation

#### 1. Avoid mixing spaces and tabs for indentation use tabs throughout

```javascript
// ✗ avoid
function add() {
   var x = 10;    // tab
   var y = 10;    // tab
  return x + y;   // 2 spaces
}
```
```javascript
// ✓ ok
function add() {
   var x = 10;    // tab
   var y = 10;    // tab
   return x + y;  // tab
}
```

## Declaration

#### 1. Camelcase when naming variables and functions

```javascript
// ✗ avoid
function my_function () { }
var my_var = 'hello'
```
```javascript
// ✓ ok
var myVar = 'hello'
function myFunction () { }
```

#### 2. Remove unused variables 

```javascript
// ✗ avoid
function add(a, b) {
   var c = 10;    // unused variable
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
var a = 10, b = 10, c = 10;
var a = 10,
    b = 10,
    c = 10;
```
```javascript
// ✓ ok
var a = 10;
var b = 10;
```

#### 4. Use array literals instead of array constructors

```javascript
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok
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
var x = 'some very \
         long text';
```
```javascript
// ✓ ok
var x = 'some very long text';
var x = 'some very ' +
        'long text';
```

#### 8. No redeclaring variables

```javascript
// ✗ avoid
var name = 'John'
var name = 'Jane'
```
```javascript
// ✓ ok
var name = 'John'
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
var fruits = ['apple',, 'orange']
var numbers = [1, 2,,,, 6]
```
```javascript
// ✓ ok
var fruits = ['apple', 'banana', 'orange']
var numbers = [1, 2, 3, 4, 5, 6]       
```

#### 11. Regular string must not contain template literal placeholders

```javascript
// ✗ avoid
var message1 = 'Hello ${name}'
var message2 = "Hello ${name}"
```
```javascript
// ✓ ok
const message = `Hello ${name}`
```

#### 12. Initialize to undefined is not allowed

```javascript
var name = undefined    // ✗ avoid

var name
name = 'value'          // ✓ ok
```

## Operators

#### 1. Triple equals operator instead of double equals operator

```javascript
// ✗ avoid
if (name == 'John') {}
if (name != 'John') {}
```
```javascript
// ✓ ok
if (name === 'John') {}
if (name !== 'John') {}
```

#### 2. Ternary operator

```javascript
// ✗ avoid
var location = env.development ?
               'localhost' :
               'www.api.com'
```
```javascript
// ✓ ok
var location = env.development ? 'localhost' : 'www.api.com'
_or_
var location = env.development
               ? 'localhost'
               : 'www.api.com'
```

#### 3. No ternary operators when simpler alternative exist

```javascript
var score = val ? val : 0     // ✗ avoid
var score = val || 0          // ✓ ok
```

#### 4. No delete operator on variables

```javascript
// ✗ avoid
var name
delete name
```

#### 5. Avoid unnecessary boolean casts

```javascript
// ✗ avoid
const result = true
if (!!result) {
   // code here
}
```
```javascript
// ✓ ok
const result = true
if (result) {
   // code here
}
```

#### 6. typeof must be compared to a valid string

```javascript
typeof name === 'undefimed'     // ✗ avoid
typeof name === 'undefined'     // ✓ ok
```

## Comma

#### 1. Spacing

```javascript
// ✗ avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```
```javascript
// ✓ ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }
```

#### 2. Style

```javascript
// ✗ avoid
var person = {
   name: 'John'
   ,age: 28
}
```
```javascript
// ✓ ok
var person = {
   name: 'John',
   age:  28
}
```

#### 3. Trailing commas not allowed

```javascript
if (doSomething(), !!test) {}   // ✗ avoid
```

#### 4. Avoid using comma operator

```javascript
// ✗ avoid
var person = {
   name: 'John',
   age:  26,
};
```
```javascript
// ✓ ok
var person = {
   name: 'John',
   age:  26
};
```

## Function

#### 1. No duplicate arguments

```javascript
// ✗ avoid
function sum (a, b, a) {
   // code here
}
```
```javascript
// ✓ ok
function sum (a, b, c) {
   // code here
}
```

#### 2. No unnecessary parentheses around function expressions

```javascript
const myFunc = (function () { })   // ✗ avoid
const myFunc = function () { }     // ✓ ok
```

#### 3. No space between function identifiers and their invocation

```javascript
console.log ('hello')   // ✗ avoid
console.log('hello')    // ✓ ok
```

#### 4. No function declaration in nested blocks

```javascript
// ✗ avoid
if (authenticated) {
  function setAuthUser () {}
}
```
```javascript
// ✓ ok
if (authenticated) {
   // code here
}
function setAuthUser () {
   // code here
}
```

#### 5. Assignment in return statements must be surrounded by parentheses

```javascript
// ✗ avoid
function sum (a, b) {
   return result = a + b
}
```
```javascript
// ✓ ok
function sum (a, b) {
   return (result = a + b)
}
```

#### 6. Dot should be on same line as method

```javascript
// ✗ avoid
console.
   log('hello')
```
```javascript
// ✓ ok
console
   .log('hello')
```

#### 7. Avoid unnecessary function bindings

```javascript
// ✗ avoid
const name = function () {
   getName()
}.bind(user)
```
```javascript
// ✓ ok
const name = function () {
   this.getName()
}.bind(user)
```

#### 8. Avoid reassigning function declaration

```javascript
// ✗ avoid
function foo() {}
foo = bar;
```
```javascript
// ✓ ok
var foo = function () {}
foo = bar;
```

#### 9. No label that share a name with an in scope variable

```javascript
// ✗ avoid
var score = 100
function game () {
   score: while (true) {
      score -= 10
      if (score > 0) continue score
      break
   }
}
```
```javascript
// ✓ ok
function foo() {
  var q = t;
}
function bar() {
q:
  for(;;) {
    break q;
  }
}
```

#### 10. No unnecessary nested blocks

```javascript
// ✗ avoid
function myFunc () {
   {               
      myOtherFunc()
   }
}
```
```javascript
// ✓ ok
function myFunc () {
   myOtherFunc()
}
```

#### 11. Always handle function err parameter

```javascript
// ✗ avoid
run(function (err) {
   window.alert('done')
})
```
```javascript
// ✓ ok
run(function (err) {
   if (err) throw err
   window.alert('done')
})
```

#### 12. No reassigning exceptions in catch clauses

```javascript
// ✗ avoid
try {
   // code here
} catch (e) {
   e = 'new value'
}
```
```javascript
// ✓ ok
try {
   // code here
} catch (e) {
   const newVal = 'new value'
}
```

#### 13. When using try catch and throw only use Error object to throw an error

```javascript
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok
```

#### 14. No unreachable code after return, throw, continue and break statements

```javascript
// ✗ avoid
function foo() {
   return true;
   console.log("done");
}
function bar() {
   throw new Error("Oops!");
   console.log("done");
}
while(value) {
   break;
   console.log("done");
}
function baz() {
   if (Math.random() < 0.5) {
      return;
   } else {
      throw new Error();
   }
   console.log("done");
}
```
```javascript
// ✓ ok
function foo() {
   return bar();
   function bar() {
      return 1;
   }
}
function bar() {
   return x;
   var x;
}
switch (foo) {
   case 1:
      break;
      var x;
}
```

#### 15. No flow control statements in finally blocks

```javascript
// ✗ avoid
let foo = function() {
   try {
      return 1;
   } catch(err) {
      return 2;
   } finally {
      return 3;
   }
};
```
```javascript
// ✓ ok
let foo = function() {
   try {
      return 1;
   } catch(err) {
      return 2;
   } finally {
      console.log("hola!");
   }
};
let foo = function() {
   try {
      return 1;
   } catch(err) {
      return 2;
   } finally {
      let a = function() {
         return "hola!";
      }
   }
};
let foo = function() {
   try {
      return 1;
   } catch(err) {
      return 2;
   } finally {
      switch(a) {
         case 1: {
            console.log("hola!")
            break;
         }
      }
   }
};
```

#### 16. Immediately invoked function expressions (IIFEs) must be wrapped

```javascript
const getName = function () { }()     // ✗ avoid
const getName = (function () { }())   // ✓ ok
const getName = (function () { })()   // ✓ ok
```

## Control flow

#### 1. Keep else statement on same line as curly braces

```javascript
// ✗ avoid
if (condition) {
   // code here
}
else {
   // code here
}
```
```javascript
// ✓ ok
if (condition) {
   // code here
} else {
   // code here
}
```

#### 2. Use curly braces for multiline if statements

```javascript
// ✗ avoid
if (options.quiet !== true)
   console.log('done')
```
```javascript
// ✓ ok
if (options.quiet !== true) console.log('done')
if (options.quiet !== true) {
   console.log('done')
}
```

#### 3. Avoid using const expressions in conditions (except loops)

```javascript
// ✗ avoid
if (false) {
   // code here
}
```
```javascript
// ✓ ok
if (x === 0) {
   // code here
}
while (true) {
   // code here
}
```

#### 4. Avoid comparing variable to itself

```javascript
if (score === score) {}    // ✗ avoid
```

#### 5. No unmodified conditions of loops

```javascript
for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

#### 6. Avoid Yoda conditions

```javascript
if (42 === age) { }    // ✗ avoid
if (age === 42) { }    // ✓ ok
```

#### 7. Wrap conditional assignments

```javascript
// ✗ avoid
while (m = text.match(expr)) {
   // code here
}
```
```javascript
// ✓ ok
while ((m = text.match(expr))) {
   // code here
}
```

#### 8. No label statements

```javascript
// ✗ avoid
label:
   while(true) {
      continue label;
   }
```
```javascript
// ✓ ok
var f = {
   label: "foo"
};
while (true) {
   break;
}
```

#### 9. No duplicate case labels in switch statements

```javascript
// ✗ avoid
switch (a) {
   case one:
      break;
   case 2:
      break;
   case one:
      break;
   default:
      break;
}
```
```javascript
// ✓ ok
switch (a) {
   case 1:
      break;
   case 2:
      break;
   case 3:
      break;
   default:
      break;
}
```

#### 10. Use break to prevent fall-through in switch cases

```javascript
// ✗ avoid
switch (filter) {
   case 1:
      doSomething()
   case 2:
      doSomethingElse()
}
```
```javascript
// ✓ ok
switch (filter) {
   case 1:
      doSomething()
      break
   case 2:
      doSomethingElse()
}
```

## Class and Object

#### 1. Constructor names must begin with capital letters

```javascript
function animal () {}
var dog = new animal()        // ✗ avoid

function Animal () {}
var dog = new Animal()        // ✓ ok
```

#### 2. Constructor with no arguments must be invoked with parentheses

```javascript
function Animal () {}
var dog = new Animal       // ✗ avoid
var dog = new Animal()     // ✓ ok
```

#### 3. Constructor of derived class must call super

```javascript
class Dog {
   constructor () {
      super()                    // ✗ avoid
      this.legs = 4
   }
}
class Dog extends Animal {
   constructor () {              // ✗ avoid
      this.legs = 4
   }
}
class Dog extends Animal {
   constructor () {
      super()                    // ✓ ok
      this.legs = 4
   }
}
```

#### 4. Super must be called before using this keyword

```javascript
// ✗ avoid
class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}
```
```javascript
// ✓ ok
class A extends B {
    constructor() {
        super();
        this.a = 0;
    }
}
```

#### 5. Avoid modifying variables of class declaration

```javascript
// ✗ avoid
class A { }
A = 0;
```
```javascript
// ✓ ok
let A = class A { }
A = 0;   // A is a variable.
```

#### 6. Maintain consistency of newlines between object properties

```javascript
// ✗ avoid
const user = {
   name: 'Jane Doe', age: 30,
   username: 'jdoe86'
}
```
```javascript
// ✓ ok
const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }
const user = {
   name: 'Jane Doe',
   age: 30,
   username: 'jdoe86'
}
```

#### 7. Object must contain a getter when a setter is defined

```javascript
// ✗ avoid
var person = {
   set name (value) {
      this._name = value
   }
}
```
```javascript
// ✓ ok
var person = {
   set name (value) {
      this._name = value
   },
   get name () {
      return this._name
   }
}
```

#### 8. No duplicate name in class members

```javascript
// ✗ avoid
class Foo {
   bar() { }
   bar() { }
}
```
```javascript
// ✓ ok
class Foo {
   bar() { }
   qux() { }
}
```

#### 9. No duplicate keys in object literals

```javascript
// ✗ avoid
var foo = {
   bar: "baz",
   bar: "qux"
};
```
```javascript
// ✓ ok
var foo = {
   bar: "baz",
   qux: "qux"
};
```

#### 10. No new without assigning object to a variable

```javascript
new Character()                     // ✗ avoid
const character = new Character()   // ✓ ok
```

#### 11. No using the Function constructor

```javascript
// ✗ avoid
var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
```
```javascript
// ✓ ok
var x = function (a, b) {
   return a + b;
};
```

#### 12. No using the Object constructor

```javascript
// ✗ avoid
var myObject = new Object();
new Object();
```
```javascript
// ✓ ok
var myObject = new CustomObject();
var myObject = {};

var Object = function Object() {};
new Object();
```

#### 13. No using the Symbol constructor

```javascript
// ✗ avoid
var foo = new Symbol('foo');
```
```javascript
// ✓ ok
var foo = Symbol('foo');

function bar(Symbol) {
   const baz = new Symbol("baz");
}
```

#### 14. No calling global object properties as functions

```javascript
// ✗ avoid
var math = Math();
var newMath = new Math();

var json = JSON();
var newJSON = new JSON();
```
```javascript
// ✓ ok
function area(r) {
   return Math.PI * r * r;
}
var object = JSON.parse("{}");
```

#### 15. No unnecessary constructor

```javascript
// ✗ avoid
class A {
   constructor () {
   }
}
class B extends A {
   constructor (...args) {
      super(...args);
   }
}
```
```javascript
// ✓ ok
class A { }
class A {
   constructor () {
      doSomething();
   }
}
```

## RegExp

#### 1. No empty character classes in regular expressions

```javascript
const myRegex = /^abc[]/      // ✗ avoid
const myRegex = /^abc[a-z]/   // ✓ ok
```

#### 2. No invalid regular expression string in RegExp constructors

```javascript
RegExp('[a-z')    // ✗ avoid
RegExp('[a-z]')   // ✓ ok
```

#### 3. Avoid multiple spaces in regular expressions literals

```javascript
const regexp = /test   value/       // ✗ avoid

const regexp = /test {3}value/      // ✓ ok
const regexp = /test value/         // ✓ ok
```

## General

#### 1. Quotes

```javascript
console.log("hello there")    // ✗ avoid
console.log(`hello there`)    // ✗ avoid

console.log('hello there')    // ✓ ok
$("<div class='box'>")        // ✓ ok
console.log(`hello ${name}`)  // ✓ ok
```

#### 2. Use single import statement per module

```javascript
import { myFunc1 } from 'module'
import { myFunc2 } from 'module'          // ✗ avoid

import { myFunc1, myFunc2 } from 'module' // ✓ ok
```

#### 3. Renaming import export and restructured assignments to the same name is not allowed

```javascript
import { config as config } from './config'     // ✗ avoid
import { config } from './config'               // ✓ ok
```

#### 4. No unnecessary use of escape
#### 5. Use isNaN function when checking for NaN
#### 6. Avoid semicolons
