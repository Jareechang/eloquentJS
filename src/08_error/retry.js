function MultiplicatorUnitFailure() {
}

// Link Error prototype
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicationError";

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
        return  primitiveMultiply(a, b);
    }catch(e) {
        if(e instanceof MultiplicatorUnitFailure) 
            return primitiveMultiply(a, b);
        else 
            throw e;
    }
}

console.log(reliableMultiply(8, 8));
