 (function() {

  "use strict";


  class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 300) {
    jQuery('.headerfixed').addClass('is-sticky');
  } else {
    jQuery('.headerfixed').removeClass('is-sticky');
  }
});

$(document).ready(function() {
    $(".searchbar > .bi-search").click(function (e) {
        e.stopPropagation();
        $(".togglesearch").toggle();
        $("input[type='text']").focus();
    });

    $(".togglesearch").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".togglesearch").hide();
    });
  });

// Mobile Navigation

  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

})();

    // All your theme buttons
const buttons = [
  "lightBtn",
  "darkBtn",
  "greenBtn",
  "yellowBtn",
  "blueBtn",
  "orangeBtn"
];

// Add click events
buttons.forEach(id => {
  document.getElementById(id).onclick = () => {

    // CHANGE THE THEME
    if (id === "lightBtn")  document.documentElement.setAttribute("data-bs-theme", "light");
    if (id === "darkBtn")   document.documentElement.setAttribute("data-bs-theme", "dark");
    if (id === "greenBtn")  document.documentElement.setAttribute("data-bs-theme", "green");
    if (id === "yellowBtn") document.documentElement.setAttribute("data-bs-theme", "yellow");
    if (id === "blueBtn")   document.documentElement.setAttribute("data-bs-theme", "blue");
    if (id === "orangeBtn") document.documentElement.setAttribute("data-bs-theme", "orange");

    // REMOVE active from all buttons
    buttons.forEach(btnId => {
      document.getElementById(btnId).classList.remove("active2");
    });

    // ADD active to clicked button
    document.getElementById(id).classList.add("active2");
  };
});
