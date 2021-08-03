const humb = document.querySelector(".humbsvg");
const headerlinks = document.querySelector("header ul");
const overlay = document.querySelector(".overlay");

humb.addEventListener("click", () => {
  headerlinks.classList.toggle("show");
  overlay.classList.toggle("show");
});
