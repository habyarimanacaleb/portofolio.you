const contactUs = document.getElementById("h");
const contactInform = document.getElementById("inform");
const close = document.getElementById("close");

contactUs.onclick = () => {
  contactInform.style.display = "block";
};

close.onclick = () => {
  contactInform.style.display = "none";
};

document.getElementById("back").onclick = () => {
  window.location.url = "#home";
};

// navigation menu responsiveness by toggle button

const toggleButton = document.getElementById("toggle-button");
const navLinks = document.getElementById("navigation-menu");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active-menu");
  document.getElementById("home").classList.toggle("home");
});
