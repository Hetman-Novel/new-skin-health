const about_milestones_slider = document.querySelector('.for-patients-skin-conditions-slider')
if (about_milestones_slider) {
   new Swiper(about_milestones_slider, {

      // Стрелки
      navigation: {
         prevEl: '.for-patients-skin-conditions__sw-btn-prev',
         nextEl: '.for-patients-skin-conditions__sw-btn-next',
      },
      // Навигация
      // Буллеты, текущее положение, прогрессбар
      pagination: {
         el: '.for-patients-skin-conditions__swiper-pagination',
         clickable: true,
      },

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 2,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 30,

      loop: true,

      // Скорость
      speed: 800,
      effect: 'slide',

      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         601: {
            slidesPerView: 2,
         },
         1440: {
            slidesPerView: 2.1,
         }
      },
   });
}

const for_patients_weekly_basis_slider = document.querySelector('.for-patients-weekly-basis-slider')
if (for_patients_weekly_basis_slider) {
   new Swiper(for_patients_weekly_basis_slider, {

      // Стрелки
      navigation: {
         prevEl: '.for-patients-weekly-basis__sw-btn-prev',
         nextEl: '.for-patients-weekly-basis__sw-btn-next',
      },

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 1,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 30,

      loop: true,

      // Скорость
      speed: 800,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
   });
}