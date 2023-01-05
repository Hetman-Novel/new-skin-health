/*if (document.querySelectorAll('.fs-slider__slide').length < 2) {
   document.getElementsByClassName('fs-slider__block-wrap-arrow').remove();
}*/
const fs_slider = document.querySelector('.fs-slider')
if (fs_slider) {
   new Swiper(fs_slider, {

      // Стрелки
      navigation: {
         prevEl: '.fs-slider-button-prev',
         nextEl: '.fs-slider-button-next',
      },

      // Автовысота
      autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 1,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 30,

      loop: true,

      // Автопрокрутка
      autoplay: {
         // Пауза между прокруткой
         delay: 10000,

         // Закончить на последнем слайде
         stopOnLastSlide: false,

         // Отключить после ручного переключения
         disableOnInteraction: false,
      },

      // Скорость
      speed: 800,

      effect: 'fade',
      /*fadeEffect: {
         crossFade: true
      },*/
      parallax: true,

      // Отключить предзагрузка картинок
      preloadImages: false,

      // Lazy Loading (подгрузка картинок)
      lazy: {
         // Подгружать на старте переключения слайда
         loadOnTransitionStart: false,

         // Подгрузить предыдущую и следующую картинку
         loadPrewNext: false,
      },
      // Слежка за видимыми слайдами
      watchSlidesProgress: true,

      // Добавление класса видимым слайдам
      watchSlidesVisibility: true,
   });
}
if (fs_slider.length > 1) {
   if (document.querySelectorAll('.world-better-slider__slide').length < 3) {
      document.getElementById('world-better-wrap-arrows').remove();
   }
}
const world_better_slider = document.querySelector('.world-better__slider')
if (world_better_slider) {
   new Swiper(world_better_slider, {

      // Стрелки
      navigation: {
         prevEl: '.world-better__sw-btn-prev',
         nextEl: '.world-better__sw-btn-next',
      },

      // Автовысота
      autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 3,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      // Отступ между слайдами
      spaceBetween: 29,

      loop: true,

      // Скорость
      speed: 800,
      effect: 'slide',
      parallax: true,

      // Отключить предзагрузка картинок
      preloadImages: false,

      // Lazy Loading (подгрузка картинок)
      lazy: {
         // Подгружать на старте переключения слайда
         loadOnTransitionStart: false,

         // Подгрузить предыдущую и следующую картинку
         loadPrewNext: false,
      },
      // Слежка за видимыми слайдами
      watchSlidesProgress: true,

      // Добавление класса видимым слайдам
      watchSlidesVisibility: true,
   });
}