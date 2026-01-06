/* ================= LENIS ================= */
const lenis = new Lenis({ smooth: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ================= LOADER ================= */
gsap.to(".loader", {
  y: "-100%",
  duration: 1,
  delay: 1,
  ease: "power4.inOut",
});

/* ================= MENU HIDE / SHOW ================= */
let lastScroll = 0;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 120) {
    gsap.to(nav, { y: "-100%", duration: 0.35 });
  } else {
    gsap.to(nav, { y: "0%", duration: 0.35 });
  }

  lastScroll = current;
});

/* ================= SECTION COLOR SWITCH ================= */
document.querySelectorAll("[data-bg]").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 60%",
    onEnter: () => applyColors(section),
    onEnterBack: () => applyColors(section),
  });
});

function applyColors(section) {
  gsap.to(document.body, {
    backgroundColor: section.dataset.bg,
    color: section.dataset.text,
    duration: 0.7,
  });
}

/* ================= SCROLL PROGRESS ================= */
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: self => {
    gsap.to(".nav-progress", {
      width: `${self.progress * 100}%`,
      ease: "none",
    });
  },
});

/* ================= IMAGE CHOREOGRAPHY ================= */
gsap.to(".img-1", {
  y: -120,
  rotate: -8,
  scrollTrigger: {
    trigger: ".image-stage",
    scrub: true,
  },
});

gsap.to(".img-2", {
  y: -220,
  scale: 1.15,
  scrollTrigger: {
    trigger: ".image-stage",
    scrub: true,
  },
});

gsap.to(".img-3", {
  y: -160,
  rotate: 10,
  scrollTrigger: {
    trigger: ".image-stage",
    scrub: true,
  },
});

/* ================= HORIZONTAL SCROLL ================= */
gsap.to(".horizontal-track", {
  xPercent: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true,
    scrub: 1,
    end: "+=3000",
  },
});

/* ================= FOOTER REVEAL ================= */
gsap.from(".footer-title", {
  scrollTrigger: {
    trigger: ".footer-scene",
    start: "top 80%",
  },
  y: 120,
  opacity: 0,
  duration: 1.4,
});
