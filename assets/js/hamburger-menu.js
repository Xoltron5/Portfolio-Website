const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("offScreenMenu");
  const hamMenu = document.querySelector(".ham-menu");
  const menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      menu.classList.remove("active");
      hamMenu.classList.remove("active");
    });
  });
});
