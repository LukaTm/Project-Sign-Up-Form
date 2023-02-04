const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitButton = document.querySelector('.submit-button')
const passwordDontMatch= document.querySelector('#dont-match')



// submitButton.addEventListener('click',() =>{
//     if (password.value !== confirmPassword.value)
        
// })

confirmPassword.addEventListener('input',() =>{
    if (password.value === confirmPassword.value)
        return passwordDontMatch.textContent = ''
    else if (password.value.length > 7){
        passwordDontMatch.textContent = '*Passwords do not match'
        passwordDontMatch.style.color = 'red'
    }    
})


















