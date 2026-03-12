$(document).ready(function () {
   $('input, textarea').mouseenter(function () {
      $(this).select();
   });
});


// Animasi header slide up/down saat scroll
document.addEventListener('DOMContentLoaded', function () {
   const header = document.querySelector('body>header');
   let lastScrollY = window.scrollY;
   let ticking = false;

   // Siapkan style agar header bisa di-animasi
   header.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
   header.style.willChange = 'transform';

   function onScroll() {
      const currentScrollY = window.scrollY;

      // Mencegah header sembunyi pada saat submenu produk dan toko resmi dihover (pada resolusi > 992px)
      const isDesktop = window.innerWidth >= 992;
      const isDropdownLinkHovered = isDesktop && document.querySelector('.dropdown .dropdown-link:hover, .dropdown .dropdown-menu:hover') !== null;

      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isDropdownLinkHovered) {
         // Scroll ke bawah, sembunyikan header
         header.style.transform = 'translateY(calc(-100% + .25rem))';
      } else {
         // Scroll ke atas, tampilkan header
         header.style.transform = 'translateY(0)';
      }
      lastScrollY = currentScrollY;
      ticking = false;
   }

   window.addEventListener('scroll', function () {
      if (!ticking) {
         window.requestAnimationFrame(onScroll);
         ticking = true;
      }
   });
});


// Active page statis
const links = document.querySelectorAll("ul a, .navbar a, .nav-link, a[data-i18n]");
const currentPage = window.location.pathname.split("/").pop();
const activeLinkOverride = document.body.getAttribute("data-active-link");

links.forEach(link => {
   const linkPage = link.getAttribute("href");
   const dataI18n = link.getAttribute("data-i18n");
   let isActive = false;

   // 1. Exact match
   if (linkPage && linkPage !== "#" && !linkPage.startsWith("javascript:")) {
      if (linkPage === currentPage || linkPage === activeLinkOverride) {
         isActive = true;
      } 
   }

   // 2. Subpages of News (hanya untuk menu utama yang memiliki data-i18n)
   if (dataI18n === "nav_news" && currentPage.startsWith("news")) {
      isActive = true;
   }
   
   // 3. Subpages of Product (hanya untuk menu utama yang memiliki data-i18n)
   if (dataI18n === "nav_product" && ["product.html", "brand.html", "foodservice.html", "equipment.html"].includes(currentPage)) {
      isActive = true;
   }

   if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
   }
});


// menyembunyikan carousel control jika slider hanya satu
function updateCarouselControls() {
   document.querySelectorAll('.carousel').forEach(carousel => {
      const items = carousel.querySelectorAll('.carousel-item');
      const prev = carousel.querySelector('.carousel-control-prev');
      const next = carousel.querySelector('.carousel-control-next');

      const hide = items.length <= 1;

      prev?.classList.toggle('d-none', hide);
      next?.classList.toggle('d-none', hide);
   });
}

document.addEventListener('DOMContentLoaded', updateCarouselControls);


// 2 line text (Mengambil semua elemen dengan class 'text-line-2')
window.applyTextLine2 = function() {
   const elements = document.querySelectorAll(".text-line-2");

   elements.forEach((el) => {
      const text = el.textContent.trim();
      if (!text) return;

      const words = text.split(/\s+/);

      // Menghitung titik tengah jumlah kata
      const middle = Math.ceil(words.length / 2);

      // Membagi kata menjadi dua bagian dan menggabungkannya kembali dengan <br>
      const baris1 = words.slice(0, middle).join(" ");
      const baris2 = words.slice(middle).join(" ");

      el.innerHTML = `${baris1}<br>${baris2}`;
   });
};

document.addEventListener('DOMContentLoaded', window.applyTextLine2);

// Hover actions untuk submenu produk dan toko resmi di navigasi desktop
document.querySelectorAll('.dropdown-menu .nav-pills .nav-link[data-bs-toggle="pill"]').forEach(function (pill) {

   // Konversi nilai onclick yang berupa nama halaman (misal: onclick="product.html") 
   // ke attribute data-target-url agar tidak menjadi error Uncaught ReferenceError saat tab diklik.
   if (pill.hasAttribute('onclick')) {
      const onclickAttr = pill.getAttribute('onclick');
      if (!onclickAttr.includes('(') && !onclickAttr.includes('window.') && !onclickAttr.includes('location.')) {
         pill.setAttribute('data-target-url', onclickAttr.trim());
         pill.removeAttribute('onclick');
      }
   }

   pill.addEventListener('mouseenter', function () {
      const tab = new bootstrap.Tab(this);
      tab.show();
   });

   pill.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetUrl = this.getAttribute('data-target-url');
      const target = this.getAttribute('target'); // Cek target blank

      let finalUrl = null;
      if (href && href !== '#' && !href.startsWith('javascript:')) {
         finalUrl = href;
      } else if (targetUrl) {
         finalUrl = targetUrl;
      }

      if (finalUrl) {
         if (target === "_blank") {
            window.open(finalUrl, '_blank');
         } else {
            window.location.href = finalUrl;
         }
      }
   });
});

// Update tahun copyright
const currentYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright-year");
if (copyrightElement) {
   copyrightElement.textContent = currentYear;
}

// Fungsi alih bahasa
document.addEventListener('DOMContentLoaded', function() {
   const langTogglers = document.querySelectorAll('.lang-toggler');
   if (!langTogglers.length) return;

   // Cek bahasa yang aktif dari localStorage. Jika tidak ada, defaultnya 'id'
   let activeLang = localStorage.getItem('site_lang') || 'id';

   // Fungsi untuk meng-update tampilan (class .active) sesuai bahasa yang dipilih
   function updateLangUI() {
      langTogglers.forEach(toggler => {
         const lang = toggler.getAttribute('data-lang');
         
         // Untuk navigasi mobile (menu.js), target .active langsung di tag <a>
         if (toggler.classList.contains('nav-link')) {
            if (lang === activeLang) {
               toggler.classList.add('active');
            } else {
               toggler.classList.remove('active');
            }
         } 
         // Untuk navigasi desktop (page-header.js), target .active ada di tag <span> di dalam <a>
         else {
            const span = toggler.querySelector('span');
            if (span) {
               if (lang === activeLang) {
                  span.classList.add('active');
               } else {
                  span.classList.remove('active');
               }
            }
         }
      });
   }
   
   // Terapkan status active saat halaman dimuat
   updateLangUI();

   // Event listener saat tombol bahasa di-klik
   langTogglers.forEach(toggler => {
      toggler.addEventListener('click', function(e) {
         e.preventDefault();
         const selectedLang = this.getAttribute('data-lang');
         
         if (selectedLang !== activeLang) {
            activeLang = selectedLang;
            
            // Simpan bahasa yang dipilih ke localStorage
            localStorage.setItem('site_lang', activeLang);
            
            // Perbarui tampilan interface
            updateLangUI();
            
            // Perbarui text bahasa di HTML 
            if(typeof updateKamusUI === 'function') {
               updateKamusUI();
            }
         }
      });
   });
   
   // Fungsi untuk mengganti text HTML bersasarkan terjemahan
   window.updateKamusUI = function() {
      if (typeof translations === 'undefined') return; // Cegah error jika file kamus belum dimuat
      
      const elementsToTranslate = document.querySelectorAll('[data-i18n]');
      
      elementsToTranslate.forEach(element => {
         const key = element.getAttribute('data-i18n');
         
         if (translations[activeLang] && translations[activeLang][key]) {
            element.textContent = translations[activeLang][key];
         }
      });

      // Terapkan ulang efek teks setelah terjemahan diubah
      if (typeof window.applyTextLine2 === 'function') window.applyTextLine2();
      if (typeof window.applySplitParagraph === 'function') window.applySplitParagraph();
   }

   // Panggil satu kali saat Website pertamakali dibuka
   if(typeof updateKamusUI === 'function') {
      updateKamusUI();
   }
});


// Fungsi untuk membagi teks satu paragraf menjadi dua paragraf
window.applySplitParagraph = function() {
   // Mengambil semua elemen dengan class 'split-paragraph'
   const splitElements = document.querySelectorAll(".split-paragraph");

   splitElements.forEach(el => {
      const text = el.textContent.trim();
      if (!text) return;

      // Mencoba membagi teks berdasarkan kalimat (diakhiri titik, tanda tanya, atau seru)
      const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

      if (sentences && sentences.length > 1) {
         // Jika kalimat lebih dari 1, bagi jumlah kalimat jadi dua bagian
         const middle = Math.ceil(sentences.length / 2);
         const par1 = sentences.slice(0, middle).join(" ").trim();
         const par2 = sentences.slice(middle).join(" ").trim();

         el.innerHTML = `<p class="mb-3">${par1}</p><p class="mb-0">${par2}</p>`;
      } else {
         // Jika hanya ada 1 kalimat panjang, bagi teks berdasarkan jumlah kata rata tengah
         const words = text.split(/\s+/);
         const middle = Math.ceil(words.length / 2);
         const par1 = words.slice(0, middle).join(" ");
         const par2 = words.slice(middle).join(" ");

         el.innerHTML = `<p class="mb-3">${par1}</p><p class="mb-0">${par2}</p>`;
      }
   });
};

document.addEventListener('DOMContentLoaded', window.applySplitParagraph);
