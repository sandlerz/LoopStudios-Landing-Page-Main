const toggle = document.getElementById("menu_checkbox");
const menu = document.getElementById("nav-dom");

toggle.addEventListener("click", () => {
  if (toggle.checked === true) {
    menu.style.transform = "translateX(0)";
  } else {
    menu.style.transform = "translateX(100vw)";
  }
});
