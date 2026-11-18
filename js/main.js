const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* Journey: show more / show less */
document.querySelectorAll(".timeline-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".timeline-item");
    const expanded = item.classList.toggle("expanded");
    button.textContent = expanded ? "Show less" : "Show more";
    button.setAttribute("aria-expanded", String(expanded));
  });
});

/* Journey: fade items in as they scroll into view */
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});