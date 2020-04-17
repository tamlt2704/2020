const fortunesCookies = [
    "Saepe excepturi voluptas possimus autem officia.",
    "Nesciunt alias voluptates.",
    "Tempora aut aperiam magnam rerum odit delectus id.",
    "Libero vel sed expedita molestiae.",
    "Possimus nulla recusandae omnis maiores qui error."
];

exports.getFotune = function() {
    var idx = Math.floor(Math.random() * fortunesCookies.length);
    return fortunesCookies[idx];
}
