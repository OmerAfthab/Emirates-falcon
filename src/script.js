
function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
$('#customers-teams').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 4500,
              checkVisibility: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});
 /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

/**
 * navbar variables
 */



// const navOpenBtn = document.querySelector("[data-menu-open-btn]");
// const navCloseBtn = document.querySelector("[data-menu-close-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const overlay = document.querySelector("[data-overlay]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// for (let i = 0; i < navElemArr.length; i++) {

//   navElemArr[i].addEventListener("click", function () {

//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//     document.body.classList.toggle("active");

//   });

// }





// const header = document.querySelector("[data-header]");

// window.addEventListener("scroll", function () {

//   window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

// });



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

 


//coming soon js

var CountDownDate = new Date("Mar 15, 2023 12:00:00").getTime();

var countdownfunction = setInterval(function() {

    var TimeNow = new Date().getTime();
    var distance = CountDownDate - TimeNow;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("c_days").textContent= days;
    document.getElementById("c_hours").textContent= hours ;
    document.getElementById("c_minutes").textContent= minutes ;
    document.getElementById("c_seconds").textContent= seconds;

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_days").innerHTML = "0 <br> Days";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_hours").innerHTML = "0 <br> Hours";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_minutes").innerHTML = "0 <br> Minutes";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_seconds").innerHTML = "0 <br> Seconds";
    }

}, 1000);

// google select language 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: "en,ar,ur", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}


//validation contact us page

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

function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
$('#customers-teams').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 4500,
              checkVisibility: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});
