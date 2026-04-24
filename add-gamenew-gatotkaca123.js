window.addEventListener('DOMContentLoaded', function() {
    let authorMeta = document.querySelector('meta[name="author"]');
    let author = authorMeta ? authorMeta.getAttribute("content") : "Tidak ada author";

    function getRTPValue(id) {
        const key = "rtpData_" + id;
        const now = Date.now();
        const saved = JSON.parse(localStorage.getItem(key));
        let randomPercent;
        if (saved) {
            const elapsed = now - saved.timestamp;
            if (elapsed < 20 * 60 * 1000) {
                // masih dalam 20 menit
                randomPercent = saved.value;
            } else {
                // sudah lewat 20 menit
                randomPercent = Math.floor(Math.random() * (98 - 80 + 1)) + 80;
                localStorage.setItem(key, JSON.stringify({
                    value: randomPercent,
                    timestamp: now
                }));
            }
        } else {
            // pertama kali
            randomPercent = Math.floor(Math.random() * (98 - 80 + 1)) + 80;
            localStorage.setItem(key, JSON.stringify({
                value: randomPercent,
                timestamp: now
            }));
        }
        return randomPercent;
    }
    if ((window.location.pathname.includes("/") || window.location.pathname.includes("home")) && author.includes(atob("R0FUT1RLQUNBMTIz").toUpperCase())) {
        const htmlString = `
	    	<div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Gates of Olym..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Gates of Olympus 1000" title="Gates of Olympus 1000" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_olympus25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_olympus25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_olympus25_gatot.gif">
                </div>
            </div>
            <div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Starlight Pri..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Starlight Princess Super Scatter" title="Starlight Princess Super Scatter" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/startligh_princcess_25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/startligh_princcess_25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/startligh_princcess_25_gatot.gif">
                </div>
            </div>
            <div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Gates Of Gat..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Gates Of Gatot Kaca Super Scatter" title="Gates Of Gatot Kaca Super Scatter" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_147/1766115780_1.gif 100w, https://imggalery.com/uploads/user_61/album_147/1766115780_1.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_147/1766115780_1.gif">
                </div>
            </div>
            <div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Mahjong Win..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Mahjong Wins 3 Super Scatter" title="Mahjong Wins 3 Super Scatter" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong_wins_25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong_wins_25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong_wins_25_gatot.gif">
                </div>
            </div>

            <div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Mahjong Ways..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Mahjong Ways" title="Mahjong Ways" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_139/1760439240_1.gif 100w, https://imggalery.com/uploads/user_61/album_139/1760439240_1.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_139/1760439240_1.gif">
                </div>
            </div>
            <div class="slot-game" bis_skin_checked="1">
                <div class="slot-name" bis_skin_checked="1">Mahjong Ways 2..</div>
                <div class="slot-img" bis_skin_checked="1">
                    <img loading="eager" class="img-responsive img-center" alt="Mahjong Ways 2" title="Mahjong Ways 2" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_139/1760439360.gif 100w, https://imggalery.com/uploads/user_61/album_139/1760439360.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_139/1760439360.gif">
                </div>
            </div>
            <div class="slot-game" bis_skin_checked="1">
	            <div class="slot-name" bis_skin_checked="1">Wild Bounty Show..</div>
	            <div class="slot-img" bis_skin_checked="1">
	                <img loading="eager" class="img-responsive img-center" alt="Wild Bounty Showdown Super" title="Wild Bounty Showdown Super" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_147/1766115780_3.gif 100w, https://imggalery.com/uploads/user_61/album_147/1766115780_3.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_147/1766115780_3.gif">
	            </div>
	        </div>
	        <div class="slot-game" bis_skin_checked="1">
	            <div class="slot-name" bis_skin_checked="1">Wild Bandi..</div>
	            <div class="slot-img" bis_skin_checked="1">
	                <img loading="eager" class="img-responsive img-center" alt="Wild Bandito Super" title="Wild Bandito Super" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_147/1766115780.gif 100w, https://imggalery.com/uploads/user_61/album_147/1766115780.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_147/1766115780.gif">
	            </div>
	        </div>
            <div class="slot-game" bis_skin_checked="1">
	            <div class="slot-name" bis_skin_checked="1">Lucky Neko..</div>
	            <div class="slot-img" bis_skin_checked="1">
	                <img loading="eager" class="img-responsive img-center" alt="Lucky Neko Super" title="Lucky Neko Super" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_139/1760439420.gif 100w, https://imggalery.com/uploads/user_61/album_139/1760439420.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_139/1760439420.gif">
	            </div>
	        </div>
	        <div class="slot-game" bis_skin_checked="1">
	            <div class="slot-name" bis_skin_checked="1">Super Swe..</div>
	            <div class="slot-img" bis_skin_checked="1">
	                <img loading="eager" class="img-responsive img-center" alt="Super Sweet Bonanza x10000" title="Super Sweet Bonanza x10000" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/sweet_bonanza_25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/sweet_bonanza_25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/sweet_bonanza_25_gatot.gif">
	            </div>
	        </div>

	        <div class="slot-game" bis_skin_checked="1">
	            <div class="slot-name" bis_skin_checked="1">Treasu..</div>
	            <div class="slot-img" bis_skin_checked="1">
	                <img loading="eager" class="img-responsive img-center" alt="Treasures of Aztec Golden Scatter" title="Treasures of Aztec Golden Scatter" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotaztec.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotaztec.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotaztec.gif">
	            </div>
	        </div>

	        <div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Gates..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Gates Of Hades Super Scatter" title="Gates Of Hades Super Scatter" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_hades_25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_hades_25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_hades_25_gatot.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Wisdo..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Wisdom Of Athena X10.000" title="Wisdom Of Athena X10.000" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/wisdom_athena_25_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/wisdom_athena_25_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/wisdom_athena_25_gatot.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Fort..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Fortune of Olympus Super Scatter" title="Fortune of Olympus Super Scatter" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_147/1766115720_2.gif 100w, https://imggalery.com/uploads/user_61/album_147/1766115720_2.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_147/1766115720_2.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Gate..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Gates Of Olympus X888" title="Gates Of Olympus X888" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/gates_of_ozzo_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/gates_of_ozzo_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gates_of_ozzo_gatot.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Sugar..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Sugar Rush Super Scatter x15000" title="Sugar Rush Super Scatter x15000" width="200" height="200" srcset="https://kitasolusimarketingmu.github.io/sewaankamu/images/sugar_rush_scatter_gatot.gif 100w, https://kitasolusimarketingmu.github.io/sewaankamu/images/sugar_rush_scatter_gatot.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/sugar_rush_scatter_gatot.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Mahj..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Mahjong Ways Super Maxwin" title="Mahjong Ways Super Maxwin" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_156/1770924960.gif 100w, https://imggalery.com/uploads/user_61/album_156/1770924960.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_156/1770924960.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Luck..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Lucky Neko More Ways" title="Lucky Neko More Ways" width="200" height="200" srcset="https://imggalery.com/uploads/user_61/album_159/1771439280.gif 100w, https://imggalery.com/uploads/user_61/album_159/1771439280.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://imggalery.com/uploads/user_61/album_159/1771439280.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Cais..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="Caishen wins scatter x500" title="Caishen wins scatter x500" width="200" height="200" srcset="https://embedin.site/media/assets-gatotkaca123/117/72.gif 100w, https://embedin.site/media/assets-gatotkaca123/117/72.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://embedin.site/media/assets-gatotkaca123/117/72.gif">
			    </div>
			</div>

			<div class="slot-game" bis_skin_checked="1">
			    <div class="slot-name" bis_skin_checked="1">Wwg..</div>
			    <div class="slot-img" bis_skin_checked="1">
			        <img loading="eager" class="img-responsive img-center" alt="WWG GOLDEN SCATTER" title="WWG GOLDEN SCATTER" width="200" height="200" srcset="https://embedin.site/media/assets-gatotkaca123/116/75.gif 100w, https://embedin.site/media/assets-gatotkaca123/116/75.gif 200w" sizes="(max-width:576px) 50px, 200px" src="https://embedin.site/media/assets-gatotkaca123/116/75.gif">
			    </div>
			</div>
	    `;
        if (document.getElementsByClassName('slot-body').length > 0) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString.trim();
            var games = document.getElementsByClassName('slot-body')[0];
            var games1 = document.getElementsByClassName('slot-body')[1];
            const nodes = Array.from(tempDiv.children);
            if (games1 != undefined) {
                const firstChild = games.children[0];
                games.insertBefore(nodes[19], firstChild);
                games.insertBefore(nodes[0], firstChild);
                games.insertBefore(nodes[1], firstChild);
                games.insertBefore(nodes[2], firstChild);
                games.insertBefore(nodes[3], firstChild);
                games.insertBefore(nodes[9], firstChild);
                games.insertBefore(nodes[11], firstChild);
                games.insertBefore(nodes[12], firstChild);
                games.insertBefore(nodes[13], firstChild);
                games.insertBefore(nodes[14], firstChild);
                games.insertBefore(nodes[15], firstChild);
            }
            if (games != undefined) {
                const firstChild = games1.children[0];
                games1.insertBefore(nodes[18], firstChild);
                games1.insertBefore(nodes[17], firstChild);
                games1.insertBefore(nodes[16], firstChild);
                games1.insertBefore(nodes[4], firstChild);
                games1.insertBefore(nodes[5], firstChild);
                games1.insertBefore(nodes[6], firstChild);
                games1.insertBefore(nodes[7], firstChild);
                games1.insertBefore(nodes[8], firstChild);
                games1.insertBefore(nodes[10], firstChild);
            }
        }
    }


    if ((window.location.href.includes("slot/pgsoft") || window.location.href.includes("games/slot?gc=32-3") || window.location.href.includes("?gc=32-3")) && author.includes(atob("R0FUT1RLQUNBMTIz").toUpperCase())) {
        const htmlString3 = `
		    <style>
			  /* container flex */
			  .gameContainer {
			    display: flex;
			    flex-wrap: wrap;
			    gap: 16px;
			    justify-content: center;
			  }

			  .gameContent {
			    flex: 0 0 calc(25% - 16px); /* 4 kolom */
			    max-width: 105px;
			    background: #1e1e1e;
			    border-radius: 16px;
			    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
			    text-align: center;
			    overflow: hidden;
			    transition: transform 0.2s ease, box-shadow 0.2s ease;
				float: left;
    			margin: 5px;
			  }
			  .gameContent:hover {
			    transform: translateY(-6px);
			    box-shadow: 0 6px 18px rgba(0,0,0,0.8);
			  }

			  .tnimg img {
			    width: 100%;
			    height: auto;
			    border-bottom: 1px solid #333;
			  }

			  .tntitle {
			    font-weight: bold;
			    font-size: 14px;
			    margin: 10px 0 5px;
			    color: #fff;
			  }

			  /* switch */
			  .ai-switch {
			    position: relative;
			    display: inline-block;
			    width: 50px;
			    height: 26px;
			  }
			  .ai-switch input {
			    opacity: 0;
			    width: 0;
			    height: 0;
			  }
			  .ai-slider {
			    position: absolute;
			    cursor: pointer;
			    top: 0; left: 0; right: 0; bottom: 0;
			    background-color: #555;
			    transition: .3s;
			    border-radius: 34px;
			  }
			  .ai-slider:before {
			    position: absolute;
			    content: "";
			    height: 20px; width: 20px;
			    left: 3px;
			    bottom: 3px;
			    background-color: #fff;
			    transition: .3s;
			    border-radius: 50%;
			  }
			  input:checked + .ai-slider {
			    background-color: #4CAF50;
			  }
			  input:checked + .ai-slider:before {
			    transform: translateX(24px);
			  }

			  .label-text {
			    display: block;
			    margin-top: 6px;
			    font-size: 13px;
			    color: #4CAF50;
			    font-weight: 600;
			    padding-bottom: 12px;
			  }

			  /* responsif */
			  @media (max-width: 768px) {
			    .gameContent {
			      flex: 0 0 calc(50% - 16px); /* 2 kolom */
			    }
			  }
			  @media (max-width: 480px) {
			    .gameContent {
			      flex: 0 0 100%; /* 1 kolom */
			    }
			  }
			</style>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286360.png" alt="Mahjong Ways Super">
			  </div>
			  <div class="tntitle">Mahjong Ways Super</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x500</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286480.png" alt="Mahjong Ways Super 2">
			  </div>
			  <div class="tntitle">Mahjong Ways Super 2</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x1000</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286420.png" alt="Wild Bounty Showdown Super">
			  </div>
			  <div class="tntitle">Wild Bounty Showdown</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x100</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286420_1.png" alt="Wild Bounty Showdown Super">
			  </div>
			  <div class="tntitle">Wild Bounty Showdown</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x500</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286480_1.png" alt="Wild Bandito Super">
			  </div>
			  <div class="tntitle">Wild Bandito Super</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x100</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_135/1760286360_1.png" alt="Lucky Neko Super">
			  </div>
			  <div class="tntitle">Lucky Neko Super</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x100</span>
			</div>
	    `;
        if (document.getElementById('divGame') != undefined) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString3.trim();
            var games = document.getElementById('divGame');
            if (games != undefined) {
                const firstChild = games.children[0];
                games.insertBefore(tempDiv, firstChild);
            }
        }
        const htmlString = `
        <div class="game-box">
            <div class="game-content" data-name="Mahjong Ways Super" data-category="1,2">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahjong Wa...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://imggalery.com/uploads/user_61/album_139/1760439240_1.gif">
                    <div class="eventtag-container"></div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Mahjong Ways 2 Super" data-category="1,2">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahjong Wa...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Mahjong Ways 2 Super" title="Mahjong Ways 2 Super" src="https://imggalery.com/uploads/user_61/album_139/1760439360.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Wild Bounty Showdown Super" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wild Bount...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Wild Bounty Showdown Super" title="Wild Bounty Showdown Super" src="https://imggalery.com/uploads/user_61/album_147/1766115780_3.gif">
                    <div class="eventtag-container"></div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Wild Bandito Super" data-category="1,2">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wild Bandi...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Wild Bandito Super" title="Wild Bandito Super" src="https://imggalery.com/uploads/user_61/album_147/1766115780.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Lucky Neko Super" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Lucky Neko</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Lucky Neko Super" title="Lucky Neko Super" src="https://imggalery.com/uploads/user_61/album_139/1760439420.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>

       	<div class="game-box">
            <div class="game-content" data-name="Treasures of Aztec Golden Scatter" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Treasu...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Treasures of Aztec Golden Scatter" title="Treasures of Aztec Golden Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotaztec.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
	    <div class="game-box">
            <div class="game-content" data-name="Mahjong Ways Super Maxwin" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahj...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Mahjong Ways Super Maxwin" title="Mahjong Ways Super Maxwin" src="https://imggalery.com/uploads/user_61/album_156/1770924960.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Mahjong Ways Super Maxwin" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Luck...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Lucky Neko More Ways" title="Lucky Neko More Ways" src="https://imggalery.com/uploads/user_61/album_159/1771439280.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
        `;



        const htmlString2 = `
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3442", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Mahjong Ways Super" data-link="32-3-3442" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahjong Way..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://imggalery.com/uploads/user_61/album_139/1760439240_1.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(5) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(5) < 40 ? 'danger' : (getRTPValue(5) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(5) + `%;"></div></div></div>
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3443", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Mahjong Ways Super 2" data-link="32-3-3443" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahjong Way..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Mahjong Ways Super 2" title="Mahjong Ways Super 2" src="https://imggalery.com/uploads/user_61/album_139/1760439360.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(6) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(6) < 40 ? 'danger' : (getRTPValue(6) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(6) + `%;"></div></div></div>
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-21120", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Wild Bounty Showdown Super" data-link="32-3-21120" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wild Bounty S..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Wild Bounty Showdown Super" title="Wild Bounty Showdown Super" src="https://imggalery.com/uploads/user_61/album_147/1766115780_3.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(7) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(7) < 40 ? 'danger' : (getRTPValue(7) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(7) + `%;"></div></div></div>
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3454", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Wild Bandito Super" data-link="32-3-3454" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wild Bandi..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Wild Bandito Super" title="Wild Bandito Super" src="https://imggalery.com/uploads/user_61/album_147/1766115780.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(8) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(8) < 40 ? 'danger' : (getRTPValue(8) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(8) + `%;"></div></div></div>
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3445", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Lucky Neko Super" data-link="32-3-3445" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Lucky Ne..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Lucky Neko Super" title="Lucky Neko Super" src="https://imggalery.com/uploads/user_61/album_139/1760439420.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(9) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(9) < 40 ? 'danger' : (getRTPValue(9) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(9) + `%;"></div></div></div>
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3444", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Treasures of Aztec Golden Scatter" data-link="32-3-3444" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Treasu...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Treasures of Aztec Golden Scatter" title="Treasures of Aztec Golden Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotaztec.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(11) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(11) < 40 ? 'danger' : (getRTPValue(11) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(11) + `%;"></div></div></div>
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3443", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Lucky Neko Super" data-link="32-3-3443" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahj...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Mahjong Ways Super Maxwin" src="https://imggalery.com/uploads/user_61/album_156/1770924960.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(16) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(16) < 40 ? 'danger' : (getRTPValue(16) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(16) + `%;"></div></div></div>
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3445", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Lucky Neko More Ways" data-link="32-3-3445" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Luck...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Lucky Neko More Ways" src="https://imggalery.com/uploads/user_61/album_159/1771439280.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(17) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(17) < 40 ? 'danger' : (getRTPValue(17) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(17) + `%;"></div></div></div>
	    
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=32-3", "/gamepage?gg=32-3")+"-3449", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Caishen wins scatter x500" data-link="32-3-3449" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 151px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Cais...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Caishen wins scatter x500" src="https://embedin.site/media/assets-gatotkaca123/117/72.gif">
                    <div class="eventtag-container"></div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(18) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(18) < 40 ? 'danger' : (getRTPValue(18) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(18) + `%;"></div></div></div>
	    
	    `;
        const isVisible = document.getElementsByClassName("playercredit").length > 0;
        if (isVisible) {
            setTimeout(function() {
                var iframe = document.getElementById("iframeGame");
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                var games = doc.querySelector('.gameItemContent.game-lists');
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlString2.trim();
                const nodes = Array.from(tempDiv.children);
                if (games) {
                    const firstChild = games.children[0];
                    games.insertBefore(nodes[8], firstChild);
                    games.insertBefore(nodes[7], firstChild);
                    games.insertBefore(nodes[6], firstChild);
                    games.insertBefore(nodes[0], firstChild);
                    games.insertBefore(nodes[1], firstChild);
                    games.insertBefore(nodes[2], firstChild);
                    games.insertBefore(nodes[3], firstChild);
                    games.insertBefore(nodes[4], firstChild);
                    games.insertBefore(nodes[5], firstChild);
                }
            }, 5000);
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString.trim();
            var games = document.getElementsByClassName('game-lists slot-game-lists')[0];
            const nodes = Array.from(tempDiv.children);
            if (games != undefined) {
                const firstChild = games.children[0];
                games.insertBefore(nodes[8], firstChild);
                games.insertBefore(nodes[7], firstChild);
                games.insertBefore(nodes[6], firstChild);
                games.insertBefore(nodes[0], firstChild);
                games.insertBefore(nodes[1], firstChild);
                games.insertBefore(nodes[2], firstChild);
                games.insertBefore(nodes[3], firstChild);
                games.insertBefore(nodes[4], firstChild);
                games.insertBefore(nodes[5], firstChild);
            }
        }
    }




    if ((window.location.href.includes("slot/pragmaticplay") || window.location.href.includes("games/slot?gc=24-3") || window.location.href.includes("?gc=24-3")) && author.includes(atob("R0FUT1RLQUNBMTIz").toUpperCase())) {
        const htmlString3 = `
		    <div class="ai-cheat-container" bis_skin_checked="1">
			   <style>
			      .ai-cheat-container{
			      display:grid; gap:10px; margin:8px 0 14px;
			      grid-template-columns:repeat(3, minmax(0, 1fr));
			      box-sizing:border-box;
			      }
			      .ai-cheat-box{
			      position:relative; box-sizing:border-box;
			      display:flex; flex-direction:column; align-items:center; justify-content:flex-start;
			      padding:54px 10px 10px;  
			      background:transparent; border-radius:14px; min-height:150px;
			      }
			      .ai-cheat-box::before,
			      .ai-cheat-box::after{
			      content:""; position:absolute; pointer-events:none; border-radius:14px;
			      }
			      .ai-cheat-box::before{
			      inset:4px 6px; border:1px solid rgba(255,255,255,.55);
			      }
			      .ai-cheat-box::after{
			      inset:1px 3px; border:1px solid rgba(255,255,255,.22);
			      }
			      .ai-topbar{
			      position:absolute; top:6px; left:50%; transform:translateX(-50%);
			      display:flex; flex-direction:column; align-items:center; gap:3px; z-index:3;
			      }
			      .ai-badge{
			      padding:1px 5px; border-radius:999px; font-size:9px; line-height:1;
			      font-weight:800; letter-spacing:.2px; color:#ffffff; background:#36d31c; 
			      box-shadow:0 0 0 1px rgba(0,0,0,.08);
			      }
			      .ai-locked .ai-badge{ background:#36d31c; color:#fff; }
			      .ai-switch{ position:relative; width:36px; height:20px; display:inline-block; }
			      .ai-switch input{ opacity:0; width:0; height:0; }
			      .ai-slider{
			      position:absolute; inset:0; cursor:pointer; background:#bfbfbf; border-radius:14px;
			      transition:background .2s ease;
			      box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);
			      }
			      .ai-slider:before{
			      content:""; position:absolute; top:2px; left:2px; width:16px; height:16px;
			      background:#fff; border-radius:50%; transition:transform .2s ease;
			      box-shadow:0 1px 2px rgba(0,0,0,.2);
			      }
			      .ai-switch input:checked + .ai-slider{ background:#22c55e; }
			      .ai-switch input:checked + .ai-slider:before{ transform:translateX(16px); }
			      .ai-cheat-image{ width:56px; height:56px; object-fit:cover; border-radius:10px; user-select:none; }
			      .ai-cheat-name{
			      margin:8px 2px 0; text-align:center; color:#fff; font-weight:700;
			      font-size:14px; line-height:1.25; max-width:100%;
			      white-space:normal; overflow:visible; text-overflow:clip;
			      }
			   </style>
			   <div class="ai-cheat-box" bis_skin_checked="1">
			      <div class="ai-topbar" bis_skin_checked="1">
			         <span class="ai-badge">Aktifkan</span>
			         <label class="ai-switch">
			         <input type="checkbox" id="cheat1">
			         <span class="ai-slider"></span>
			         </label>
			      </div>
			      <img src="https://imggalery.com/uploads/user_61/album_135/1760289360.png" alt="x5000" class="ai-cheat-image">
			      <p class="ai-cheat-name">x5000</p>
			   </div>
			   <div class="ai-cheat-box ai-locked" bis_skin_checked="1">
			      <div class="ai-topbar" bis_skin_checked="1">
			         <span class="ai-badge">Aktifkan</span>
			         <label class="ai-switch">
			         <input type="checkbox" id="cheat2">
			         <span class="ai-slider"></span>
			         </label>
			      </div>
			      <img src="https://imggalery.com/uploads/user_61/album_135/1760289300.png" alt="x10000" class="ai-cheat-image">
			      <p class="ai-cheat-name">x10000</p>
			   </div>
			   <div class="ai-cheat-box ai-locked" bis_skin_checked="1">
			      <div class="ai-topbar" bis_skin_checked="1">
			         <span class="ai-badge">Aktifkan</span>
			         <label class="ai-switch">
			         <input type="checkbox" id="cheat3">
			         <span class="ai-slider"></span>
			         </label>
			      </div>
			      <img src="https://imggalery.com/uploads/user_61/album_135/1760289360_1.png" alt="Super Scatter" class="ai-cheat-image">
			      <p class="ai-cheat-name">Super Scatter</p>
			   </div>
			</div>
	    `;

      if (document.getElementById('divGame') != undefined) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlString3.trim();
          var games = document.getElementById('divGame');
          if (games != undefined) {
              const firstChild = games.children[0];
              games.insertBefore(tempDiv, firstChild);
          }
      }
      
      const htmlString = `
	    <div class="game-box" bis_skin_checked="1">
            <div class="game-content" data-name="Gates of Olympus Super Scatter" data-category="1,2,8" bis_skin_checked="1">
                <div class="tnhover" bis_skin_checked="1" style="line-height: 119px; display: none;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle" bis_skin_checked="1">Gates of O...</div>
                <div class="tnimg" data-show="1" style="display: block;" bis_skin_checked="1">
                    <img class="img-responsive img-center" alt="Gates of Olympus Super Scatter" title="Gates of Olympus Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_olympus25_gatot.gif">
                    <div class="eventtag-container" bis_skin_checked="1">
                        
                    </div>
                </div>
            </div>
        </div>
       	<div class="game-box" bis_skin_checked="1">
            <div class="game-content" data-name="Gates of Gatot Kaca Super Scatter" data-category="1,2,8" bis_skin_checked="1">
                <div class="tnhover" bis_skin_checked="1" style="line-height: 119px; display: none;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle" bis_skin_checked="1">Gates of G...</div>
                <div class="tnimg" data-show="1" style="display: block;" bis_skin_checked="1">
                    <img class="img-responsive img-center" alt="Gates of Gatot Kaca Super Scatter" title="Gates of Gatot Kaca Super Scatter" src="https://imggalery.com/uploads/user_61/album_147/1766115780_1.gif">
                    <div class="eventtag-container" bis_skin_checked="1">
                        
                    </div>
                </div>
            </div>
        </div>
       	<div class="game-box" bis_skin_checked="1">
            <div class="game-content" data-name="Starlight Princess Super Scatter" data-category="1,2,3,8" bis_skin_checked="1">
                <div class="tnhover" bis_skin_checked="1" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle" bis_skin_checked="1">Starlight ...</div>
                <div class="tnimg" data-show="1" style="display: block;" bis_skin_checked="1">
                    <img class="img-responsive img-center" alt="Starlight Princess Super Scatter" title="Starlight Princess Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/startligh_princcess_25_gatot.gif">
                    <div class="eventtag-container" bis_skin_checked="1">
                        
                    </div>
                </div>
            </div>
        </div>
       	<div class="game-box" bis_skin_checked="1">
            <div class="game-content" data-name="Mahjong Wins 3 Super Scatter" data-category="1,2,8" bis_skin_checked="1">
                <div class="tnhover" bis_skin_checked="1" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle" bis_skin_checked="1">Mahjong Wi...</div>
                <div class="tnimg" data-show="1" style="display: block;" bis_skin_checked="1">
                    <img class="img-responsive img-center" alt="Mahjong Wins 3 Super Scatter" title="Mahjong Wins 3 Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong_wins_25_gatot.gif">
                    <div class="eventtag-container" bis_skin_checked="1">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Super Sweet Bonanza x10000" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Super Sweet</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Super Sweet Bonanza x10000" title="Super Sweet Bonanza x10000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/sweet_bonanza_25_gatot.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>

        <div class="game-box">
            <div class="game-content" data-name="Gates Of Hades Super Scatter" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates Of...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Gates Of Hades Super Scatter" title="Gates Of Hades Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_hades_25_gatot.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
        <div class="game-box">
            <div class="game-content" data-name="Wisdom Of Athena X10.000" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wisdom Of...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Wisdom Of Athena X10.000" title="Wisdom Of Athena X10.000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/wisdom_athena_25_gatot.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>

        <div class="game-box">
            <div class="game-content" data-name="Fortune of Olympus Super Scatter" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Fortu...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Fortune of Olympus Super Scatter" title="Fortune of Olympus Super Scatter" src="https://imggalery.com/uploads/user_61/album_147/1766115720_2.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
	    
	    <div class="game-box">
            <div class="game-content" data-name="Gates Of Olympus X888" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Gates Of Olympus X888" title="Gates Of Olympus X888" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gates_of_ozzo_gatot.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>

        <div class="game-box">
            <div class="game-content" data-name="Sugar Rush Super Scatter x15000" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="fa-solid fa-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Sugar...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive img-center" alt="Sugar Rush Super Scatter x15000" title="Sugar Rush Super Scatter x15000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/sugar_rush_scatter_gatot.gif">
                    <div class="eventtag-container">
                    </div>
                </div>
            </div>
        </div>
	    `;


        const htmlString2 = `
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-27991", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Gates of Olympus Super Scatter" data-link="24-3-27991" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates of Olym..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Gates of Olympus Super Scatter" title="Gates of Olympus Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_olympus25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(1) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(1) < 40 ? 'danger' : (getRTPValue(1) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(1) + `%;"></div></div></div>

        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-29405", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Starlight Princess Super Scatter" data-link="24-3-29405" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Starlight Pri..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Starlight Princess Super Scatter" title="Starlight Princess Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/startligh_princcess_25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(2) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(2) < 40 ? 'danger' : (getRTPValue(2) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(2) + `%;"></div></div></div>

        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-29616", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Gates of Gatot Kaca Super Scatter" data-link="24-3-29616" data-opentype="2" data-category="1,2,8">
                <div class="tnhover" style="line-height: 119px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates of Gato..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Gates of Gatot Kaca Super Scatter" title="Gates of Gatot Kaca Super Scatter" src="https://imggalery.com/uploads/user_61/album_147/1766115780_1.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(3) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(3) < 40 ? 'danger' : (getRTPValue(3) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(3) + `%;"></div></div></div>

        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-26657", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Mahjong Wins 3 Super Scatter" data-link="24-3-26657" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Mahjong Wins ..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Mahjong Wins 3 Super Scatter" title="Mahjong Wins 3 Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong_wins_25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(4) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(4) < 40 ? 'danger' : (getRTPValue(4) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(4) + `%;"></div></div></div>
	    
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-29011", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Super Sweet Bonanza x10000" data-link="24-3-29011" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Super Swe..</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Super Sweet Bonanza x10000" title="Super Sweet Bonanza x10000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/sweet_bonanza_25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(10) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(10) < 40 ? 'danger' : (getRTPValue(10) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(10) + `%;"></div></div></div>
	    

	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-28131", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Gates Of Hades Super Scatter" data-link="24-3-29011" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates Of...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Gates Of Hades Super Scatter" title="Gates Of Hades Super Scatter" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gates_of_hades_25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(11) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(11) < 40 ? 'danger' : (getRTPValue(11) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(11) + `%;"></div></div></div>

        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-26143", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Wisdom Of Athena X10.000" data-link="24-3-29011" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wisdom Of...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Wisdom Of Athena X10.000" title="Wisdom Of Athena X10.000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/wisdom_athena_25_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(12) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(12) < 40 ? 'danger' : (getRTPValue(12) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(12) + `%;"></div></div></div>
	    
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-29756", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Fortune of Olympus Super Scatter" data-link="24-3-29756" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Fortu...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Fortune of Olympus Super Scatter" title="Fortune of Olympus Super Scatter" src="https://imggalery.com/uploads/user_61/album_147/1766115720_2.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(13) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(13) < 40 ? 'danger' : (getRTPValue(13) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(13) + `%;"></div></div></div>
	    
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-21824", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Gates Of Olympus X888" data-link="24-3-21824" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Gates...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Gates Of Olympus X888" title="Gates Of Olympus X888" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gates_of_ozzo_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(14) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(14) < 40 ? 'danger' : (getRTPValue(14) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(14) + `%;"></div></div></div>
	    
        <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-24257", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Sugar Rush Super Scatter x15000" data-link="24-3-24257" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Sugar...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="Sugar Rush Super Scatter x15000" title="Sugar Rush Super Scatter x15000" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/sugar_rush_scatter_gatot.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(15) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(15) < 40 ? 'danger' : (getRTPValue(15) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(15) + `%;"></div></div></div>
	    
	    <div class="gameitembox game-box" style="">
            <div class="gameContent providerGameContents game-content" onclick='window.open(window.location.href.replace("/gamelobby?gc=24-3", "/gamepage?gg=24-3")+"-28513", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="WWG GOLDEN SCATTER" data-link="24-3-28513" data-opentype="2" data-category="1,2">
                <div class="tnhover" style="line-height: 139px; display: none; opacity: 1;">
                    <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
                </div>
                <div class="tntitle">Wwg...</div>
                <div class="tnimg" data-show="1" style="display: block;">
                    <img class="img-responsive" alt="WWG GOLDEN SCATTER" title="WWG GOLDEN SCATTER" src="https://embedin.site/media/assets-gatotkaca123/116/75.gif">
                    <div class="eventtag-container">
                        
                    </div>
                <img class="img-responsive country-img" src="https://gatotkaca123top.com/assets/images/icon/country/id.svg"></div>
            </div>
        <div class="tnrtp progress"><span>` + getRTPValue(19) + `%</span><div class="progress-bar progress-bar-`+((getRTPValue(19) < 40 ? 'danger' : (getRTPValue(19) < 80 ? 'warning' : 'success')))+`" style="width: ` + getRTPValue(19) + `%;"></div></div></div>
	    
	    `;
        const isVisible = document.getElementsByClassName("playercredit").length > 0;
        if (isVisible) {
            setTimeout(function() {
                var iframe = document.getElementById("iframeGame");
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                var games = doc.querySelector('.gameItemContent.game-lists');
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlString2.trim();
                const nodes = Array.from(tempDiv.children);
                if (games) {
                    const firstChild = games.children[0];
                    games.insertBefore(nodes[10], firstChild);
                    games.insertBefore(nodes[9], firstChild);
                    games.insertBefore(nodes[0], firstChild);
                    games.insertBefore(nodes[1], firstChild);
                    games.insertBefore(nodes[2], firstChild);
                    games.insertBefore(nodes[3], firstChild);
                    games.insertBefore(nodes[4], firstChild);
                    games.insertBefore(nodes[5], firstChild);
                    games.insertBefore(nodes[6], firstChild);
                    games.insertBefore(nodes[7], firstChild);
                    games.insertBefore(nodes[8], firstChild);
                }
            }, 5000);
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString.trim();
            var games = document.getElementsByClassName('game-lists slot-game-lists')[0];
            const nodes = Array.from(tempDiv.children);
            if (games) {
                const firstChild = games.children[0];
                games.insertBefore(nodes[10], firstChild);
                games.insertBefore(nodes[9], firstChild);
                games.insertBefore(nodes[0], firstChild);
                games.insertBefore(nodes[1], firstChild);
                games.insertBefore(nodes[2], firstChild);
                games.insertBefore(nodes[3], firstChild);
                games.insertBefore(nodes[4], firstChild);
                games.insertBefore(nodes[5], firstChild);
                games.insertBefore(nodes[6], firstChild);
                games.insertBefore(nodes[7], firstChild);
                games.insertBefore(nodes[8], firstChild);
            }
        }
    }
});
