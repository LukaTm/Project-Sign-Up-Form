const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitButton = document.querySelector('.submit-button')
const passwordDontMatch= document.querySelector('#dont-match')
const phone = document.querySelector('#phone')
const passwordBorder= document.querySelector('#password')
const confirmPasswordBorder = document.querySelector('#confirm-password')


confirmPassword.addEventListener('input',() =>{
    if (password.value === confirmPassword.value){
        passwordBorder.style.border = '2px solid rgb(96, 137, 197)';
        confirmPasswordBorder.style.border = '2px solid rgb(96, 137, 197)';       
        return passwordDontMatch.textContent = ''
    }

    else if (password.value.length > 7){
        passwordDontMatch.textContent = '*Passwords do not match';
        passwordDontMatch.style.color = 'red';
        passwordBorder.style.border = '2px solid #ff0000';
        confirmPasswordBorder.style.border = '2px solid #ff0000';
    }    
})


















