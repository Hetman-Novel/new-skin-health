const about_milestones_slider = document.querySelector('.about-milestones__slider')
if (about_milestones_slider) {
   new Swiper(about_milestones_slider, {

      // Стрелки
      navigation: {
         prevEl: '.about-milestones__prev',
         nextEl: '.about-milestones__next',
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
            slidesPerView: 1.6,
         },
         360: {
            slidesPerView: 1.8,
         },
         768: {
            slidesPerView: 2.8,
         },
         1024: {
            slidesPerView: 3.6,
         },
         1200: {
            slidesPerView: 4,
         }
      },
   });
}