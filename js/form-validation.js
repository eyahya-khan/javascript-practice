
let formSignUp = document.getElementById('form-sign-up');
formSignUp = document.addEventListener('submit', function(event){

event.preventDefault();

let firstName = document.getElementById('firstname');
let password = document.getElementById('password');
    
let errorMessage = document.getElementById('error-message');
let error = ''
  
    
if ( firstName.value === '') {
    error = 'name can not be empty.';
   }
if ( password.value === '') {
    error += 'password can not be empty.';
   }
    
    
} )