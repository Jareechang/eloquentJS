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

    whiteRabbit.speak("hello world!"); // => The white rabit says 'hello world!'
    fatRabbit.speak("good morning!"); // => The fat rabit says 'good morning!'
```



