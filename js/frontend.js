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
// Active page statis
const links = document.querySelectorAll("ul a");
const currentPage = window.location.pathname.split("/").pop();
const activeLinkOverride = document.body.getAttribute("data-active-link");

links.forEach(link => {
   const linkPage = link.getAttribute("href");

   if (linkPage === currentPage || linkPage === activeLinkOverride) {
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
const elements = document.querySelectorAll(".text-line-2");

elements.forEach((el) => {
   const words = el.innerText.trim().split(" ");

   // Menghitung titik tengah jumlah kata
   const middle = Math.ceil(words.length / 2);

   // Membagi kata menjadi dua bagian dan menggabungkannya kembali dengan <br>
   const baris1 = words.slice(0, middle).join(" ");
   const baris2 = words.slice(middle).join(" ");

   el.innerHTML = `${baris1}<br>${baris2}`;
});

// Hover actions untuk submenu produk dan toko resmi di navigasi desktop
document.querySelectorAll('.dropdown-menu .nav-pills .nav-link[data-bs-toggle="pill"]').forEach(function(pill) {
   pill.addEventListener('mouseenter', function() {
      const tab = new bootstrap.Tab(this);
      tab.show();
   });
});

// Update tahun copyright
const currentYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright-year");
if (copyrightElement) {
   copyrightElement.textContent = currentYear;
}
