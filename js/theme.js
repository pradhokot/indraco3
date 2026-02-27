document.addEventListener('DOMContentLoaded', function () {
   const html = document.documentElement;
   const toggles = document.querySelectorAll('.theme-toggle');

   /* =========================
      THEME CORE
   ========================== */

   function detectThemeOnce() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
         ? 'dark'
         : 'light';
   }

   function getTheme() {
      return localStorage.getItem('theme') || detectThemeOnce();
   }

   function setTheme(theme, save = false) {
      html.setAttribute('data-bs-theme', theme);
      if (save) localStorage.setItem('theme', theme);
      updateThemeImages(theme);
      syncInvertedCarousels(theme);
   }

   /* =========================
      CAROUSEL SWITCHER
   ========================== */
   function syncInvertedCarousels(theme) {
      const inverted = theme === 'dark' ? 'light' : 'dark';

      document.querySelectorAll('.carousel-invert').forEach(el => {
         el.setAttribute('data-bs-theme', inverted);
      });
   }


   /* =========================
      IMAGE SWITCHER
   ========================== */

   function updateThemeImages(theme) {
      document.querySelectorAll('.theme-image').forEach(img => {
         const src = img.dataset[theme];
         if (src && img.src !== src) {
            img.src = src;
         }
      });
   }

   /* =========================
      INIT
   ========================== */

   setTheme(getTheme());

   /* =========================
      TOGGLE HANDLERS (MULTI)
   ========================== */

   toggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
         e.preventDefault();
         setTheme(
            html.getAttribute('data-bs-theme') === 'dark'
               ? 'light'
               : 'dark',
            true
         );
      });
   });
});