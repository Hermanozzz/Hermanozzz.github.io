const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const phonenumber_input = document.getElementById('phonenumber-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []

  if(firstname_input){
    errors = getSignupFormErrors(firstname_input.value, phonenumber-input.value, password_input.value, repeat_password_input.value)
  }
  else{
    errors = getLoginFormErrors(phonenumber_input.value, password_input.value)
  }

  if(errors.length > 0){
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }
})

function getSignupFormErrors(firstname, phonenumber, password, repeatPassword){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(phonenumber === '' || phonenumber == null){
    errors.push('Phone number is required')
    phonenumber_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }


  return errors;
}
