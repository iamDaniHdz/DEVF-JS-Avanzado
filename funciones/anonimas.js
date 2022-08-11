// funciones anonimas autoejecutables/IIFE()
(function () {
    return console.log("Anonymous, bruh");
})();

(() => {
    return console.log("Anonymous, bruh... pero en arrow");
})();

// TRANSFORMARLA A UNA IIFE
(function (a, b) {
    console.log(a + b)
})(25,27);

((a, b) => console.log(a + b)) (5,89);