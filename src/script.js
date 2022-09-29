// function validation(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var message = document.getElementById("message").value;
//     var error_message = document.getElementById("error_message");
//     error_message.style.padding = "10px";
    
//     var text;
//     if(name.length < 5){
//       text = "Please Enter valid Name";
//       error_message.innerHTML = text;
//       return false;
//     }
// }


function validateName() {
  var name = document.getElementById("name").value;
  if(name.length < 5) {
    document.querySelector('.nameFError').textContent = 'Name is too short'
    document.querySelector('.nameFError').classList.add('text-danger')
    return false;
    
  }
  else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    document.querySelector('.nameFError').textContent = 'Name must have space between';
    document.querySelector('.nameFError').classList.add('text-danger')

    return false;
    
  }
  else {
    document.querySelector('.nameFError').textContent = 'Valid'
    document.querySelector('.nameFError').classList.remove('text-danger')
    document.querySelector('.nameFError').classList.add('text-success')

    
  }
  return true
}

function validateEmail () {
  
  var email = document.getElementById("email").value;
  if(email.length == 0) {
    document.querySelector('.emailError').textContent = 'Email Invalid'
    document.querySelector('.emailError').classList.add('text-danger')

    return false;
  }
  
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.querySelector('.emailError').textContent = 'Email Is Not Valid'
    document.querySelector('.emailError').classList.add('text-danger')

    return false;
  }
  else {
      document.querySelector('.emailError').textContent = 'Valid'
    document.querySelector('.emailError').classList.remove('text-danger')
    document.querySelector('.emailError').classList.add('text-success')


      
    }
    
    
    return true;
    
  }
  
  
  function validatePhone() {
    
    var phone = document.getElementById("phone").value;
    if(phone.length <= 8 ) {
  document.querySelector('.phoneError').textContent='InCorrect Phone Number'
  document.querySelector('.phoneError').classList.add('text-danger')

  return false;
}
if(!phone.match(/^[0-9]{0,10}$/)) {
  document.querySelector('.phoneError').textContent='InCorrect Phone Number'
  document.querySelector('.phoneError').classList.add('text-danger')

  return false;
} 
else {
  document.querySelector('.phoneError').textContent='Valid'
  document.querySelector('.phoneError').classList.remove('text-danger')
  document.querySelector('.phoneError').classList.add('text-success')

}

return true;

}



function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 20;
  var left = required - message.length;
  
  if (left > 0) {
    document.querySelector('.messageError').textContent = `${left} more characters required`
  document.querySelector('.messageError').classList.add('text-danger')

    return false;
  }
  else {
    document.querySelector('.messageError').textContent = `Valid`
  document.querySelector('.messageError').classList.remove('text-danger')
  document.querySelector('.messageError').classList.add('text-success')

    
  }
  return true;
  
}




