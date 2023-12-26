const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

const signUpSwitch = document.querySelector('.js-sign-up-switch');
const loginSwitch = document.querySelector('.js-login-switch');

const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

//For switching forms in smaller screen


// *I think I solved
loginSwitch.addEventListener('click', () => {
    signUp.style.zIndex = '7';
    signIn.style.zIndex = '6';
})

signUpSwitch.addEventListener('click', () => {
    signUp.style.zIndex = '6';
    signIn.style.zIndex = '7';
})

window.addEventListener('resize', () => {
    if (window.screen.width >= 670) {
        //Back to its main position for bigger screens
        signUp.style.transform = 'translateX(100%)';
        console.log("Greater");
    }
    else {
        //Both in same position but had different z-index
        signIn.style.transform = 'translateX(0%)';
        signUp.style.transform = 'translateX(0%)';
        console.log("Less");
    }
});

