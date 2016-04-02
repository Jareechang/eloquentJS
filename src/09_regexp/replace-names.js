/**
 *  Javacsript allows for parenthesized groups ($1 ... $9)
 *  up to `$9`
 *
 *      Whole match can be referred to by `$&`
 * */
console.log(
    "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w]+),\s([\w]+)/g, "$2 $1")
)
