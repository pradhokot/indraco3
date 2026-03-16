document.writeln(`
   <header class="fixed-top">
      <!-- navigasi utama -->
      <nav aria-label="navigasi utama" class="navbar bg-light-subtle">
         <div class="container-xxl flex-column row-gap-lg-3">
            <div class="navbar-atas w-100 d-grid d-lg-flex align-items-center column-gap-4 column-gap-lg-5" style="grid-template-columns: 1fr auto 1fr;">
               <!-- toggler navigasi mobile -->
               <div class="d-lg-none">
                  <button class="navbar-toggler rounded-0 p-0 border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-label="Toggle navigasi">
                     <span class="navbar-toggler-icon"></span>
                  </button>
               </div>
               <a href="index.html" class="navbar-brand m-0 d-flex">
                  <img src="images/logo-indraco-est.png" data-light="images/logo-indraco-est.png" data-dark="images/logo-indraco-est-invert.png" alt="Logo INDRACO" class="theme-image w-100 h-auto">
                  <span class="visually-hidden">INDRACO</span>
               </a>
               <div class="d-lg-none">
                  <!-- trigger dark/light mode di mobile -->
                  <button type="button" class="theme-toggle d-flex float-end" aria-label="Ganti tema gelap atau terang">
                     <svg aria-hidden="true" class="theme-icon" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none">
                        <!-- Sun -->
                        <g class="icon-sun">
                           <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                           <g stroke="currentColor" stroke-width="2">
                              <line x1="12" y1="1" x2="12" y2="4"></line>
                              <line x1="12" y1="20" x2="12" y2="23"></line>
                              <line x1="1" y1="12" x2="4" y2="12"></line>
                              <line x1="20" y1="12" x2="23" y2="12"></line>
                              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"></line>
                              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"></line>
                              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"></line>
                              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"></line>
                           </g>
                        </g>
                  
                        <!-- Moon -->
                        <g class="icon-moon">
                           <path d="M21 12.8A9 9 0 1111.2 3 a7 7 0 109.8 9.8z" fill="currentColor"></path>
                        </g>
                     </svg>
                  </button>
               </div>
               <ul class="list-unstyled mb-0 d-none d-lg-flex flex-wrap gap-3 ms-auto small">
                  <li><a href="https://indracostore.com/" target="_blank" class="text-reset text-decoration-none opacity-75-hover text-capitalize">INDRACOSTORE</a></li>
                  <li class="vr"></li>
                  <!-- toggler bahasa inggris -->
                  <li><a href="#" class="text-reset text-decoration-none lang-toggler" data-lang="en">&#x1f1fa;&#x1f1f8; <span class="opacity-75-hover">English</span></a></li>
                  <li class="vr"></li>
                  <!-- toggler bahasa indonesia -->
                  <li><a href="#" class="text-reset text-decoration-none lang-toggler" data-lang="id">&#x1F1EE;&#x1F1E9; <span class="opacity-75-hover active">Indonesia</span></a></li>
               </ul>
            </div>
            <div class="navbar-bawah w-100 d-none d-lg-flex align-items-lg-center column-gap-lg-5">
               <!-- navigasi desktop -->
               <ul aria-label="navigasi desktop" class="list-unstyled mb-0 d-flex flex-wrap gap-3 flex-lg-grow-1">
                  <li>
                     <a href="about.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_about">tentang kami</a>
                  </li>
                  <li class="vr"></li>
                  <li class="dropdown">
                     <a href="product.html" class="text-reset text-decoration-none opacity-75-hover dropdown-link text-capitalize" data-i18n="nav_product">produk</a>
                     <!-- submenu produk di navigasi desktop -->
                     <div class="dropdown-menu rounded-0 border-0 bg-light-subtle position-fixed start-0 end-0 py-4">
                        <div class="container-lg pb-3">
                           <h2 class="fw-bold text-capitalize fs-4" data-i18n="nav_product">produk kami</h2>
                           <hr class="opacity-75 border-2">
                           <div class="d-flex column-gap-4">
                              <div class="nav flex-column nav-pills" role="tablist">
                                 <button type="button" onclick="product.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-consumer" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer" aria-selected="true" data-i18n="nav_product_consumer">produk konsumen</button>
                                 <button type="button" onclick="foodservice.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice" aria-selected="false" data-i18n="nav_foodservice">layanan makanan</button>
                                 <button type="button" onclick="equipment.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment" aria-selected="false" data-i18n="nav_equipment">mesin-mesin & peralatan khusus</button>
                              </div>
                              <div class="vr"></div>
                              <div class="tab-content">

                                 <div class="tab-pane fade show active" id="tab-pane-product-consumer" role="tabpanel" tabindex="0">
                                    <div class="d-flex column-gap-4">
                                       <div class="nav flex-column nav-pills" role="tablist">
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-consumer-supresso" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-supresso" aria-selected="true">supresso</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-balicafe" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-balicafe" aria-selected="false">BaliCafé</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-ucafe" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-ucafe" aria-selected="false">UCAFÉ</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-rasa-sayang" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-rasa-sayang" aria-selected="false">rasa sayang</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-tugu-buaya" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-tugu-buaya" aria-selected="false">tugu buaya</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-uang-emas" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-uang-emas" aria-selected="false">uang emas</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-brochoco" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-brochoco" aria-selected="false">BROCHOCO</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-jaheku" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-jaheku" aria-selected="false">jaheku</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-intirasa" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-intirasa" aria-selected="false">intirasa</button>
                                          <button type="button" onclick="brand.html" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-consumer-haocafe" data-bs-toggle="pill" data-bs-target="#tab-pane-product-consumer-haocafe" aria-selected="false">hao cafe</button>
                                       </div>
                                       <div class="vr"></div>
                                       <div class="tab-content">
                                          <div class="tab-pane fade h-100 show active" id="tab-pane-product-consumer-supresso" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">supresso</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_supresso">Dengan biji-biji kopi yang berasal dari timur hingga barat Indonesia, koleksi kopi single-origin Supresso menghasilkan profil rasa yang premium, mewah sekaligus unik. Dengan sepenuh hati, kami fokus menyajikan kopi kualitas tinggi untuk penikmat kopi di seluruh dunia dalam bentuk biji, bubuk, drip, dan kapsul. Nikmati pengalaman kopi Indonesia dalam kualitas dan kemurniannya, bersama Supresso.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-supresso1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-supresso2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-supresso3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-balicafe" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">BaliCafé</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_balicafe">Diracik dari kopi Bali asli, nikmati hasil kreasi Balicafé kami, dan menyatulah dengan tradisi kopi pulau Bali yang magis.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-balicafe1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-balicafe2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-balicafe3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-ucafe" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">UCAFÉ</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_ucafe">UCAFÉ for “U”. Dirancang untuk menyatukan dunia peminum kopi dari berbagai latar, dengan ragam rasa dan aromanya, UCAFÉ terdepan menemani dirimu yang sesungguhnya, menjaga cita-cita, impian, dan juga kesukaanmu.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-ucafe1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-ucafe2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-ucafe3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-rasa-sayang" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">rasa sayang</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_rasa_sayang">Rasa sayang eh, Rasa sayang sayang eh ~ Diracik pada 1984 dengan rasa dan aroma nostalgia, Rasa sayang membawa penghormatan bagi kopi di masa lalu, sekaligus memupuk rasa nostalgia yang semakin hangat dengan teknik presisi yang lebih baru.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-rasa-sayang1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-rasa-sayang2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-rasa-sayang3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-tugu-buaya" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">tugu buaya</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_tugu_buaya">Bercita rasa kuat serta tekstur tegas. Dikembangkan sejak 1977, Tugu Buaya memiliki rasa yang unik dengan karakter kopi yang diterima semua orang.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-tugu-buaya1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-tugu-buaya2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-tugu-buaya3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-uang-emas" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">uang emas</span> | <span class="fw-thin" data-i18n="coffee">kopi</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_uang_emas">Dibuat dari biji kopi pilihan, cobalah kopi asli dengan paduan metode pengolahan tradisional dan modern ini. Dari kreasi kopi hitam yang sesungguhnya, temukan nuansa kontemporer yang tiada duanya.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-uang-emas1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-uang-emas2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-uang-emas3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-brochoco" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">BROCHOCO</span> | <span class="fw-thin" data-i18n="chocolate">cokelat</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_brochoco">Mau minuman coklat dengan berbagai rasa pilihan? BROCHOCO jawabannya! Isi hari-harimu dengan BROCHOCO, dengan rasa Original juga Choco Banana. Nikmati beragam rasa manisnya coklat dan lembutnya krim, berpadu seimbang dalam cita rasa yang menggoda. Favorit semua kalangan dan selalu jadi pilihan, dengan berbagai kreasi penyajian yang lezat.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-brochoco1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-brochoco2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-brochoco3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-jaheku" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">jaheku</span> | <span class="fw-thin" data-i18n="ginger">jahe</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_jaheku">Jaheku / definisi / “Jahe kesukaanku” dalam bahasa Indonesia. Merupakan bahan pangan yang familiar di banyak negara, Jaheku menyajikan segala manfaat dan kesegaran jahe kepada konsumen dalam bentuk minuman, dengan kombinasi rasa Jaheku Gula Aren, dan juga Jaheku Madu, memantapkan berbagai manfaat serta rasa unik jahe yang selalu disukai.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-jaheku1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-jaheku2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-jaheku3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-intirasa" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">intiRasa</span> | <span class="fw-thin" data-i18n="choconutmilk">santan</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_intirasa">Santan bubuk intiRasa merupakan versi praktis dari cita rasa gurih ala santan kelapa yang sesungguhnya, berkualitas dan disesuaikan dengan kebutuhan dapur anda yang serba cepat.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-intirasa1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-intirasa2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-intirasa3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-consumer-haocafe" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3"><span class="fw-bold">hao cafe</span> | <span class="fw-thin" data-i18n="creamer&sugar">krimer & gula</span></h3>
                                                <p class="mb-4" data-i18n="navdesc_haocafe">Kopi yang dibuat secara sempurna dengan tekstur kuat yang mengeluarkan aroma khas dan rasa yang mantap.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-haocafe1.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-haocafe2.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="images/submenu-haocafe3.jpg" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="tab-pane fade" id="tab-pane-product-foodservice" role="tabpanel" tabindex="0">
                                    <div class="d-flex column-gap-4">
                                       <div class="nav flex-column nav-pills" role="tablist">
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-foodservice-coffee" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-coffee" aria-selected="true" data-i18n="coffee">kopi</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice-creamer" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-creamer" aria-selected="false" data-i18n="creamer">krimer</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice-tea" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-tea" aria-selected="false" data-i18n="tea">teh</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice-ginger" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-ginger" aria-selected="false" data-i18n="gringer">jahe</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice-choco" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-choco" aria-selected="false" data-i18n="chocolate">cokelat</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-foodservice-sugar" data-bs-toggle="pill" data-bs-target="#tab-pane-product-foodservice-sugar" aria-selected="false" data-i18n="sugar">gula</button>
                                       </div>
                                       <div class="vr"></div>
                                       <div class="tab-content">
                                          <div class="tab-pane fade h-100 show active" id="tab-pane-product-foodservice-coffee" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="coffee">kopi</h3>
                                                <p class="mb-4" data-i18n="navdesc_coffee">Dari Sumatra hingga Papua, seri kopi specialty Indonesia yang sudah terkenal ke mancanegara.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-foodservice-creamer" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="creamer">krimer</h3>
                                                <p class="mb-4" data-i18n="navdesc_creamer">Krimer berkualitas dengan standar produksi dan penjaminan mutu yang tinggi, untuk skala konsumsi rumah ataupun industri.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-foodservice-tea" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="tea">teh</h3>
                                                <p class="mb-4" data-i18n="navdesc_tea">Teh autentik Indonesia dengan pengalaman tradisi ngeteh yang kaya. Rasa yang kuat dengan tekstur yang lembut.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-foodservice-ginger" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="gringer">jahe</h3>
                                                <p class="mb-4" data-i18n="navdesc_gringer">Minuman jahe premium yang memberikan kehangatan seimbang, kini tersedia dalam berbagai varian.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-foodservice-choco" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="chocolate">cokelat</h3>
                                                <p class="mb-4" data-i18n="navdesc_chocolate">Dipetik dari kebun kakao asli Indonesia, lini produk coklat kami mengutamakan rasa yang asli dengan tekstur yang lembut, kaya dan mewah.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade h-100" id="tab-pane-product-foodservice-sugar" role="tabpanel" tabindex="0">
                                             <div class="d-flex flex-column h-100">
                                                <h3 class="text-capitalize mb-3 fw-bold" data-i18n="sugar">gula</h3>
                                                <p class="mb-4" data-i18n="navdesc_sugar">Gula dan berbagai produk pemanis lainnya juga tersedia dalam berbagai tipe, ukuran dan skala produksi/bisnis.</p>
                                                <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                   <figure class="figure w-100 m-0">
                                                      <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                         <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                      </div>
                                                   </figure>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="tab-pane fade" id="tab-pane-product-equipment" role="tabpanel" tabindex="0">
                                    <div class="d-flex column-gap-4">
                                       <div class="nav flex-column nav-pills" role="tablist">
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-equipment-coffee-machine" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine" aria-selected="true" data-i18n="naveq_1">mesin kopi</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-dispenser" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-dispenser" aria-selected="false" data-i18n="naveq_2">dispenser minuman</button>
                                          <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-accessories" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories" aria-selected="false" data-i18n="naveq_3">aksesoris</button>
                                          <a href="https://supresso.com/id/kraton" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-guarante" data-i18n="naveq_4">garansi</a>
                                       </div>
                                       <div class="vr"></div>
                                       <div class="tab-content">

                                          <div class="tab-pane fade show active" id="tab-pane-product-equipment-coffee-machine" role="tabpanel" tabindex="0">
                                             <div class="d-flex column-gap-4">
                                                <div class="nav flex-column nav-pills" role="tablist">
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-equipment-coffee-machine-full-auto" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine-full-auto" aria-selected="true" data-i18n="naveq_5">full otomatis</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-coffee-machine-semi-auto" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine-semi-auto" aria-selected="false" data-i18n="naveq_6">semi otomatis</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-coffee-machine-brew" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine-brew" aria-selected="false" data-i18n="naveq_7">sistem seduh kopi</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-coffee-machine-capsules" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine-capsules" aria-selected="false" data-i18n="naveq_8">mesin kopi kapsul</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-coffee-machine-grinder" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-coffee-machine-grinder" aria-selected="false" data-i18n="naveq_9">grinder</button>
                                                </div>
                                                <div class="vr"></div>
                                                <div class="tab-content">
                                                   <div class="tab-pane fade show active" id="tab-pane-product-equipment-coffee-machine-full-auto" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_10">mesin kopi full otomatis</h3>
                                                      <p class="mb-4" data-i18n="naveq_11">Mesin kopi full-otomatis - Siapkan kopi dalam hitungan menit, dengan hanya tap pada mesin yang mudah penggunaannya. Bentuknya ergonomis dan bisa diandalkan setiap hari.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-coffee-machine-semi-auto" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_12">mesin kopi semi otomatis</h3>
                                                      <p class="mb-4" data-i18n="naveq_13">Sajikan kopi dengan mudah, memanfaatkan mesin semi-otomatis yang terpercaya. Mudah digunakan, siap dalam hitungan menit.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-coffee-machine-brew" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_14">sistem seduh kopi</h3>
                                                      <p class="mb-4" data-i18n="naveq_15">Dengan pengetahuan pakar kopi, kami mempersembahkan sistem penyeduhan kopi yang sesuai untuk berbagai keperluan dan metode penyajian. Semua demi kualitas dan rasa kopi terbaik.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-coffee-machine-capsules" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_16">mesin kopi kapsul</h3>
                                                      <p class="mb-4" data-i18n="naveq_17">Menyajikan kopi dengan lebih mudah. Mesin kapsul kopi yang mudah digunakan, hemat energi demi pengalaman kopi terbaik.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-coffee-machine-grinder" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_18">grinder</h3>
                                                      <p class="mb-4" data-i18n="naveq_19">Untuk penggunaan pribadi dan profesional, dapatkan manfaat terbaik dari mesin giling kopi kami, cara lebih baik dalam menyajikan aslinya rasa kopi.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>

                                          <div class="tab-pane fade" id="tab-pane-product-equipment-dispenser" role="tabpanel" tabindex="0">
                                             <div class="d-flex column-gap-4">
                                                <div class="nav flex-column nav-pills" role="tablist">
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-equipment-dispenser-instant" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-dispenser-instant" aria-selected="true" data-i18n="naveq_20">mesin minuman instan</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-dispenser-cold" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-dispenser-cold" aria-selected="false" data-i18n="naveq_21">mesin minuman dingin</button>
                                                </div>
                                                <div class="vr"></div>
                                                <div class="tab-content">

                                                   <div class="tab-pane fade show active" id="tab-pane-product-equipment-dispenser-instant" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_22">mesin minuman instan</h3>
                                                      <p class="mb-4" data-i18n="naveq_23">Jaga kualitas minuman tetap paling baik, dan sajikan lebih baik menggunakan mesin minuman instan kami.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-dispenser-cold" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_24">mesin minuman dingin</h3>
                                                      <p class="mb-4" data-i18n="naveq_25">Untuk berbagai jenis minuman segar! Dispenser minuman dingin kami telah siap untuk berbagai kegunaan, semua untuk kelancaran aktivitas Anda.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                </div>
                                             </div>
                                          </div>

                                          <div class="tab-pane fade" id="tab-pane-product-equipment-accessories" role="tabpanel" tabindex="0">
                                             <div class="d-flex column-gap-4">
                                                <div class="nav flex-column nav-pills" role="tablist">
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-product-equipment-accessories-pengaduk-susu" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories-pengaduk-susu" aria-selected="true" data-i18n="naveq_26">mesin pengaduk susu</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-accessories-ketel" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories-ketel" aria-selected="false" data-i18n="naveq_27">ketel elektrik</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-accessories-french-press" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories-french-press" aria-selected="false" data-i18n="naveq_28">french press</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-accessories-moka-pot" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories-moka-pot" aria-selected="false" data-i18n="naveq_29">pot moka</button>
                                                   <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-product-equipment-accessories-glass" data-bs-toggle="pill" data-bs-target="#tab-pane-product-equipment-accessories-glass" aria-selected="false" data-i18n="naveq_30">gelas dua lapis</button>
                                                </div>
                                                <div class="vr"></div>
                                                <div class="tab-content">

                                                   <div class="tab-pane fade show active" id="tab-pane-product-equipment-accessories-pengaduk-susu" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_31">mesin pengaduk susu</h3>
                                                      <p class="mb-4" data-i18n="naveq_32">Menjaga kualitas produk susu Anda pada tingkat kesegaran paling tinggi. Koleksi alat pengaduk susu kami memudahkan Anda menikmati susu segar setiap hari.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-accessories-ketel" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_33">ketel elektrik</h3>
                                                      <p class="mb-4" data-i18n="naveq_34">Menjaga kopi dan teh pada suhu optimum memerlukan dedikasi khusus. Ketel elektrik membuat suhu terjaga dalam waktu yang lebih lama, memastikan hasil seduhan tetap prima.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-accessories-french-press" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_35">french press</h3>
                                                      <p class="mb-4" data-i18n="naveq_36">Sentuhan artistik dari alat French Press kini lebih dekat dengan keseharian Anda.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-accessories-moka-pot" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_37">moka pot</h3>
                                                      <p class="mb-4" data-i18n="naveq_38">Menggunakan sistem aliran moka pot yang legendaris, metode seduh favorit kami menghasilkan produk dan pengalaman kopi yang nyata.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                   <div class="tab-pane fade" id="tab-pane-product-equipment-accessories-glass" role="tabpanel" tabindex="0">
                                                      <h3 class="text-capitalize mb-3 fw-bold" data-i18n="naveq_39">gelas dua lapis</h3>
                                                      <p class="mb-4" data-i18n="naveq_40">Sentuhan artistik dalam penyajian kopi, semua dalam bentuk gelas unik ini.</p>
                                                      <div class="d-flex gap-3 w-100 tab-figure-image flex-grow-1 align-items-end d-none">
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                         <figure class="figure w-100 m-0">
                                                            <div class="figure-img ratio ratio-1x1 w-100 bg-secondary m-0">
                                                               <img src="" alt="" loading="lazy" class="object-fit-cover">
                                                            </div>
                                                         </figure>
                                                      </div>
                                                   </div>

                                                </div>
                                             </div>
                                          </div>

                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="vr"></li>
                  <li>
                     <a href="businesses.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_business">bisnis</a>
                  </li>
                  <li class="vr"></li>
                  <li class="dropdown">
                     <a href="stores.html" class="text-reset text-decoration-none opacity-75-hover dropdown-link text-capitalize" data-i18n="nav_stores">toko resmi</a>
                     <!-- submenu toko resmi di navigasi desktop -->
                     <div class="dropdown-menu rounded-0 border-0 bg-light-subtle position-fixed start-0 end-0 py-4">
                        <div class="container-lg pb-3">
                           <h2 class="fw-bold text-capitalize fs-4" data-i18n="nav_stores">toko resmi</h2>
                           <hr class="opacity-75 border-2">
                           <div class="d-flex column-gap-4">
                              <div class="nav flex-column nav-pills" role="tablist">
                                 <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-store-ecommerce" data-bs-toggle="pill" data-bs-target="#tab-pane-store-ecommerce" aria-selected="true">e-commerce</button>
                                 <button type="button" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-marketplace" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace" aria-selected="false">marketplace</button>
                              </div>
                              <div class="vr"></div>
                              <div class="tab-content">

                                 <div class="tab-pane fade show active" id="tab-pane-store-ecommerce" role="tabpanel" tabindex="0">
                                    <div class="d-flex column-gap-4">
                                       <div class="nav flex-column nav-pills" role="tablist">
                                          <button type="button" onclick="https://supresso.com/" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-store-ecommerce-supresso" data-bs-toggle="pill" data-bs-target="#tab-pane-store-ecommerce-supresso" aria-selected="true">supresso</button>
                                          <button type="button" onclick="https://indracostore.com/" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-ecommerce-indracostore" data-bs-toggle="pill" data-bs-target="#tab-pane-store-ecommerce-indracostore" aria-selected="false">indracostore</button>
                                       </div>
                                       <div class="vr"></div>
                                       <div class="tab-content">
                                          <div class="tab-pane fade show active" id="tab-pane-store-ecommerce-supresso" role="tabpanel" tabindex="0">
                                             <img src="images/logo-supresso-typograph-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 17rem;">
                                          </div>
                                          <div class="tab-pane fade" id="tab-pane-store-ecommerce-indracostore" role="tabpanel" tabindex="0">
                                             <img src="images/logo-indracostore-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 17rem;">
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="tab-pane fade" id="tab-pane-store-marketplace" role="tabpanel" tabindex="0">
                                    <div class="d-flex column-gap-4">
                                       <div class="nav flex-column nav-pills" role="tablist">
                                          <button type="button" onclick="https://www.indraco.com/mplink/redirect.php?linkclick=tokopedia" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover active" id="tab-link-store-marketplace-tokopedia" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace-tokopedia" aria-selected="true">tokopedia</button>
                                          <button type="button" onclick="https://www.indraco.com/mplink/redirect.php?linkclick=shopee" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-marketplace-shopee" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace-shopee" aria-selected="false">shopee</button>
                                          <button type="button" onclick="https://www.indraco.com/mplink/redirect.php?linkclick=lazada" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-marketplace-lazada" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace-lazada" aria-selected="false">lazada</button>
                                          <button type="button" onclick="https://www.indraco.com/mplink/redirect.php?linkclick=blibli" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-marketplace-blibli" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace-blibli" aria-selected="false">blibli</button>
                                          <button type="button" onclick="https://www.tiktok.com/@indracostore" target="_blank" class="nav-link text-reset text-start px-0 text-capitalize bg-transparent rounded-0 opacity-75-hover" id="tab-link-store-marketplace-tiktokshop" data-bs-toggle="pill" data-bs-target="#tab-pane-store-marketplace-tiktokshop" aria-selected="false">tiktok shop</button>
                                       </div>
                                       <div class="vr"></div>
                                       <div class="tab-content">
                                          <div class="tab-pane fade show active" id="tab-pane-store-marketplace-tokopedia" role="tabpanel" tabindex="0">
                                             <p class="small text-muted">INDRACO toko resmi :</p>
                                             <img src="images/logo-tokopedia-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 14rem;">
                                          </div>
                                          <div class="tab-pane fade" id="tab-pane-store-marketplace-shopee" role="tabpanel" tabindex="0">
                                             <p class="small text-muted">INDRACO toko resmi :</p>
                                             <img src="images/logo-shopee-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 12rem;">
                                          </div>
                                          <div class="tab-pane fade" id="tab-pane-store-marketplace-lazada" role="tabpanel" tabindex="0">
                                             <p class="small text-muted">INDRACO toko resmi :</p>
                                             <img src="images/logo-lazada-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 12rem;">
                                          </div>
                                          <div class="tab-pane fade" id="tab-pane-store-marketplace-blibli" role="tabpanel" tabindex="0">
                                             <p class="small text-muted">INDRACO toko resmi :</p>
                                             <img src="images/logo-blibli-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 10rem;">
                                          </div>
                                          <div class="tab-pane fade" id="tab-pane-store-marketplace-tiktokshop" role="tabpanel" tabindex="0">
                                             <p class="small text-muted">INDRACO toko resmi :</p>
                                             <img src="images/logo-tiktok-shop-flat.png" alt="" loading="lazy" class="w-100 h-auto" style="max-width: 14rem;">
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="vr"></li>
                  <li>
                     <a href="news.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_news">berita</a>
                  </li>
                  <li class="vr"></li>
                  <li>
                     <a href="download.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_download">unduhan</a>
                  </li>
                  <li class="vr"></li>
                  <li>
                     <a href="career.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_career">karir</a>
                  </li>
                  <li class="vr"></li>
                  <li>
                     <a href="contact.html" class="text-reset text-decoration-none opacity-75-hover text-capitalize" data-i18n="nav_contact">kontak</a>
                  </li>
               </ul>
               <div class="d-flex column-gap-4">
                  <!-- trigger modal search -->
                  <button type="button" class="btn p-0 rounded-0 border-0" data-bs-toggle="modal" data-bs-target="#modal-search" aria-label="Buka pencarian">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 640 640"><path fill="currentColor" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                  </button>
                  <!-- trigger dark/light mode di desktop -->
                  <button type="button" class="theme-toggle" aria-label="Ganti tema gelap atau terang">
                     <svg aria-hidden="true" class="theme-icon" width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="none">
                        <!-- Sun -->
                        <g class="icon-sun">
                           <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                           <g stroke="currentColor" stroke-width="2">
                              <line x1="12" y1="1" x2="12" y2="4"></line>
                              <line x1="12" y1="20" x2="12" y2="23"></line>
                              <line x1="1" y1="12" x2="4" y2="12"></line>
                              <line x1="20" y1="12" x2="23" y2="12"></line>
                              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"></line>
                              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"></line>
                              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"></line>
                              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"></line>
                           </g>
                        </g>
                  
                        <!-- Moon -->
                        <g class="icon-moon">
                           <path d="M21 12.8A9 9 0 1111.2 3 a7 7 0 109.8 9.8z" fill="currentColor"></path>
                        </g>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </nav>
   </header>
`)