document.writeln(`
   <!-- menu -->
   <aside id="menu" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="menu-title">
      <div class="p-3 pb-0">
         <h5 id="menu-title" class="visually-hidden">Menu Navigasi</h5>
         <button class="btn-close rounded-0 border-0 shadow-none float-end" type="button" data-bs-dismiss="offcanvas" aria-label="Tutup"></button>
      </div>
      <div class="p-3 pt-0 flex-grow-1 overflow-y-auto">
         <!-- navigasi mobile -->
         <nav aria-label="navigasi mobile">
            <ul class="nav d-block text-capitalize">
               <li class="nav-item">
                  <a href="about.html" class="nav-link text-reset opacity-75-hover px-0">tentang kami</a>
               </li>
               <li class="nav-item collapse-item">
                  <a data-bs-toggle="collapse" href="#collapse-prduk" class="nav-link collapse-toggler text-reset opacity-75-hover px-0 collapsed">produk</a>
                  <div class="collapse" id="collapse-prduk">
                     <ul class="nav d-block text-capitalize ps-4">
                        <li class="nav-item collapse-item">
                           <a data-bs-toggle="collapse" href="#collapse-produk-konsummen" class="nav-link collapse-toggler text-reset opacity-75-hover px-0 collapsed">produk konsumen</a>
                           <div class="collapse" id="collapse-produk-konsummen">
                              <ul class="nav d-block text-capitalize ps-4">
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">supresso</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">BaliCafé</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">UCAFÉ</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">rasa sayang</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">tugu buaya</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">uang emas</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">BROCHOCO</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">jeheku</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">intiRasa</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="brand.html" class="nav-link text-reset opacity-75-hover px-0">Hao Cafe</a>
                                 </li>
                              </ul>
                           </div>
                        </li>
                        <li class="nav-item">
                           <a href="foodservice.html" class="nav-link text-reset opacity-75-hover px-0">food service</a>
                        </li>
                        <li class="nav-item">
                           <a href="equipment.html" class="nav-link text-reset opacity-75-hover px-0">mesin-mesin & peralatan khusus</a>
                        </li>
                     </ul>
                  </div>
               </li>
               <li class="nav-item">
                  <a href="businesses.html" class="nav-link text-reset opacity-75-hover px-0">bisnis</a>
               </li>
               <li class="nav-item">
                  <a href="stores.html" class="nav-link text-reset opacity-75-hover px-0">toko resmi</a>
               </li>
               <li class="nav-item">
                  <a href="news.html" class="nav-link text-reset opacity-75-hover px-0">berita & acara</a>
               </li>
               <li class="nav-item">
                  <a href="download.html" class="nav-link text-reset opacity-75-hover px-0">unduhan</a>
               </li>
               <li class="nav-item">
                  <a href="career.html" class="nav-link text-reset opacity-75-hover px-0">karir</a>
               </li>
               <li class="nav-item">
                  <a href="contact.html" class="nav-link text-reset opacity-75-hover px-0">kontak</a>
               </li>
            </ul>
         </nav>
      </div>
      <div class="px-3"><hr class="m-0"></div>
      <div class="p-3">
         <ul class="nav flex-column text-capitalize">
            <li class="nav-item">
               <a href="https://indracostore.com/" target="_blank" class="nav-link text-reset opacity-75-hover px-0">INDRACOSTORE</a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link text-reset opacity-75-hover px-0">&#x1f1fa;&#x1f1f8; English</a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link text-reset opacity-75-hover px-0 active">&#x1F1EE;&#x1F1E9; Indonesia</a>
            </li>
         </ul>
      </div>
   </aside>
`)