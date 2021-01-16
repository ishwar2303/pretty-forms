let radioAndCheckboxInputCategory = ['gender', 'company[]'] 
let selectInputCategory = ['language', 'database'] 
let formInput = document.getElementsByClassName('form-input') 
let formSelectInput = document.getElementsByClassName('select-input')
let formInputResponse = document.getElementsByClassName('form-input-response')
let formInputResponseMessages = ['First Name required', 'E-mail required', 'Contact required', 'Address required', 'Password required', 'Confirm password required', 'Address required'] 
let formRadioInputResponse = document.getElementsByClassName('form-radio-input-response')
let formRadioAndCheckboxResponseMessages = ['Gender required', 'Companies required']
let formSelectInputResponse = document.getElementsByClassName('form-select-input-response')
let formSelectInputResponseMessages = ['Language required', 'Database required']

// validating form
function validateForm(form){
    let val
    let result = true
    let control
    for(i=0; i<formInput.length; i++){
        val = formInput[i].value.trim()
        if(val == ''){
            formInputResponse[i].className += ' valid-error'
            formInputResponse[i].style.display = 'block'
            formInputResponse[i].innerHTML = formInputResponseMessages[i]
            formInput[i].className = 'form-input input-valid-error'
            result = false
        }
        else{
            formInputResponse[i].style.display = 'none'
            formInput[i].className = 'form-input input-valid-success'
        }
    }
    for(i=0; i<radioAndCheckboxInputCategory.length; i++ ){
        let radioInputs = document.getElementsByName(radioAndCheckboxInputCategory[i])
        control = 0
        for(j=0; j<radioInputs.length; j++){
            if(radioInputs[j].checked){
                control = 1
                break;
            }
        }
        if(!control){
            formRadioInputResponse[i].className += ' valid-error'
            formRadioInputResponse[i].style.display = 'block'
            formRadioInputResponse[i].innerHTML = formRadioAndCheckboxResponseMessages[i]
            result = false
        }
        else{
            formRadioInputResponse[i].style.display = 'none'
        }
    }
    for(i=0; i<selectInputCategory.length; i++){
        let selectInputs = document.getElementsByName(selectInputCategory[i])[0]
        if(selectInputs.value == '0'){
            formSelectInputResponse[i].className += ' valid-error'
            formSelectInputResponse[i].style.display = 'block'
            formSelectInputResponse[i].innerHTML = formSelectInputResponseMessages[i]
            formSelectInput[i].className = 'select-input input-valid-error'
            result = false
        }
        else{
            formSelectInputResponse[i].style.display = 'none'
            formSelectInput[i].className = 'select-input input-valid-success'
        }
    }
    result = emailValidation()
    result = passwordValidation()
    result = checkPasswordMatch()
    let agreeCheckbox = document.getElementById('agree-checkbox')
    let agreeResponse = document.getElementById('agree-response')
    if(!agreeCheckbox.checked){
        agreeResponse.className = 'agree-response valid-error'
        agreeResponse.style.display = 'block'
        result = false
    }
    else{
        agreeResponse.style.display = 'none'
    }

    return result
}
function formSetUp(){
    let form = document.getElementById('validate-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        event.stopPropagation()
        let result = validateForm()
        if(result)
            form.submit()
    })
    let formInput = form.getElementsByClassName('form-input')
    for(i=0; i<formInput.length; i++){
        formInput[i].addEventListener('input', validateForm)
    }
    for(i=0; i<radioAndCheckboxInputCategory.length; i++ ){
        let radioInputs = document.getElementsByName(radioAndCheckboxInputCategory[i])
        control = 0
        for(j=0; j<radioInputs.length; j++){
            radioInputs[j].addEventListener('click', validateForm)
        }
    }
    for(i=0; i<selectInputCategory.length; i++){
        let selectInputs = document.getElementsByName(selectInputCategory[i])[0]
        selectInputs.addEventListener('click', validateForm)
    }
    document.getElementById('agree-checkbox').addEventListener('click', validateForm)
}
let passwordInput = document.getElementById('password')
let confPasswordInput = document.getElementById('conf-password')
function checkPasswordMatch(){
    let password = passwordInput.value
    let confPassword = confPasswordInput.value
    let matchIcon = document.getElementById('password-match-icon')
    let notMatchIcon = document.getElementById('password-not-match-icon')
    if(password.length > 0 && confPassword.length > 0){
        if(password == confPassword){
            matchIcon.style.display = 'block'
            notMatchIcon.style.display = 'none'
            passwordInput.className = 'form-input input-valid-success'
            confPasswordInput.className = 'form-input input-valid-success'
            return true
        }
        else{
            matchIcon.style.display = 'none'
            notMatchIcon.style.display = 'block'
            passwordInput.className = 'form-input input-valid-error'
            confPasswordInput.className = 'form-input input-valid-error'
            return false
        }
    }
    else return false
}
passwordInput.addEventListener('click', checkPasswordMatch)
confPasswordInput.addEventListener('click', checkPasswordMatch)

let showEyeIcon = document.getElementById('password-show-eye-icon')
let hideEyeIcon = document.getElementById('password-hide-eye-icon')
function makePasswordVisible(){
    let passwordInput = document.getElementById('password')
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text'
        showEyeIcon.style.display = 'none'
        hideEyeIcon.style.display = 'block'
    }
    else{
        passwordInput.type = 'password'
        showEyeIcon.style.display = 'block'
        hideEyeIcon.style.display = 'none'
    }
}
showEyeIcon.addEventListener('click', makePasswordVisible)
hideEyeIcon.addEventListener('click', makePasswordVisible)


// E-mail validation
function emailValidation(){
    let emailID = 'email-validate'
    let emailValidateResponseID = 'email-validate-response'
    let emailInput = document.getElementById(emailID)
    let emailValidateResponse = document.getElementById(emailValidateResponseID)
    let email = emailInput.value
    let emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(email.length > 0){
        if(email.match(emailRegExp))
        {
            emailValidateResponse.innerHTML = 'Valid E-mail'
            emailValidateResponse.style.color = 'green'
            emailValidateResponse.style.display = 'block'
            emailInput.className = 'form-input input-valid-success'
            return true
        }
        else{
            emailValidateResponse.innerHTML = 'Invalid E-mail'
            emailValidateResponse.style.color = 'red'
            emailValidateResponse.style.display = 'block'
            emailInput.className = 'form-input input-valid-error'
            return false
        }
    }
    else return false
}
function passwordValidation(){
    let passwordID = 'password'
    let passwordValidateResponseID = 'password-validate-response'
    let passwordInput = document.getElementById(passwordID)
    let passwordValidateResponse = document.getElementById(passwordValidateResponseID)
    let password = passwordInput.value
    //Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character, Maximum limit 20 characters
    let passwordRegExp = "^(?=.*[0-9])"
                            + "(?=.*[a-z])(?=.*[A-Z])"
                            + "(?=.*[@#$%^&+=])"
                            + "(?=\\S+$).{8,20}$"
    console.log('password : ' + password)
    if(password.length > 0){
        console.log('validating...')
        console.log(password.match(passwordRegExp))
        if(password.match(passwordRegExp))
        {
            console.log('success')
            passwordValidateResponse.innerHTML = 'Valid Password'
            passwordValidateResponse.style.color = 'green'
            passwordValidateResponse.style.display = 'block'
            passwordInput.className = 'form-input input-valid-success'
            return true
        }
        else{
            console.log('error 1')
            passwordValidateResponse.innerHTML = 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character <br/> Maximum limit 20 characters'
            passwordValidateResponse.style.color = 'red'
            passwordValidateResponse.style.display = 'block'
            passwordInput.className = 'form-input input-valid-error'
            return false
        }
    }
    else return false
}

