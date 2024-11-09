let intro = document.querySelector(".welcome");
let introText = document.querySelector(".welcome-text");
let introTextSpan = document.querySelectorAll(".welcomeSpan");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introTextSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    });

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3200);
  });
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#8400ff",
  "#6d00ff",
  "#5600ff",
  "#4000ff",
  "#2900ff",
  "#1400ff",
  "#0005ff",
  "#0024ff",
  "#0033ff",
  "#0048ff",
  "#0060ff",
  "#0077ff",
  "#008eff",
  "#00a5ff",
  "#00bbff",
  "#00d2ff",
  "#00e9ff",
  "#00ffd3",
  "#00ffba",
  "#00ff8c",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.35;
    y += (nextCircle.y - y) * 0.35;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Bütün linkləri və section-ları seçirik
const navLinks = document.querySelectorAll(".navTab__list-item-link");
const sections = document.querySelectorAll("section");

// Yeni Intersection Observer obyekti yaradılır
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aktiv section-ın linkini tapırıq
        const activeLink = document.querySelector(
          `.navTab__list-item-link[href="#${entry.target.id}"]`
        );

        // Bütün linklərdən .nav-active sinifini silirik
        navLinks.forEach((link) => link.classList.remove("nav-active"));

        // Görünən section-a uyğun linkə .nav-active sinifini əlavə edirik
        activeLink.classList.add("nav-active");
      }
    });
  },
  {
    threshold: 0.5, // Section yarıdan çox görünəndə aktiv olur
  }
);

// Hər bir section-u izləmək üçün observer-i əlavə edirik
sections.forEach((section) => observer.observe(section));
