var str = "the cia and fbi";

console.log(str.replace(/\b(fbi|cia)\b/g, function(str){
    return str.toUpperCase();
}))

var stock = "1 lemon, 2 cabagges, and 101 eggs";

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if(amount === 1) // Remove s if only 1
        unit.slice(0, unit.length - 1);
    else if(amount == 0)
        amount = "no";

    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/, minusOne));
