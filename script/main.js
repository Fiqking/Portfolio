const navbar = document.querySelector(".navbar");
document.querySelector(".menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};
const x = document.querySelector(".close-bar");
if (x) {
  x.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
const link = document.querySelectorAll(".link");
const linkAction = () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.remove("active");
};
link.forEach((n) => n.addEventListener("click", linkAction));
const menu = document.querySelector(".menu-bar");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
