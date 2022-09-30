'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

  /**
   * Initiate glightbox
   */
   const glightbox = GLightbox({
    selector: '.glightbox'
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

    document.getElementById("c_days").innerHTML = days
    document.getElementById("c_hours").innerHTML = hours 
    document.getElementById("c_minutes").innerHTML = minutes 
    document.getElementById("c_seconds").innerHTML = seconds

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