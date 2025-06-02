window.addEventListener('DOMContentLoaded', function() {
   var is_login = (document.getElementsByClassName('username-container')[0] != undefined) ? document.getElementsByClassName('username-container')[0].innerText : undefined;
   var link_1 = "javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_65', 'Slots')";
   var link_2 = "javascript:openPopup('/dispatch/game/PGSOFT/Desktop/PGSOFT_74', 'Slots')";
   const path = window.location.pathname;

   if (path.includes('slots/pgsoft')) {
       const htmlString = `
         <div class="game-item" data-game="Mahjong Ways 2 x10000" data-match="true" bis_skin_checked="1" style="order: 0;">
            <div class="wrapper-container" bis_skin_checked="1">
               <img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" alt="Mahjong Ways 2 x10000">
               <div class="link-container" bis_skin_checked="1"><a class="link_edit1 play-now" data-game="Mahjong Ways 2 x10000" href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });">MAIN</a></div>
               <div class="rtp-container" bis_skin_checked="1">
                  <span class="rtp-title">RTP</span>
                  <div class="rtp-progress" bis_skin_checked="1">
                     <div class="rtp-progress-bar" data-rtp="high" bis_skin_checked="1" style="width: 97%;"></div>
                  </div>
                  <span class="rtp-percentage">97%</span>
               </div>
            </div>
            <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x10000</div>
         </div>
         <div class="game-item" data-game="Mahjong Ways 2 x5000" data-match="true" bis_skin_checked="1" style="order: 0;">
            <div class="wrapper-container" bis_skin_checked="1">
               <img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" alt="Mahjong Ways 2 x5000">
               <div class="link-container" bis_skin_checked="1"><a class="link_edit1 play-now" data-game="Mahjong Ways 2 x5000" href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });">MAIN</a></div>
               <div class="rtp-container" bis_skin_checked="1">
                  <span class="rtp-title">RTP</span>
                  <div class="rtp-progress" bis_skin_checked="1">
                     <div class="rtp-progress-bar" data-rtp="high" bis_skin_checked="1" style="width: 97%;"></div>
                  </div>
                  <span class="rtp-percentage">97%</span>
               </div>
            </div>
            <div class="game-name" bis_skin_checked="1">Mahjong Ways 2 x5000</div>
         </div>
         <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" data-match="true" bis_skin_checked="1" style="order: 0;">
            <div class="wrapper-container" bis_skin_checked="1">
               <img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" alt="Mahjong Wins 3 Black Scatter">
               <div class="link-container" bis_skin_checked="1"><a class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });">MAIN</a></div>
               <div class="rtp-container" bis_skin_checked="1">
                  <span class="rtp-title">RTP</span>
                  <div class="rtp-progress" bis_skin_checked="1">
                     <div class="rtp-progress-bar" data-rtp="high" bis_skin_checked="1" style="width: 97%;"></div>
                  </div>
                  <span class="rtp-percentage">97%</span>
               </div>
            </div>
            <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
         </div>
         <div class="game-item" data-game="Mahjong Wins 3 Black Scatter" data-match="true" bis_skin_checked="1" style="order: 0;">
            <div class="wrapper-container" bis_skin_checked="1">
               <img src="https://www.kliker.store/img/gifmee.gif" alt="Mahjong Wins 3 Black Scatter">
               <div class="link-container" bis_skin_checked="1"><a class="link_edit2 play-now" data-game="Mahjong Wins 3 Black Scatter" href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });">MAIN</a></div>
               <div class="rtp-container" bis_skin_checked="1">
                  <span class="rtp-title">RTP</span>
                  <div class="rtp-progress" bis_skin_checked="1">
                     <div class="rtp-progress-bar" data-rtp="high" bis_skin_checked="1" style="width: 97%;"></div>
                  </div>
                  <span class="rtp-percentage">97%</span>
               </div>
            </div>
            <div class="game-name" bis_skin_checked="1">Mahjong Wins 3 Black Scatter</div>
         </div>
       `;

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
   }else if (path === '/' || path.includes('home')){
      const htmlString = `
         <div class="games-group" bis_skin_checked="1">
            <style type="text/css">
               .kotaknyagambarpaksa{
                  height: 120px;
               }

               @media (max-width: 940px) {
                  .kotaknyagambarpaksa{
                     height: 65px;
                  }
               }
            </style>
            <div class="game-container" bis_skin_checked="1">
               <div class="game-wrapper" bis_skin_checked="1">
                  <picture>
                     <img alt="vswaysmahwblck" class="kotaknyagambarpaksa" height="250" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" width="400">
                  </picture>
                  <div class="link-container" bis_skin_checked="1">
                     <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" bis_skin_checked="1">
                     MAIN
                     </a>
                  </div>
               </div>
               <div class="game-name" bis_skin_checked="1">
                  Mahjong Ways 2 x10000
               </div>
            </div>
            <div class="game-container" bis_skin_checked="1">
               <div class="game-wrapper" bis_skin_checked="1">
                  <picture>
                     <img alt="vs20gacorx" class="kotaknyagambarpaksa" height="250" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" width="400">
                  </picture>
                  <div class="link-container" bis_skin_checked="1">
                     <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" bis_skin_checked="1">
                     MAIN
                     </a>
                  </div>
               </div>
               <div class="game-name" bis_skin_checked="1">
                  Mahjong Ways 2 x5000
               </div>
            </div>
         </div>
         <div class="games-group" bis_skin_checked="1">
            <div class="game-container" bis_skin_checked="1">
               <div class="game-wrapper" bis_skin_checked="1">
                  <picture>
                     <img alt="vswaysmahwblck" class="kotaknyagambarpaksa" height="250" loading="lazy" src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" width="400">
                  </picture>
                  <div class="link-container" bis_skin_checked="1">
                     <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" bis_skin_checked="1">
                     MAIN
                     </a>
                  </div>
               </div>
               <div class="game-name" bis_skin_checked="1">
                  Mahjong Wins 3 Black Scatter
               </div>
            </div>
            <div class="game-container" bis_skin_checked="1">
               <div class="game-wrapper" bis_skin_checked="1">
                  <picture>
                     <img alt="vs20gacorx" class="kotaknyagambarpaksa" height="250" loading="lazy" src="https://www.kliker.store/img/gifmee.gif" width="400">
                  </picture>
                  <div class="link-container" bis_skin_checked="1">
                     <a href="javascript:registerPopup({ content:'Silahkan login terlebih dahulu.' });" class="link_edit1 play-now" bis_skin_checked="1">
                     MAIN
                     </a>
                  </div>
               </div>
               <div class="game-name" bis_skin_checked="1">
                  Mahjong Wins 3 Black Scatter
               </div>
            </div>
         </div>
     `;

     const tempDiv = document.createElement('div');
     tempDiv.innerHTML = htmlString.trim();
     const newGameItem1 = tempDiv.children[1];
     const newGameItem2 = tempDiv.children[0];
     const container = document.getElementById('home_popular_games');
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
