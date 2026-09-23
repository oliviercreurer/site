// Hold the .hero-reveal entrance animation until web fonts are ready,
// with a timeout so slow fonts never keep the page hidden.
// Load this in <head> so the class is set before first paint.
(function () {
    var root = document.documentElement;
    root.classList.add("reveal-pending");
    function start() {
        root.classList.remove("reveal-pending");
    }
    window.addEventListener("load", function () {
        if (document.fonts) document.fonts.ready.then(start, start);
        else start();
    });
    setTimeout(start, 3000);
})();
