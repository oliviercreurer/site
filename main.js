let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

var slider_img = document.querySelector(".slider-img");

let imgCollection = [
  "gallery01-pont.png",
  "gallery04-con1.png",
    "gallery05-con2.png",
  "gallery02-night.png",
  "gallery03-lodgers.png",
  "gallery06-foldout.png",
];

var i = 0;

function prev() {
  if (i <= 0) i = imgCollection.length;
  i--;
  return setImg();
}

function next() {
  if (i >= imgCollection.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + imgCollection[i]);
}

// --- Theme toggle ---
// Works with CSS light-dark() via color-scheme on <html>
const themeToggle = document.querySelector(".theme-toggle");

function getPreferredTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme, { persist = false } = {}) {
  document.documentElement.style.colorScheme = theme;
  document.documentElement.dataset.theme = theme;
  if (persist) localStorage.setItem("theme", theme);
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

function toggleTheme() {
  const next = getPreferredTheme() === "dark" ? "light" : "dark";
  applyTheme(next, { persist: true });
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

