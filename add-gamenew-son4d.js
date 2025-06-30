window.addEventListener('DOMContentLoaded', function() {
	const htmlString = `
      <style>
	    .games-container {
	      display: flex;
	      gap: 20px;
	      flex-wrap: wrap;
	      margin-top: 20px;
	      justify-content: center;
	    }
	    .game-card {
	      background: #1e1e1e;
	      border-radius: 15px;
	      padding: 10px;
	      width: 150px;
	      text-align: center;
	      box-shadow: 0 0 10px rgba(0,0,0,0.5);
	      transition: transform 0.3s;
	    }
	    .game-card:hover {
	      transform: scale(1.05);
	    }
	    .game-card img {
	      width: 100%;
	      border-radius: 10px;
	      margin-bottom: 10px;
	    }
	    .game-title {
	        font-size: 14px;
	        font-weight: bold;
	        margin-bottom: 5px;
	        text-overflow: ellipsis;
	        white-space: nowrap;
	        overflow: hidden;
	    }
	    .game-provider {
	        font-size: 13px;
	        color: magenta;
	        margin-bottom: 5px;
	        text-overflow: ellipsis;
	        white-space: nowrap;
	        overflow: hidden;
	    }

	    @media only screen and (max-width: 1000px) {
	        .game-card {
	          background: #1e1e1e;
	          border-radius: 15px;
	          padding: 10px;
	          width: 90px;
	          text-align: center;
	          box-shadow: 0 0 10px rgba(0,0,0,0.5);
	          transition: transform 0.3s;
	        }

	        .game-title {
	            font-size: 6px;
	        }

	        .game-provider {
	            display: none;
	        }
	    }
	  </style>

	  <div class="games-container">
	    <div class="game-card">
	      <a href="javascript:void(0)">
	          <img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" alt="Mahjong Ways 2">
	          <div class="game-title">Mahjong Ways 2</div>
	          <div class="game-provider" style="color: deeppink;">PG Soft</div>
	      </a>
	    </div>
	    <div class="game-card">
	      <a href="javascript:void(0)">
	          <img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" alt="Mahjong Ways 1">
	          <div class="game-title">Mahjong Ways 1</div>
	          <div class="game-provider" style="color: hotpink;">PG Soft</div>
	      </a>
	    </div>
	    <div class="game-card">
	      <a href="javascript:void(0)">
	          <img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" alt="Mahjong Wins 2 Black Scatter">
	          <div class="game-title">Mahjong Wins 2 Black Scatter</div>
	          <div class="game-provider" style="color: violet;">Pragmatic Play</div>
	      </a>
	    </div>
	    <div class="game-card">
	      <a href="javascript:void(0)">
	          <img src="https://www.kliker.store/img/gifmee.gif" alt="Mahjong Wins 3 Black Scatter">
	          <div class="game-title">Mahjong Wins 3 Black Scatter</div>
	          <div class="game-provider" style="color: orange;">Pragmatic Play</div>
	      </a>
	    </div>
	  </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString.trim();

	var homeprovider = document.getElementsByClassName('provider')[0];
	if (homeprovider != undefined) {
		const firstChild = homeprovider.firstChild;
		homeprovider.insertBefore(tempDiv, firstChild);
	}

    var mobilelogin = document.getElementById('mobilelogin');
	if (mobilelogin != undefined) {
		const firstChild = mobilelogin.firstChild;
		mobilelogin.insertBefore(tempDiv, firstChild);
	}
});

window.addEventListener('DOMContentLoaded', function() {
	const urlParams = new URLSearchParams(window.location.search);
	const content = urlParams.get('content');
	const provider = urlParams.get('provider');

	if (content == 'slot') {
		if (provider == 'pp') {
			const htmlString = `
				<figure class="gameitem">
					<img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" style="width:150px">
					<figcaption style="text-align:center; margin-top:5px;">Mahjong Wins 2 Black Scatter</figcaption>
				</figure>
				<figure class="gameitem">
					<img src="https://www.kliker.store/img/gifmee.gif" style="width:150px">
					<figcaption style="text-align:center; margin-top:5px;">Mahjong Wins 3 Black Scatter</figcaption>
				</figure>
			`;

			const tempDiv = document.createElement('div');
		    tempDiv.innerHTML = htmlString.trim();
		    const newGameItem1 = tempDiv.children[1];
		    const newGameItem0 = tempDiv.children[0];
		    const container = document.getElementsByClassName('slotarea')[0];
		    if(container != undefined) container.insertBefore(newGameItem1, container.firstChild);
		    if(container != undefined) container.insertBefore(newGameItem0, container.firstChild);

		}else if (provider == 'pg') {
			const htmlString = `
				<figure class="gameitem">
					<img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" style="width:150px">
					<figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 2</figcaption>
				</figure>
				<figure class="gameitem">
					<img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" style="width:150px">
					<figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 1</figcaption>
				</figure>
			`;

			const tempDiv = document.createElement('div');
		    tempDiv.innerHTML = htmlString.trim();
		    const newGameItem1 = tempDiv.children[1];
		    const newGameItem0 = tempDiv.children[0];
		    const container = document.getElementsByClassName('slotarea')[0];
		    if(container != undefined) container.insertBefore(newGameItem1, container.firstChild);
		    if(container != undefined) container.insertBefore(newGameItem0, container.firstChild);

		}
	}
});


window.addEventListener('DOMContentLoaded', function() {
	const isUserArea = window.location.href.includes("userarea.php");
	var ppslot = document.getElementById('ppslot');
	var pgslot = document.getElementById('pgslot')

	if (isUserArea) {

		if (ppslot != undefined) {
			const htmlString = `
				<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
				   <a href="" bis_size="{&quot;x&quot;:231,&quot;y&quot;:694,&quot;w&quot;:170,&quot;h&quot;:103,&quot;abs_x&quot;:231,&quot;abs_y&quot;:694}">
				      <img src="https://imggalery.com/uploads/user_61/album_87/1748777520.gif" style="width:150px" bis_size="{&quot;x&quot;:241,&quot;y&quot;:627,&quot;w&quot;:150,&quot;h&quot;:150,&quot;abs_x&quot;:241,&quot;abs_y&quot;:627}" bis_id="bn_fz6hanbyrvksfmmz61w431">
				      <div style="text-align:center; margin-top:3px;" bis_skin_checked="1">Mahjong Wins 2</div>
				   </a>
				</div>
				<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
				   <a href="" bis_size="{&quot;x&quot;:61,&quot;y&quot;:694,&quot;w&quot;:170,&quot;h&quot;:103,&quot;abs_x&quot;:61,&quot;abs_y&quot;:694}">
				      <img src="https://www.kliker.store/img/gifmee.gif" style="width:150px" bis_size="{&quot;x&quot;:71,&quot;y&quot;:627,&quot;w&quot;:150,&quot;h&quot;:150,&quot;abs_x&quot;:71,&quot;abs_y&quot;:627}" bis_id="bn_lbg8qcmgu2yu3k1z2u1eo7">
				      <div style="text-align:center; margin-top:3px;" bis_skin_checked="1">Mahjong Wins 3 - Black Scatter</div>
				   </a>
				</div>
			`;

			const tempDiv = document.createElement('div');
		    tempDiv.innerHTML = htmlString.trim();
		    const newGameItem1 = tempDiv.children[1];
		    const newGameItem0 = tempDiv.children[0];
		    if(ppslot != undefined) ppslot.insertBefore(newGameItem1, ppslot.firstChild);
		    if(ppslot != undefined) ppslot.insertBefore(newGameItem0, ppslot.firstChild);

		}else if (pgslot != undefined) {
			const htmlString = `
				<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
				   <a href="" bis_size="{&quot;x&quot;:58,&quot;y&quot;:1099,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:58,&quot;abs_y&quot;:1099}">
				      <img src="https://imggalery.com/uploads/user_61/album_87/1748774220_1.webp" style="width:160px; cursor: pointer;" bis_size="{&quot;x&quot;:63,&quot;y&quot;:1027,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:63,&quot;abs_y&quot;:1027}" bis_id="bn_mfeekz7dx4szgfbtmxbrir">
				      <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways</div>
				   </a>
				</div>
				<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
				   <a href="" bis_size="{&quot;x&quot;:231,&quot;y&quot;:1099,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:231,&quot;abs_y&quot;:1099}">
				      <img src="https://imggalery.com/uploads/user_61/album_87/1748774220.webp" style="width:160px; cursor: pointer;" bis_size="{&quot;x&quot;:236,&quot;y&quot;:1027,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:236,&quot;abs_y&quot;:1027}" bis_id="bn_80p2u39alhwmjycxg6wdar">
				      <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 2</div>
				   </a>
				</div>
			`;

			const tempDiv = document.createElement('div');
		    tempDiv.innerHTML = htmlString.trim();
		    const newGameItem1 = tempDiv.children[1];
		    const newGameItem0 = tempDiv.children[0];
		    if(pgslot != undefined) pgslot.insertBefore(newGameItem1, pgslot.firstChild);
		    if(pgslot != undefined) pgslot.insertBefore(newGameItem0, pgslot.firstChild);

		}
	}
});
