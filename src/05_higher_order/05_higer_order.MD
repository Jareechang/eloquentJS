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

noisy(Boolean)(0); 
// calling with 0
// calling with 0 - got false

```

#### 3. Function that provide new type control flow 

``` javascript
function unless(test, then){
    if(!test) then();
}

function repeat(times, body){
    for(var i = 0; i < times; i++) body(i);
}

repeat(3, function(n){
    unless(n % 2, function(){
        console.log(`${n} is even`);
    })
});

// 0 is even
// 2 is even
```
