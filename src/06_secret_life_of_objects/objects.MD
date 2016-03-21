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

## Overriding derived properties

Properties gets overridden if a property is added to a specific object, and the same
property with the same name exist in the **prototype**. 

this type of behaviour is also used to give standard function and array prototypes a different
*toString* method than the basic object prototype.

``` javascript
console.log(Array.prototype.toString == Object.prototype.toString); 
// => false

console.log([1,2].toString());
// => "1,2"
```

**Array toString** - results in something similar to calling *.join("")*

**Object.prototype.toString** (with an array) - produces a different string

*the function doesn't know about arrays, so it simply puts the word "object" and 
the name of the type between square brackets*

``` javascript
console.log(Object.prototype.toString.call([1,2])); 
// => [object Array] 
```
## Prototype Interference


a prototype is useful to be able to add new properties and methods to all objects based on it.
However, there are situations where it causes problems.

``` javascript
var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("Pizza", 0.069);
storePhi("Touched tree", -0.081);
```

**Iterating over the phi values in object:** 

``` javascript
Object.prototype.nonsense = "hi";
for(var name in map) {
    console.log(name);
}
// => pizza 
// => touched tree 
// => nonsense 

console.log("nonsense" in map);
// => true 

console.log("toString" in map);
// => true 
```

**NOTE:** 

*toString* did not show up in the enumeration because Javascript distinguishes between 
*enumerable* and *non-enumerable* properties.

**All properties we create by assigning to them are enumerable** while the **standard** properties
in *Object.prototype* are all nonenumerable (hence not showing up in for/in loop)


##### Defining non-enumerable properties

we can define *non-enumerable* properties by using *Object.defineProperty* function, which 
allows us to control the type of property we are creating.

``` javascript
Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});

for(var name in map) {
    console.log(name);
}
// => pizza 
// => touched tree 

console.log(map.hiddenNonsense);
```

**Now, the property is there, and will not show up in the for/in loop**

However, we still have problems with regular *in* operator claiming that 
*Object.prototype* properties exists in our object.

To get around this, we can use the Object's *hasOwnProperty* method.


``` javascript
console.log(map.hasOwnProperty("toString"));
// => false 
```

This method tells us whether or not the object *itself* has the property without
looking for the property in the **prototype**.

**Looking for properties within the object itself:**

``` javascript
for(var name in map) {
    if(map.hasOwnProperty(name)) {
        // Do something
    }
}
```
## Prototype-less Objects 

if you pass `null` as the prototype into the  *Object.create* method then you create
a fresh object with no prototype.

``` javascript
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// => false 

console.log("pizza" in map);
// => true 
```

In this case, as we have seen previously in the *for/in* loop, 
we do not need to worry about prototype properties in our object.

## Polymorphism

Some of the standard prototypes define their own version of *toString*
so they can create a string that contains more useful information than 
"[object object]".

The code is written to work with objects that have a certain interface.
(in this case, toString method)

## Getters & Setters

Javascript provides a technique that allows us to specify properties that,
from the outside, look like properties but secretly have methods associated with them.

``` javascript  
var piles = {
    elements: ["eggshell", "orange peel", "worm"], 
    get height() {
        return this.element.length;
    }, 
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }
}

console.log(pile.height);
// => 3

pile.height = 100;

// => Ignoring attempt to set height to 100
```

For object literals, the *get* and *set* notation for properties allows you to specify
a function to be run when property is read or written.

you can add such a property to an existing object, for example a prototype, using
*Object.defineProperty* function.

``` javascript
Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() { return this.text.length }
})

var cell = new TextCell("no\way");

console.log(cell.heightProp);
// => 2

cell.heightProp = 2;
console.log(cell.heightProp);
// => 2
```

a similar *set* property be used in *defineProperty* to specify setter method.
When no setter is defined, the writing to the property is ignored.

## Inheritance

Creating a cell type that is like TextCell, but rather than padding the lines on the right side,
it pads them on the left.

``` javascript
function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for(var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.height) + line);
    }
    return result;
}
```

**Note:** 

the **RTextcell.prototype** essentially is linked to the new object created which internally
is linked to the **TextCell.prototype**.

Any methods **RTextCell.prototype** has calls and is available via **TextCell.prototype**, it will
be delegated up the prototype chain. 

An RTextCell is basically a TextCell except the draw method contains a different function.

All of TextCell prototype properties are available to RTextCell. Additionally, we can override
some of the properties by adding them to our new prototype.

## Instanceof operator

Javascript provides an operator to check the derivation from a specific *constructor*.

The binary operator is called : **instanceof**

``` javascript

console.log(new RTextCell("A") instaceof RTextCell);
// true

console.log(new RTextCell("A") instaceof TextCell);
// true

console.log(new TextCell("A") instaceof RTextCell);
// false 

console.log([1] instaceof Array);
// true 
```

#### In-depth explanation of Mountain dataTable example 

**Method: dataTable(data)**
in this method, we are converting array of object data into **data** to be used
by our created functions.

*Headers*: the headers data are (as the name suggests, headers of the data table),
which gets all the "name" property from the `mountain objects`.

``` JSON
headers: [
    {
        "inner": {
            "text": [
                "name"

            ]
        }
    },
    {
        "inner": {
            "text": [
                "height"

            ]
        }
    },
    {
        "inner": {
            "text": [
                "country"
            ]
        }
    }
]
```
