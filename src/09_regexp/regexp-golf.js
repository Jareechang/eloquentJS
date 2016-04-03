// seeking cat and car

verify(/ca(r|t)/,["my car", "bad cats"],["camper", "high art"]);

function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    yes.forEach(function(s) {
        if (!regexp.test(s))
            console.log("Failure to match '" + s + "'");
    });
    no.forEach(function(s) {
        if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'");
    });
}
