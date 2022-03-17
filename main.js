// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let newBtn = document.querySelector("#new-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

newBtn.addEventListener("click", () => {
  alert("Thank you 😊. Your Message has been submitted!");
});

// Dark Mode
let darkmode = document.querySelector("#darkmode");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  document.body.classList.add("active");
}

darkmode.addEventListener("click", () => {
  document.body.classList.toggle("active");

  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");

    // document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");

    // document.body.classList.remove("active");
  }

  if (document.body.classList.contains("active")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
