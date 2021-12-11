const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var password = document.getElementById('fakePassword');  
    var toggler = document.getElementById('toggler');  
    showHidePassword = () => {  
     if (password.type == 'password') {  
      password.setAttribute('type', 'text');  
      toggler.classList.remove('fa-eye-slash');  
     } else {  
      toggler.classList.add('fa-eye-slash');  
      password.setAttribute('type', 'password');  
     }  
    };  
    toggler.addEventListener('click', showHidePassword);
