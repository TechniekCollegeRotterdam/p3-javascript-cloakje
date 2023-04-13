//variabelen input

let fullName = document.querySelector('#fullName');
 let phoneNumber = document.querySelector('#phoneNumber');
  let email = document.querySelector('#email');
   let password = document.querySelector('#phoneNumber');

    //variabelen containers
let signInContainer = document.querySelector('.sign-in-container');
 let signUpContainer = document.querySelector('.sign-up-container');
let panelInput = document.querySelector('.overlay-panel'); 

//variabelen buttons
let signUpButton = document.querySelector('#signUp');
signUpButton.addEventListener('click', function () { 
signInContainer.style.display = 'flex';
signUpContainer.style.display = 'none';
removeElements();
addData();
switchToSignIn();
});