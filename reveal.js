// Hold the .hero-reveal entrance animation until web fonts are ready,
// with a timeout so slow fonts never keep the page hidden.
// Load this in <head> so the class is set before first paint.
//
// Once the entrance starts, each .diagram gets .is-visible the first
// time it scrolls into view, which plays its animation.
(function () {
    var root = document.documentElement;
    var started = false;
    root.classList.add("js", "reveal-pending");

    function start() {
        if (started) return;
        started = true;
        root.classList.remove("reveal-pending");
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", watchDiagrams);
        } else {
            watchDiagrams();
        }
    }

    function watchDiagrams() {
        var diagrams = document.querySelectorAll(".diagram");
        if (!("IntersectionObserver" in window)) {
            diagrams.forEach(function (diagram) {
                diagram.classList.add("is-visible");
            });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.4 });
        diagrams.forEach(function (diagram) {
            observer.observe(diagram);
        });
    }

    window.addEventListener("load", function () {
        if (document.fonts) document.fonts.ready.then(start, start);
        else start();
    });
    setTimeout(start, 3000);
})();
