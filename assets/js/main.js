let intro = document.querySelector(".welcome");
let introTextSpan = document.querySelectorAll(".welcomeSpan");
let body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introTextSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
        body.style.overflow = "hidden";
      }, (index + 1) * 400);
    });

    setTimeout(() => {
      introTextSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, index * 50);
      });
    }, introTextSpan.length * 400 + 800);

    setTimeout(() => {
      intro.style.top = "-150vh";
      body.style.overflow = "auto";
    }, introTextSpan.length * 400 + 1600);
  }, 100);
});

const backtotopBtn = document.getElementById("footer__backtotop");
backtotopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
let colors = [];
if (localStorage.getItem("lightmode") === "active") {
  colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];
} else {
  colors = [
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
}

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

const navLinks = document.querySelectorAll(".navTab__list-item-link");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aktiv section-ın linkini tapırıq
        const activeLink = document.querySelector(
          `.navTab__list-item-link[href="#${entry.target.id}"]`
        );

        navLinks.forEach((link) => link.classList.remove("nav-active"));

        activeLink.classList.add("nav-active");
      }
    });
  },
  {
    threshold: 0.45,
  }
);

sections.forEach((section) => observer.observe(section));

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  timelineItems.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".skills");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  timelineItems.forEach((item) => observer.observe(item));
});

window.addEventListener("scroll", function () {
  const fixedElement = document.querySelector(".navTab");
  const footer = document.querySelector("footer");
  const rect = footer.getBoundingClientRect();

  if (rect.top <= window.innerHeight - 300) {
    fixedElement.style.bottom = `${rect.height - 30}px`;
  } else if (rect.top <= this.window.innerHeight - 200) {
    fixedElement.style.bottom = `${rect.height - 130}px`;
  } else if (rect.top <= this.window.innerHeight - 100) {
    fixedElement.style.bottom = `${rect.height - 270}px`;
  } else if (rect.top <= this.window.innerHeight) {
    fixedElement.style.bottom = `${rect.height - 350}px`;
  } else {
    fixedElement.style.bottom = "24px";
  }
});
