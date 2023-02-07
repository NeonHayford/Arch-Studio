let form_name = document.getElementById('name')
let mail = document.getElementById('email')
let message = document.getElementById('message')
let error_message = document.getElementById('alert-message')
let error_email = document.getElementById('alert-email')
let error_name = document.getElementById('alert-name')

const error  = "Can't be empty"

form_name.addEventListener('change', validate)
mail.addEventListener('change', validate)
message.addEventListener('change', validate)
form_name.addEventListener('input',function (){
document.getElementById('email').classList.add('alert');
document.getElementById('message').classList.add('alert');
    });
function validate(){
    if(form_name.value === '')
        error_name.innerHTML = error
    else
        error_name.innerHTML = ''

    if(mail.value === '')
        error_email.innerHTML = error
    else
        error_email.innerHTML = ''

    if(message.value === '')
        error_message.innerHTML = error
    else
        error_message.innerHTML = ''

}

// document.getElementById('name')
    
    