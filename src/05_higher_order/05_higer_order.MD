## Abstraction 

Abstraction hides the details and gives us (technical personnel) the ability
to talk about problems at a higher (or more abstract) level. 

## Higher order functions 

function that operates on other functions, either by **taking them as arguments**
or **returning them**.

higher order function allow us to abstract over _actions_, not just values. 
They in come in several forms. 

for Example: 

#### 1. Creating new functions 

``` javascript
function greatThan(n) {
   return function(n) { return m > n };
}

var greaterThan10 = greatThan(10); 
console.log(greaterThan10(11)); // true

```
#### 2. Functions changing other functions  

```  javascript

function noisy(f) {
 return function(arg){ 
   console.log(`calling with ${arg}`);
   var val = f(arg);
   console.log(`called with ${arg} - got ${val}`);
   return val;
 }
}

```
