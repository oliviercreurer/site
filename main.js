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
