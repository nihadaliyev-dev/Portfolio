let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("lightmode");
  localStorage.removeItem("lightmode", null);
};

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("lightmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

if (lightmode === "active") {
  enableDarkmode();
}
