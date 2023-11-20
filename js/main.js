// ========== service slider ==========//
$('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    prevArrow: '<i class="fa-solid fa-arrow-left previous"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
  });
  //========== counter ===========//
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ========== feedBack slider =========//
$('.feedBack-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots:true,
  prevArrow: '<i class="fa-solid fa-arrow-left previous"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
});
// ========== Navbar ========== //
let main_menu = document.querySelector('.main-menu');
window.addEventListener('scroll', ()=>{
  let scroll_amount = window.scrollY;
  if(scroll_amount > 400){
    main_menu.classList.add('fixed-menu');
  }
  else{
    main_menu.classList.remove('fixed-menu');
  }
})
// ========== Top Button ========== //
var btn = $('#top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
