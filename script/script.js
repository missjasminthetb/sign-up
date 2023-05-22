const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
  event.preventDefault()

  const name = form.querySelector('#fullname')
  if(name.value === ''){
    name.classList.add('input-error')
name.classList.remove('input-success')

    console.log('can not submit empty')
  } else{
    console.log(name.value)
name.classList.remove('input-error')
name.classList.add('input-success')

  }
  const mail = form.querySelector("#email")
  if(mail.value === ''){
    mail.classList.add('input-error')
    mail.classList.remove('input-success')

    console.log('can not submit empty')

  } else{
    console.log(mail.value)
  
mail.classList.remove('input-error')
mail.classList.add('input-success')
  
  }
  const number = form.querySelector("#phoneNumber")
  if(number.value === ''){
    number.classList.add('input-error')
    number.classList.remove('input-success')

    console.log('can not submit empty')
    
  } else{
    console.log(number.value)
  
number.classList.remove('input-error')
number.classList.add('input-success')
  
  }
  const password = form.querySelector("#password")
  if(password.value === ''){
    password.classList.add('input-error')
    password.classList.remove('input-success')

    console.log('can not submit empty')
    
  } else{
    console.log(password.value)
  
password.classList.remove('input-error')
password.classList.add('input-success')
  
  }
  const passwordb = form.querySelector("#password2")
  if(passwordb.value === ''){
    passwordb.classList.add('input-error')
    passwordb.classList.remove('input-success')

    console.log('can not submit empty')
    
  } else{
    console.log(passwordb.value)
  
passwordb.classList.remove('input-error')
passwordb.classList.add('input-success')
  
  }
})