const nav = document.querySelector(".nav");
const btn = document.querySelector(".menu-btn");
const links = document.querySelectorAll(".menu-link");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // remove #: #new -> new
    const targetSection = document.getElementById(targetId);

    nav.classList.remove("menu-open");

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
