// //banner slider
// $('.banner_slider').owlCarousel({
//   loop: true,
//   dots: false,
//   animateOut: 'fadeOut',
//   autoplay: true,
//   smartSpeed: 500,
//   nav: true,
//   navText: [
//     '<i class="fa-solid fa-caret-left leftside"></i>',
//     '<i class="fa-solid fa-caret-right rightside"></i>',
//   ],
//   items: 1,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

// counter js start
$(function () {
  $('.counter').rCounter({
    duration: 30,
  });
});

//venubox
new VenoBox({
  selector: '.my-video-links',
});

//consulting slider
$('.consulting_slider').owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  //animateOut: 'fadeOut',
  smartSpeed: 500,
  nav: true,
  navText: [
    '<i class="fa-solid fa-chevron-left leftside"></i>',
    '<i class="fa-solid fa-chevron-right rightside"></i>',
  ],
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

//client slider
$('.client_slider').owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayHoverPause: true,
  //animateOut: 'fadeOut',
  smartSpeed: 500,
  nav: false,
  navText: [
    '<i class="fa-solid fa-chevron-left leftside"></i>',
    '<i class="fa-solid fa-chevron-right rightside"></i>',
  ],
  items: 4,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

//test slider
$('.testimonial_slider').owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  smartSpeed: 500,
  nav: true,
  navText: [
    '<i class="fa-solid fa-chevron-left leftside"></i>',
    '<i class="fa-solid fa-chevron-right rightside"></i>',
  ],
  items: 2,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});

//AOS
AOS.init();

// Bottom to scroll button
const scroll_bar = document.getElementById('fixedBtn');

// scroll করলে button show/hide
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scroll_bar.classList.add('active');
  } else {
    scroll_bar.classList.remove('active');
  }
});

// button click → smooth scroll top
scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// preloader
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');

  loader.classList.add('hide');

  setTimeout(() => {
    loader.style.display = 'none';
  }, 400);
});
