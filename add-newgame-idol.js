window.addEventListener('DOMContentLoaded', function() {
      var is_login = (document.getElementsByClassName('username-container')[0] != undefined) ? document.getElementsByClassName('username-container')[0].innerText : undefined;
      var link_1 = "javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_65', 'Slots')";
      var link_2 = "javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_74', 'Slots')";
      const path = window.location.pathname;

      if (path.includes('desktop/slots/pgsoft')) {
          const htmlString = `
            <div class="game-item" data-game="Mahjong Ways 2 x10000" data-match="true" bis_skin_checked="1">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_65" id="PGSOFT_65" class="favourite-game-btn">
              <label for="PGSOFT_65"></label>
              <div class="wrapper-container" bis_skin_checked="1">
                <img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" alt="Mahjong Ways 2 x10000">
                <div class="link-container" bis_skin_checked="1">
                  <a class="link_edit1 play-now" data-game="Mahjong Ways 2 x10000" href="javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_65', 'Slots')">MAIN</a>
                </div>
              </div>
              <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x10000</div>
            </div>
            <div class="game-item" data-game="Mahjong Ways 2 x5000" data-match="true" bis_skin_checked="1">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_65" id="PGSOFT_65" class="favourite-game-btn">
              <label for="PGSOFT_65"></label>
              <div class="wrapper-container" bis_skin_checked="1">
                <img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" alt="Mahjong Ways 2 x5000">
                <div class="link-container" bis_skin_checked="1">
                  <a class="link_edit1 play-now" data-game="Mahjong Ways 2 x5000" href="javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_65', 'Slots')">MAIN</a>
                </div>
              </div>
              <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x5000</div>
            </div>
            <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" data-match="true" bis_skin_checked="1">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_74" id="PGSOFT_74" class="favourite-game-btn">
              <label for="PGSOFT_74"></label>
              <div class="wrapper-container" bis_skin_checked="1">
                <img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" alt="Mahjong Wins 3 Black Scatter">
                <div class="link-container" bis_skin_checked="1">
                  <a class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" href="javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_74', 'Slots')">MAIN</a>
                </div>
              </div>
              <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
            </div>
            <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" data-match="true" bis_skin_checked="1">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_74" id="PGSOFT_74" class="favourite-game-btn">
              <label for="PGSOFT_74"></label>
              <div class="wrapper-container" bis_skin_checked="1">
                <img src="https://www.kliker.store/img/gifmee.gif" alt="Mahjong Wins 3 Black Scatter">
                <div class="link-container" bis_skin_checked="1">
                  <a class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" href="javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_74', 'Slots')">MAIN</a>
                </div>
              </div>
              <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
            </div>`;

         const tempDiv = document.createElement('div');
         tempDiv.innerHTML = htmlString.trim();
         const newGameItem2 = tempDiv.children[2];
         const newGameItem3 = tempDiv.children[3];
         const newGameItem1 = tempDiv.children[1];
         const newGameItem0 = tempDiv.children[0];
         const container = document.getElementsByClassName('game-list')[0];
         if(container != undefined) container.insertBefore(newGameItem1, container.firstChild);
         if(container != undefined) container.insertBefore(newGameItem0, container.firstChild);
         if(container != undefined) container.insertBefore(newGameItem2, container.firstChild);
         if(container != undefined) container.insertBefore(newGameItem3, container.firstChild);

         if (is_login != undefined && container != undefined) {
            const linksedit1 = document.querySelectorAll('.link_edit1');
            linksedit1.forEach(function (link) {
               link.href = link_1;
            });

            const linksedit2 = document.querySelectorAll('.link_edit2');
            linksedit2.forEach(function (link) {
               link.href = link_2;
            });
         }
      }else if (path === '/' || path.includes('/desktop/home')){
         const htmlString = `
            <div class="games-group" bis_skin_checked="1">
               <div class="game-item" data-game="Mahjong Ways 2 x10000" bis_skin_checked="1">
                  <div class="wrapper-container" bis_skin_checked="1">
                     <picture>
                        <img alt="Mahjong Ways 2 x10000" height="150" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" width="150">
                     </picture>
                     <div class="link-container" bis_skin_checked="1">
                        <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" data-game="Mahjong Ways 2 x10000" bis_skin_checked="1">
                        MAIN
                        </a>
                     </div>
                  </div>
                  <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x10000</div>
               </div>
               <div class="game-item" data-game="Mahjong Ways 2 x5000" bis_skin_checked="1">
                  <div class="wrapper-container" bis_skin_checked="1">
                     <picture>
                        <img alt="Mahjong Ways 2 x5000" height="150" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" width="150">
                     </picture>
                     <div class="link-container" bis_skin_checked="1">
                        <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" data-game="Mahjong Ways 2 x5000" bis_skin_checked="1">
                        MAIN
                        </a>
                     </div>
                  </div>
                  <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x5000</div>
               </div>
            </div>
            <div class="games-group" bis_skin_checked="1">
               <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                  <div class="wrapper-container" bis_skin_checked="1">
                     <picture>
                        <img alt="Mahjong Wins 3 Black Scatter" height="150" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" width="150">
                     </picture>
                     <div class="link-container" bis_skin_checked="1">
                        <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                        MAIN
                        </a>
                     </div>
                  </div>
                  <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
               </div>
               <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                  <div class="wrapper-container" bis_skin_checked="1">
                     <picture>
                        <img alt="Mahjong Wins 3 Black Scatter" height="150" loading="lazy" src="https://www.kliker.store/img/gifmee.gif" width="150">
                     </picture>
                     <div class="link-container" bis_skin_checked="1">
                        <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                        MAIN
                        </a>
                     </div>
                  </div>
                  <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
               </div>
            </div>
        `;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString.trim();
        const newGameItem1 = tempDiv.children[1];
        const newGameItem2 = tempDiv.children[0];
        const container = document.getElementsByClassName('game-list')[0];
        if(container != undefined) container.insertBefore(newGameItem1, container.firstChild);
        if(container != undefined) container.insertBefore(newGameItem2, container.firstChild);

        if (is_login != undefined && container != undefined) {
            const linksedit1 = document.querySelectorAll('.link_edit1');
            linksedit1.forEach(function (link) {
               link.href = link_1;
            });

            const linksedit2 = document.querySelectorAll('.link_edit2');
            linksedit2.forEach(function (link) {
               link.href = link_2;
            });
        }
      }
   });



window.addEventListener('DOMContentLoaded', function() {
      var is_login = (document.getElementsByClassName('lp-label')[0] != undefined) ? document.getElementsByClassName('lp-label')[0].innerText : undefined;
      var link_1 = "javascript:openPopup('/dispatch/game/PGSOFT/Mobile/PGSOFT_65', 'Slots')";
      var link_2 = "javascript:openPopup('/dispatch/game/PGSOFT/Mobile/PGSOFT_74', 'Slots')";
      const path = window.location.pathname;

      if (path.includes('mobile/slots/pgsoft')) {
         const htmlString2 = `
            <li class="game-item" data-game="Mahjong Ways 2 x10000" style="order: 0;">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_65" id="PGSOFT_65" class="favourite-game-btn">
              <label for="PGSOFT_65"></label>
              <label class="inner-game-item">
                <input type="radio" name="game-list-radio-button">
                <div class="wrapper-container" bis_skin_checked="1">
                  <img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" alt="Mahjong Ways 2 x10000">
                  <span class="link-container">
                    <a class="link_edit1 play-now" data-game="Mahjong Ways 2 x10000" href="javascript:openNewTab('/dispatch/game/PGSOFT/Mobile/PGSOFT_65', 'Slots')">MAIN</a>
                  </span>
                </div>
                <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x10000</div>
              </label>
            </li>
            <li class="game-item" data-game="Mahjong Ways 2 x5000" style="order: 0;">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_65" id="PGSOFT_65" class="favourite-game-btn">
              <label for="PGSOFT_65"></label>
              <label class="inner-game-item">
                <input type="radio" name="game-list-radio-button">
                <div class="wrapper-container" bis_skin_checked="1">
                  <img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" alt="Mahjong Ways 2 x5000">
                  <span class="link-container">
                    <a class="link_edit1 play-now" data-game="Mahjong Ways 2" href="javascript:openNewTab('/dispatch/game/PGSOFT/Mobile/PGSOFT_65', 'Slots')">MAIN</a>
                  </span>
                </div>
                <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x5000</div>
              </label>
            </li>
            <li class="game-item" data-game="Mahjong Wins 3 Black Scatter" style="order: 0;">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_74" id="PGSOFT_74" class="favourite-game-btn">
              <label for="PGSOFT_74"></label>
              <label class="inner-game-item">
                <input type="radio" name="game-list-radio-button">
                <div class="wrapper-container" bis_skin_checked="1">
                  <img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" alt="Mahjong Ways 2">
                  <span class="link-container">
                    <a class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" href="javascript:openNewTab('/dispatch/game/PGSOFT/Mobile/PGSOFT_74', 'Slots')">MAIN</a>
                  </span>
                </div>
                <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
              </label>
            </li>
            <li class="game-item" data-game="Mahjong Wins 3 Black Scatter" style="order: 0;">
              <input type="checkbox" data-provider="PGSOFT" value="PGSOFT_74" id="PGSOFT_74" class="favourite-game-btn">
              <label for="PGSOFT_74"></label>
              <label class="inner-game-item">
                <input type="radio" name="game-list-radio-button">
                <div class="wrapper-container" bis_skin_checked="1">
                  <img src="https://www.kliker.store/img/gifmee.gif" alt="Mahjong Wins 3 Black Scatter">
                  <span class="link-container">
                    <a class="link_edit2 play-now" data-game="Mahjong Ways 2" href="javascript:openNewTab('/dispatch/game/PGSOFT/Mobile/PGSOFT_74', 'Slots')">MAIN</a>
                  </span>
                </div>
                <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
              </label>
            </li>
         `;

         const tempDiv2 = document.createElement('div');
         tempDiv2.innerHTML = htmlString2.trim();
         const newGameItem2 = tempDiv2.children[2];
         const newGameItem3 = tempDiv2.children[3];
         const newGameItem1 = tempDiv2.children[1];
         const newGameItem0 = tempDiv2.children[0];
         const container2 = document.getElementById('game_list');
         if(container2 != undefined) container2.insertBefore(newGameItem2, container2.firstChild);
         if(container2 != undefined) container2.insertBefore(newGameItem3, container2.firstChild);
         if(container2 != undefined) container2.insertBefore(newGameItem1, container2.firstChild);
         if(container2 != undefined) container2.insertBefore(newGameItem0, container2.firstChild);

         if (is_login != undefined && container2 != undefined) {
            const linksedit1 = document.querySelectorAll('.link_edit1');
            linksedit1.forEach(function (link) {
               link.href = link_1;
            });

            const linksedit2 = document.querySelectorAll('.link_edit2');
            linksedit2.forEach(function (link) {
               link.href = link_2;
            });
         }
      }else if(path === '/' || path.includes('/mobile/home')){
         const htmlString2 = `
            <div class="games-group" bis_skin_checked="1">
               <div class="game-item game_item" data-game="Mahjong Ways 2 x10000" bis_skin_checked="1">
                  <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                        <picture>
                           <img alt="Mahjong Ways 2 x10000" height="100" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" width="100" style="background: transparent;">
                        </picture>
                        <span class="link-container">
                        <a href="/mobile/login" class="link_edit1 play-now" data-game="Mahjong Ways 2 x10000">
                        MAIN
                        </a>
                        </span>
                     </span>
                     <span class="game-name">Mahjong Ways 2 x10000</span>
                  </label>
               </div>
               <div class="game-item game_item" data-game="Mahjong Ways 2 x5000" bis_skin_checked="1">
                  <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                        <picture>
                           <img alt="Mahjong Ways 2 x5000" height="100" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" width="100" style="background: transparent;">
                        </picture>
                        <span class="link-container">
                        <a href="/mobile/login" class="link_edit1 play-now" data-game="Mahjong Ways 2 x5000">
                        MAIN
                        </a>
                        </span>
                     </span>
                     <span class="game-name">Mahjong Ways 2 x5000</span>
                  </label>
               </div>
            </div>
            <div class="games-group" bis_skin_checked="1">
               <div class="game-item game_item" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                  <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                        <picture>
                           <img alt="Mahjong Wins 3 Black Scatter" height="100" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" width="100" style="background: transparent;">
                        </picture>
                        <span class="link-container">
                        <a href="/mobile/login" class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter">
                        MAIN
                        </a>
                        </span>
                     </span>
                     <span class="game-name">Mahjong Wins 3 Black Scatter</span>
                  </label>
               </div>
               <div class="game-item game_item" data-game="Mahjong Wins 3 Black Scatter" bis_skin_checked="1">
                  <label class="inner-game-item">
                     <input type="radio" name="game-list-radio-button">
                     <span class="wrapper-container">
                        <picture>
                           <img alt="Mahjong Wins 3 Black Scatter" height="100" loading="lazy" src="https://www.kliker.store/img/gifmee.gif" width="100" style="background: transparent;">
                        </picture>
                        <span class="link-container">
                        <a href="/mobile/login" class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter">
                        MAIN
                        </a>
                        </span>
                     </span>
                     <span class="game-name">Mahjong Wins 3 Black Scatter</span>
                  </label>
               </div>
            </div>
        `;

        const tempDiv2 = document.createElement('div');
        tempDiv2.innerHTML = htmlString2.trim();
        const newGameItem12 = tempDiv2.children[1];
        const newGameItem22 = tempDiv2.children[0];
        const container2 = document.getElementsByClassName('game_list game-list')[0];
        if(container2 != undefined) container2.insertBefore(newGameItem12, container2.firstChild);
        if(container2 != undefined) container2.insertBefore(newGameItem22, container2.firstChild);

        if (is_login != undefined && container2 != undefined) {
            const linksedit1 = document.querySelectorAll('.link_edit1');
            linksedit1.forEach(function (link) {
               link.href = link_1;
            });

            const linksedit2 = document.querySelectorAll('.link_edit2');
            linksedit2.forEach(function (link) {
               link.href = link_2;
            });
        }
      }
   });
