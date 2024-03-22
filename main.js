const contactUs = document.getElementById("h");
const contactInform = document.getElementById("inform");
const closebtn = document.getElementById("close");
const toggleButton = document.getElementById("toggle-button");
const navLink = document.getElementById("navigation-menu");
const closeButon = document.getElementById("close-btn");

// sign up variable

const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signupTitlte = document.getElementById('signup-title');
const namefield = document.getElementById('nameField');

contactUs.onclick = () => {
  contactInform.style.display = "block";
};

closebtn.onclick = () => {
  contactInform.style.display = "none";
};
closeButon.onclick = () => {
 
  navLink.style.display = "none";
}


document.getElementById("back").onclick = () => {
    window.location.href = '/index.html';
};

// navigation menu responsiveness by toggle button

// toggleButton.addEventListener("click", () => {
//   navLinks.classList.toggle("active-menu");
//   document.getElementById("home").classList.toggle("home");
// });

toggleButton.addEventListener('click',function(){
  if (navLink.style.display === 'flex')
   {
    navLink.style.display = 'none';

  }
  else {
    navLink.style.display = 'block';
    navLink.classList.toggle("active-menu");
  }
}
);
// sign up men
  signinBtn.onclick = (e)=>{
    e.preventDefault();

    signinBtn.style.display = 'block';
    signupTitlte.innerHTML = 'sign in';
    namefield.style.display = 'none'; 
     
  }
  signupBtn.onclick = (e)=>{
    e.preventDefault();

    signinBtn.style.display = 'block';
    signupTitlte.innerHTML = 'sign up';
    namefield.style.display = 'flex'; 
     
  }



