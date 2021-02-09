const toggle = document.querySelector(".toggle-button");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark_theme")) body.classList = "light_theme";
  else body.classList = "dark_theme";
});
