# Objects

eloquent JS chapter on *'secret life of objects'*

## History

One philosphy is that complexity can be manged by separating programs
into small compartments that were isolated from each other.

These compartments were call _objects_.

complexity is hidden within these objects which offers methods that present an 
interface through which the object is used.

*Note:* _the interface is simple and all the complexiity within the object can
ignored when working with the object_

*Term*:
* *Encapulsation* - distinguishing between external interface and internal complexity 


## Methods

Methods are properties that hold function values.

``` javascript
    var rabbit = {};
    rabbit.speak = function(line) {
        console.log(`The rabbit says '${line}'`);
    }

    rabbit.speak("I'm alive"); // => The rabit says 'I'm alive' 

```

When a function is called as a method - Looked up as property and immediatly called,
as in `object.method()` - The special variable `this` will point to the object it was
called on.

``` javascript
    function speak(line) {
        console.log(`The ${this.type} rabit says '${line}'`);
    }

    var whiteRabbit = { type: "white",  speak: speak};
    var fatRabbit = { type: "fat", speak: speak };

    whiteRabbit.speak("hello world!"); 
    // => The white rabit says 'hello world!'

    fatRabbit.speak("good morning!"); 
    // => The fat rabit says 'good morning!'
```

##### Apply, Call 

`apply` and `call` both take `this` keyword as the first arugment that can be used to 
simulate method calls

``` javascript
  speak.apply(whiteRabbit, "hello world!");
  // => The white rabit says 'hello world!'

  speak.apply({ type: "old" }, "good morning!");
  // => The fat rabit says 'good morning!'
```

## Prototypes

prototype is another object that is used as fallback soruce of properties.

When an object gets request for an property that it does not have, its prototype is searched
then the prototype's prototype... so on etc. 

##### prototype of empty objects 

``` javascript
  console.log(Object.getPrototypeOf({}) == Object.prototype);
  // => true

  console.log(Object.getPrototypeOf({}.prototype));
  // => null
```

prototype relation of Javascript objects forms a tree-shaped structure, and its root
of this structure sits Object.prototype.

##### The prototype object 

the prototype object provides a few methods that show up in all objects, such as "toString"

Many object do not **directly** have *Object.prototype* but instead have another object which
provides the default properties.


##### Function and Array prototypes

Functions derive *Function.prototype* and array derive properties from *Array.prototype*

``` javascript
  console.log(Object.getPrototypeOf(isNan) == Function.prototype );
  // => true  

  console.log(Object.getPrototypeOf([]) == Array.prototype);
  // => true
```

## Constructors

In Javascript, called an object with new on it, causes it to be treated as a
constructor. The constructor will have the `this` keyword bound to the fresh
object.

Constructors automatically get a property named **protoype**, which by default
holds a plain, empty object that derives from *Object.prototype*.

**Note:** 

it’s important to note the distinction between the way a prototype is associated
with a constructor (*through its prototype property*) and the way objects have 
a prototype (*retreived via Object.getPrototypeOf*).

The prototype of a constructor is *Function.prototype* as constructors are functions.
its prototype property will be prototype of instances created through it but not its own
prototype.
