
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  const icon = menuBtn.querySelector("i");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

});

// Close Menu
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});

// Hero Slider
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startSlider() {

  clearInterval(sliderInterval);

  sliderInterval = setInterval(nextSlide, 5000);

}

nextBtn.addEventListener("click", () => {
  nextSlide();
  startSlider();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  startSlider();
});

dots.forEach(dot => {

  dot.addEventListener("click", () => {

    showSlide(Number(dot.dataset.slide));
    startSlider();

  });

});

startSlider();

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {

  button.addEventListener("click", () => {

    const item = button.parentElement;
    const answer = item.querySelector(".faq-answer");

    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(faq => {

      faq.classList.remove("active");
      faq.querySelector(".faq-answer").style.maxHeight = null;

    });

    if (!isOpen) {

      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";

    }

  });

});

// Footer Year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Scroll Reveal
const revealElements = document.querySelectorAll(
  ".service-card, .feature-card, .process-card, .about-content"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {

  element.classList.add("reveal");
  observer.observe(element);

});
