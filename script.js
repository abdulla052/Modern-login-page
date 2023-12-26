const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

const signUpSwitch = document.querySelector('.js-sign-up-switch');
const loginSwitch = document.querySelector('.js-login-switch');


registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

//For switching forms in smaller screen

loginSwitch.addEventListener('click', () => {
    const signUp = document.querySelector('.sign-up');
    signUp.style.zIndex = '6';
})

signUpSwitch.addEventListener('click', () => {
    const signUp = document.querySelector('.sign-up');
    signUp.style.zIndex = '1';
})