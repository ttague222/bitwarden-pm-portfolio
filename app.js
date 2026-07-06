const slides = [
  {
    title: "The thesis",
    body: "Bitwarden's advantage has always been showing its work. The opportunity now is to make security guidance as auditable as the code."
  },
  {
    title: "Why this matters now",
    body: "Vault Health guidance is already part of Enhanced Premium value, which creates a January 2027 renewal accountability moment."
  },
  {
    title: "The public signal",
    body: "The strongest community reactions are about trust: regressions, warning logic, redesign backlash, and governance expectations."
  },
  {
    title: "The role fit",
    body: "Mobile is where users feel daily value. PLG is how that value becomes activation, retention, upgrade intent, and renewal confidence."
  },
  {
    title: "The personas",
    body: "Four evidence-derived personas anchor the program: the Switcher, the Daily Retriever, the Community Auditor, and the Household Steward. One guidance surface, four correct behaviors."
  },
  {
    title: "The recommendation",
    body: "Own Vault Health Value Realization: repair the surface, publish the rules, measure Premium value, then extend coaching."
  },
  {
    title: "The PLG posture",
    body: "Experiment with value summaries, setup recovery, and earned previews only when they create real security progress and respect user agency."
  },
  {
    title: "The community move",
    body: "Use Bitwarden's open-source advantage by validating PLG concepts through community feedback before committing to one mechanic."
  },
  {
    title: "The working method",
    body: "This is the PM loop I would bring: state the assumption, find the evidence that could change it, and treat that change as progress."
  }
];

let currentSlide = 0;

const kicker = document.getElementById("slide-kicker");
const title = document.getElementById("slide-title");
const body = document.getElementById("slide-body");
const prev = document.getElementById("prev-slide");
const next = document.getElementById("next-slide");
const dots = document.getElementById("slide-dots");

function renderDots() {
  dots.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `slide-dot${index === currentSlide ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    if (index === currentSlide) {
      dot.setAttribute("aria-current", "true");
    }
    dot.addEventListener("click", () => {
      currentSlide = index;
      renderSlide();
    });
    dots.appendChild(dot);
  });
}

function renderSlide() {
  const slide = slides[currentSlide];
  kicker.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
  title.textContent = slide.title;
  body.textContent = slide.body;
  renderDots();
}

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  renderSlide();
});

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prev.click();
  }
  if (event.key === "ArrowRight") {
    next.click();
  }
});

renderSlide();
