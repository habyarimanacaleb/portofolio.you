// for redirecting html files

document.getElementById('service').addEventListener('click',function(event){
  event.preventDefault();

  window.location.href = './services.html'
})
document.getElementById('about').addEventListener('click',function(event){
  event.preventDefault();

  window.location.href = './about.html'
})
document.getElementById('home').addEventListener('click',function(event){
  event.preventDefault();

  window.location.href = './index.html'
})
document.getElementById('portfolio').addEventListener('click',function(event){
  event.preventDefault();

  window.location.href = './portfolio.html'
})

document.getElementById('signin').addEventListener('click',function(event){
  event.preventDefault();

  window.location.href = './signin.html'
})

//lines of codes for alidating index.html
//lines of codes for alidating index.html
//lines of codes for alidating index.html


// lines of codes for alidating sevices.html
// lines of codes for alidating sevices.html
// lines of codes for alidating sevices.html

document.getElementById('contact-us').addEventListener('submit', function(event){
event.preventDefault();

let email = document.getElementById('email').value;
let name = String(document.getElementById('username').value);
let phone = Number(document.getElementById('phone').value);
let message = document.getElementById('message').value;

// error tracking
let errorName = document.getElementById('name-err');
let errorEmail = document.getElementById('email-err');
let errorPhone = document.getElementById('phone-err');
let errorMessages = document.getElementById('msg-err');

 let valid = true;
 errorEmail.textContent = "";
 errorMessages.textContent = "";
 errorName.textContent = "";
 errorPhone.textContent = "";

 if(!email && !name){
  errorEmail.textContent = "Please enter your emai ! email is required";
   errorName.textContent = "Please enter your name";
  valid = false;
 }

 if(!phone && !message){
  errorPhone.textContent = "Please enter your active phone number";
  errorMessages.textContent = "Please enter your message here";

  valid = false;
 }

 if(valid){
  alert('Your Information Are Completely Submitted')

  // saving form data to local storage

  let formData = {
    title: name,
    content:message,
    contact:phone,
    email_Address:email
  }

  localStorage.setItem('formData',JSON.stringify(formData));

  // reset forrm data
  document.getElementById('contact-us').reset();

 }

})




