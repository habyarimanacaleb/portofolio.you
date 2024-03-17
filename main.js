const contactUs = document.getElementById("h");
const contactInform = document.getElementById("inform");
const close = document.getElementById("close");
const toggleButton = document.getElementById("toggle-button");
const navLink = document.getElementById("navigation-menu");
const closeBtn = document.getElementById("close-btn");

contactUs.onclick = () => {
  contactInform.style.display = "block";
};

close.onclick = () => {
  contactInform.style.display = "none";
};
closeBtn.onclick = () => {
  navLink.style.display = "none";
};


document.getElementById("back").onclick = () => {
    window.location.href = '/index.html';
};

// navigation menu responsiveness by toggle button

// toggleButton.addEventListener("click", () => {
//   navLinks.classList.toggle("active-menu");
//   document.getElementById("home").classList.toggle("home");
// });

toggleButton.addEventListener('click',toggleNav);
function toggleNav() {
  if (navLink.style.display === 'block') {
    navLink.style.display = 'none';
  } else {
    navLink.style.display = 'block';
  }
}
