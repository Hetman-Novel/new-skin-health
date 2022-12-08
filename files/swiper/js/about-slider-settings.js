const about_milestones_slider = document.querySelector('.about-milestones__slider')
if (about_milestones_slider) {
   new Swiper(about_milestones_slider, {

      // Стрелки
      navigation: {
         prevEl: '.about-milestones__sw-btn-prev',
         nextEl: '.about-milestones__sw-btn-next',
      },

      //invert: true,

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 4,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 50,

      //loop: true,

      // Скорость
      speed: 800,
      effect: 'slide',

      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         360: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 3,
         },
         1024: {
            slidesPerView: 4,
         }
      },
   });
}