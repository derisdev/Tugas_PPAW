const slickSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3 } },


  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2 } },


  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1 } }] };





// Normalize the card height.
// const handleResize = () => {
//   const carouselHeight = $('.js-slick-carousel').css('height')
//   $('.card').css('height', carouselHeight);
// }

// Initialization
// const handleSlickInit = () => {
//   console.log('slick init fired');
//   handleResize();
// }

// $('.js-slick-carousel').on('init', handleSlickInit);
$('.js-slick-carousel').slick(slickSettings);

// reinitialization
$('.js-slick-carousel').on('reInit', () => console.log('slick re-init fired'));

$(window).resize(handleResize);