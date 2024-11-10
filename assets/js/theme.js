let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchMobile = document.getElementById("theme-switch-mobile");
let meImg2 = document.getElementById("meImg2");
const enableDarkmode = () => {
  document.body.classList.add("lightmode");
  meImg2.src = "./assets/images/me_red.jpeg";
  localStorage.setItem("lightmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("lightmode");
  meImg2.src = "./assets/images/me.png";
  localStorage.removeItem("lightmode", null);
};

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("lightmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

themeSwitchMobile.addEventListener("click", () => {
  darkmode = localStorage.getItem("lightmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

if (lightmode === "active") {
  enableDarkmode();
}
