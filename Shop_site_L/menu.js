
const dropdownButton = document.querySelector(".dropdown-button img");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Закрываем раскрывающееся меню, если пользователь щелкнет за его пределами.
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-button img")) {
    dropdownMenu.classList.remove("show");
  }
});
