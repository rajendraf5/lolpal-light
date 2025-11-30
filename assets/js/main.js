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

 /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  // function aosInit() {
  //   AOS.init({
  //     duration: 600,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   });
  // }
  // window.addEventListener('load', aosInit);

// DOMContentLoaded  end

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  // var currentScrollPos = window.pageYOffset;
  //    if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("headerfixed").style.top = "0";
  //     document.getElementById("navsticky").style.top = "75px";
  //   } 
  //   else {
  //     document.getElementById("headerfixed").style.top = "-92px";
  //     //document.getElementById("navsticky").style.top = "0";
  //   }
    
  //   prevScrollpos = currentScrollPos;
  // };

// var lastScrollTop = 0;
// $(window).scroll(function(){
//   var st = $(this).scrollTop();
//   var banner = $('#headerfixed');
//   var navsticky = $('#navsticky');
//   setTimeout(function(){
//     if (st > lastScrollTop){
//       banner.addClass('headerhide');
//       navsticky.removeClass('tabshide2');
//     } else {
//       banner.removeClass('headerhide');
//       navsticky.addClass('tabshide2');
//     }
//     lastScrollTop = st;
//   }, 100);
// });


   // window.onload = function () {
   //    lax.setup();
   //    const e = () => {
   //      lax.update(window.scrollY), window.requestAnimationFrame(e)
   //    };
   //    window.requestAnimationFrame(e)
   //  };
$(".navbar-toggler").on('click', function() {
 $("#headerfixed").removeAttr("style");
});

  /**
   * humbagger menu Animation
   */
 // document.querySelector('.first-button').addEventListener('click', function() {
 //    document.querySelector('.animated-icon1').classList.toggle('open');
 //  });
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
