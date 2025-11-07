window.addEventListener('DOMContentLoaded', function() {
	const isVisible = document.getElementsByClassName("btn-refresh-wallet").length > 0;
	let authorMeta = document.querySelector('meta[name="author"]');
    let author = authorMeta ? authorMeta.getAttribute("content") : "Tidak ada author";
	if (window.location.href.includes("slots/pgsoft") && document.body.classList.contains("mobile") && author.includes(atob("UkFERU44ODk5").toUpperCase())) {
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
			    max-width: 138px;
			    background: #1e1e1e;
			    border-radius: 16px;
			    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
			    text-align: center;
			    overflow: hidden;
			    transition: transform 0.2s ease, box-shadow 0.2s ease;
				float: left;
    			margin: 2px;
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
			    background-color: #ba3127;
			  }
			  input:checked + .ai-slider:before {
			    transform: translateX(24px);
			  }

			  .label-text {
			    display: block;
			    margin-top: 6px;
			    font-size: 13px;
			    color: #ba3127;
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

			<div class="gameContent" style="margin-left: 20px;">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_108/1760667540_1.png" alt="Mahjong Ways Super">
			  </div>
			  <div class="tntitle">Mahjong Ways Super x500</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x500</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_108/1760667540.png" alt="Mahjong Ways Super 2">
			  </div>
			  <div class="tntitle">Mahjong Ways Super 2 x1000</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas </span>
			</div>

	    `;

	    if (document.getElementsByClassName('sub-games')[0] != undefined && isVisible) {
		    const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString3.trim();
	    	var games = document.getElementsByClassName('sub-games')[0];
			if (games != undefined) {
				const firstChild = games.children[1];
				games.insertBefore(tempDiv, firstChild);
			}
	    }

		const htmlString = `
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Mahjong Ways" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Mahjong Ways Super Scatter x5000', 'https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif' , '65', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif" src="https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif" *ngif="showEle">
			   </div>
			   <h5 data-title="Mahjong Ways">Mahjong Ways Super Scatter x5000</h5>
			</a>
		    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Mahjong Ways 2 Super Scatter x10000" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Mahjong Ways 2 Super Scatter x10000', 'https://imggalery.com/uploads/user_61/album_130/1758216180.gif' , '74', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758216180.gif" src="https://imggalery.com/uploads/user_61/album_130/1758216180.gif" *ngif="showEle">       
			   </div>
			   <h5 data-title="Mahjong Ways 2">Mahjong Ways 2 Super Scatter x10000</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild Bounty Showdown Super Scatter" data-filter="ALL,TOP,NEW" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Wild Bounty Showdown Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486200.gif' , '135', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200.gif"src="https://imggalery.com/uploads/user_61/album_145/1762486200.gif" *ngif="showEle">
			   </div>
			   <h5 data-title="Wild Bounty Showdown">Wild Bounty Showdown Super Scatter</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild Bandito Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Wild Bandito Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486260.gif' , '104', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486260.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486260.gif" *ngif="showEle">
			   </div>
			   <h5 data-title="Wild Bandito">Wild Bandito Super Scatter</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Lucky Neko Super" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Lucky Neko Super', 'https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif' , '89', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif" *ngif="showEle">
			   </div>
			   <h5 data-title="Lucky Neko Super">Lucky Neko Super</h5>
			</a>
	    `;

	    const htmlString2 = `
		    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Mahjong Ways Scatter x5000" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Mahjong Ways Scatter x5000', 'https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif' , '65', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif" src="https://imggalery.com/uploads/user_61/album_130/1758216180_1.gif" *ngif="showEle">       
			   </div>
			   <h5 data-title="Mahjong Ways">Mahjong Ways Super Scatter x5000</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Mahjong Ways 2 Super Scatter x10000" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Mahjong Ways 2 Super Scatter x10000', 'https://imggalery.com/uploads/user_61/album_130/1758216180.gif' , '74', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758216180.gif" src="https://imggalery.com/uploads/user_61/album_130/1758216180.gif" *ngif="showEle">
			   </div>
			   <h5 data-title="Mahjong Ways 2">Mahjong Ways 2 Super Scatter x10000</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild Bounty Showdown Super Scatter" data-filter="ALL,TOP,NEW" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Wild Bounty Showdown Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486200.gif' , '135', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486200.gif" *ngif="showEle">          
			   </div>
			   <h5 data-title="Wild Bounty Showdown">Wild Bounty Showdown Super Scatter</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild Bandito Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Wild Bandito Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486260.gif' , '104', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486260.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486260.gif" *ngif="showEle"> 
			   </div>
			   <h5 data-title="Wild Bandito">Wild Bandito Super Scatter</h5>
			</a>
			<a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild Bandito Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Lucky Neko Super', 'https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif' , '89', '' )" style="">
			   <div class="content-wrapper" bis_skin_checked="1">
			      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486260_1.gif" *ngif="showEle"> 
			   </div>
			   <h5 data-title="Lucky Neko Super">Lucky Neko Super</h5>
			</a>
	    `;

	    if (isVisible) {
			var games = document.querySelector('.row.games.no-gutters');
			const tempDiv = document.createElement('div');
			tempDiv.innerHTML = htmlString2.trim();
			const nodes = Array.from(tempDiv.children);
			if (games) {
		      const firstChild = games.children[0];
		      games.insertBefore(nodes[0], firstChild);
			  games.insertBefore(nodes[1], firstChild);
			  games.insertBefore(nodes[2], firstChild);
			  games.insertBefore(nodes[3], firstChild);
			  games.insertBefore(nodes[4], firstChild);
		    }
	    }else{
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.querySelector('.row.games.no-gutters');
			const nodes = Array.from(tempDiv.children);
			if (games != undefined) {
				const firstChild = games.children[0];
				games.insertBefore(nodes[0], firstChild);
				games.insertBefore(nodes[1], firstChild);
				games.insertBefore(nodes[2], firstChild);
				games.insertBefore(nodes[3], firstChild);
				games.insertBefore(nodes[4], firstChild);
			}
	    }
	}

	if (window.location.href.includes("slots/pragmatic-play") && document.body.classList.contains("mobile") && author.includes(atob("UkFERU44ODk5").toUpperCase())) {
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
			    max-width: 138px;
			    background: #1e1e1e;
			    border-radius: 16px;
			    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
			    text-align: center;
			    overflow: hidden;
			    transition: transform 0.2s ease, box-shadow 0.2s ease;
				float: left;
    			margin: 2px;
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
			    background-color: #ba3127;
			  }
			  input:checked + .ai-slider:before {
			    transform: translateX(24px);
			  }

			  .label-text {
			    display: block;
			    margin-top: 6px;
			    font-size: 13px;
			    color: #ba3127;
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

			<div class="gameContent" style="margin-left: 20px;">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_130/1758475740_1.png" alt="Gates Of Olympus Super Scatter x5000">
			  </div>
			  <div class="tntitle">Gates Of Olympus Super Scatter x5000</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x5000</span>
			</div>

			<div class="gameContent">
			  <div class="tnimg">
			    <img src="https://imggalery.com/uploads/user_61/album_130/1758475740.png" alt="Gates Of Olympus Super Scatter x5000">
			  </div>
			  <div class="tntitle">Gates Of Olympus Super Scatter x5000</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x10000</span>
			</div>
	    `;

	    if (document.getElementsByClassName('sub-games')[0] != undefined && isVisible) {
		    const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString3.trim();
	    	var games = document.getElementsByClassName('sub-games')[0];
			if (games != undefined) {
				const firstChild = games.children[1];
				games.insertBefore(tempDiv, firstChild);
			}
	    }

		const htmlString = `
	    <a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758628560.gif" src="https://imggalery.com/uploads/user_61/album_130/1758628560.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Gates Of Olympus Super Scatter">Gates Of Olympus Super Scatter</h5>
		</a>

		<a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486200_1.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Gates of Gatot Kaca Super Scatter">Gates of Gatot Kaca Super Scatter</h5>
		</a>
		<a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140_2.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140_2.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Starlight Princess Super Scatter">Starlight Princess Super Scatter</h5>
		</a>
		<a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200_2.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486200_2.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Mahjong Wins 3 Super Scatter">Mahjong Wins 3 Super Scatter</h5>
		</a>
		<a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Super Sweet Bonanza x10000">Super Sweet Bonanza x10000</h5>
		</a>
		<a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140_1.gif" *ngif="showEle" width="90" height="90">
		   </div>
		   <h5 data-title="Wild West Golden 1000">Wild West Golden 1000</h5>
		</a>
	    `;

	    const htmlString2 = `
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Gates of Olympus 1000™" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Gates of Olympus 1000™', 'https://imggalery.com/uploads/user_61/album_130/1758628560.gif' , 'vs20olympx', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_130/1758628560.gif" src="https://imggalery.com/uploads/user_61/album_130/1758628560.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Gates Of Olympus Super Scatter">Gates Of Olympus Super Scatter</h5>
		</a>

	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Gates of Gatot Kaca Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Gates of Gatot Kaca Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486200_1.gif' , 'vs20gatotx', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486200_1.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Gates of Gatot Kaca Super Scatter">Gates of Gatot Kaca Super Scatter</h5>
		</a>
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Starlight Princess Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Starlight Princess Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486140_2.gif' , 'vs20starprss', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140_2.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140_2.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Starlight Princess Super Scatter">Starlight Princess Super Scatter</h5>
		</a>
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Mahjong Wins 3 Super Scatter" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Mahjong Wins 3 Super Scatter', 'https://imggalery.com/uploads/user_61/album_145/1762486200_2.gif' , 'vswaysmahwblck', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486200_2.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486200_2.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Mahjong Wins 3 Super Scatter">Mahjong Wins 3 Super Scatter</h5>
		</a>
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Super Sweet Bonanza x10000" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Super Sweet Bonanza x10000', 'https://imggalery.com/uploads/user_61/album_145/1762486140.gif' , 'vs20swbonsup', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Super Sweet Bonanza x10000">Super Sweet Bonanza x10000</h5>
		</a>
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Wild West Golden 1000" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event,    'Wild West Golden 1000', 'https://imggalery.com/uploads/user_61/album_145/1762486140_1.gif' , 'vs20wwgcluster', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://imggalery.com/uploads/user_61/album_145/1762486140_1.gif" src="https://imggalery.com/uploads/user_61/album_145/1762486140_1.gif" *ngif="showEle">           
		   </div>
		   <h5 data-title="Wild West Golden 1000">Wild West Golden 1000</h5>
		</a>
	    `;

	    if (isVisible) {
			var games = document.querySelector('.row.games.no-gutters');
			const tempDiv = document.createElement('div');
			tempDiv.innerHTML = htmlString2.trim();
			const nodes = Array.from(tempDiv.children);
			if (games != undefined) {
				const firstChild = games.children[0];
				games.insertBefore(nodes[0], firstChild);
				games.insertBefore(nodes[1], firstChild);
				games.insertBefore(nodes[2], firstChild);
				games.insertBefore(nodes[3], firstChild);
				games.insertBefore(nodes[4], firstChild);
				games.insertBefore(nodes[5], firstChild);
			}
	    }else{
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.querySelector('.row.games.no-gutters');
			const nodes = Array.from(tempDiv.children);
			if (games != undefined) {
				const firstChild = games.children[0];
				games.insertBefore(nodes[0], firstChild);
				games.insertBefore(nodes[1], firstChild);
				games.insertBefore(nodes[2], firstChild);
				games.insertBefore(nodes[3], firstChild);
				games.insertBefore(nodes[4], firstChild);
				games.insertBefore(nodes[5], firstChild);
			}
	    }
	}
});
