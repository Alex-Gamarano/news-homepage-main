let menu = document.querySelectorAll(".menu");
let nav = document.querySelector(".nav-btns");

menu.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
});
