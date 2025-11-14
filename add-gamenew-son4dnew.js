window.addEventListener('DOMContentLoaded', function() {
	let authorMeta = document.querySelector('meta[name="author"]');
    let author = authorMeta ? authorMeta.getAttribute("content") : "Tidak ada author";
	const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
	const isVisible = window.location.href.includes("userarea.php");
	
	if (author.toUpperCase().includes(atob("U29uNEQ=").toUpperCase())) {
		if (window.location.href.includes("provider=pg") || window.location.href.includes("gid=pg")) {
		    if (isVisible) {
				const container = document.getElementById("pgslot");
				var href = '';
				var onclick = '';

				var href2 = '';
				var onclick2 = '';

				if (container) {
					const links = container.querySelectorAll("a");

					links.forEach(a => {
					  const titleDiv = a.querySelector("div");
					  if ((titleDiv && titleDiv.textContent.includes("Mahjong Ways 2"))) {
					    if (a.onclick) {
					    	onclick = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Mahjong Ways")) {
					  	if (a.onclick) {
					    	onclick2 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href2 = a.href;
					    }
					  }
					});
				}

				const htmlString = `
				    <div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href2+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660560_1.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 1 x100</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660620.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 2 x500</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660680.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Thailand Scatter</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660560.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 2 Free x5</div>
					  </a>
					</div>
				    `;

				const htmlString2 = `
					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick2+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660560_1.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 1 x100</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660620.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 2 x500</div>
					  </a>
					</div>

				    <div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660680.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Thailand Scatter</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660560.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 2 Free x5</div>
					  </a>
					</div>
				`;

		    	const tempDiv = document.createElement('div');
		    	if (window.location.pathname.includes("m/userarea.php")) tempDiv.innerHTML = htmlString.trim();
		    	else tempDiv.innerHTML = htmlString2.trim();
		    	var games = document.getElementById('pgslot');
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[3], firstChild);
				}
		    }else{
		    	const htmlString = `
				    <figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759660560_1.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 1 x100</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759660620.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 2 x500</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759660680.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Thailand Scatter</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759660560.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 2 Free x5</figcaption>
					</figure>
				    `;

		    	const tempDiv = document.createElement('div');
		    	tempDiv.innerHTML = htmlString.trim();
		    	var games = document.getElementsByClassName('slotarea')[0];
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[3], firstChild);
				}
		    }


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
				    max-width: 207px;
				    background: #1e1e1e;
				    border-radius: 16px;
				    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
				    text-align: center;
				    overflow: hidden;
				    transition: transform 0.2s ease, box-shadow 0.2s ease;
					float: left;
					margin: 5px;
					margin-bottom: 49px;
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
				    font-size: 10px;
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
				    font-size: 10px;
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

				<div class="gameContent" `+(window.location.pathname.includes("m/userarea.php") ? 'style="margin-left: 50px;"' : '')+`>
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href+'"' : 'onclick="'+onclick+'"')+`>
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759660680.webp" alt="Mahjong Win Thailand">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Win 2 Thailand</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Super Scatter `+(isVisible ? '' : 'Thailand')+`</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
					  <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href2+'"' : 'onclick="'+onclick2+'"')+`>
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759660560_1.webp" alt="Mahjong Ways 1">
					  </a>
				  </div>
				  <div class="tntitle">Mahjong Ways 1</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x100</span>
				</div>

				<div class="gameContent" `+(window.location.pathname.includes("m/userarea.php") ? 'style="margin-left: 50px;"' : '')+`>
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href+'"' : 'onclick="'+onclick+'"')+`>
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759660620.webp" alt="Mahjong Ways 2">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Ways 2</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x500</span>
				</div>
				<div class="gameContent">
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href+'"' : 'onclick="'+onclick+'"')+`>
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759660560.webp" alt="Mahjong Ways 2 Free x5">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Ways 2 Free x5</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Mahjong Ways 2 Free x5</span>
				</div>
				<div style="clear:both" bis_skin_checked="1"></div>
		    `;

		    if (isVisible) {
		    	if (document.getElementById('pgslot') != undefined) {
				    const tempDiv = document.createElement('div');
			    	tempDiv.innerHTML = htmlString3.trim();
			    	var games = document.getElementById('pgslot').parentElement;
					if (games != undefined) {
						const firstChild = games.children[0];
						games.insertBefore(tempDiv, firstChild);
					}
			    }
		    }else{
		    	if (document.getElementsByClassName("panel-body")[0] != undefined) {
				    const tempDiv = document.createElement('div');
			    	tempDiv.innerHTML = htmlString3.trim();
			    	var games = document.getElementsByClassName("panel-body")[0];
					if (games != undefined) {
						const firstChild = games.children[0];
						games.insertBefore(tempDiv, firstChild);
					}
			    }
		    }
		}

		if (window.location.href.includes("provider=pp") || window.location.href.includes("gid=pp")) {
			const isVisible = window.location.href.includes("userarea.php");
		    if (isVisible) {
				const container = document.getElementById("ppslot");
				var href = '';
				var onclick = '';

				var href2 = '';
				var onclick2 = '';

				var href3 = '';
				var onclick3 = '';

				var href4 = '';
				var onclick4 = '';

				if (container) {
					const links = container.querySelectorAll("a");

					links.forEach(a => {
					  const titleDiv = a.querySelector("div");
					  if ((titleDiv && titleDiv.textContent.includes("Gates of Gatot Kaca 1000"))) {
					    if (a.onclick) {
					    	onclick = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Mahjong Wins 3 - Black Scatter")) {
					  	if (a.onclick) {
					    	onclick2 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href2 = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Gates of Olympus 1000")) {
					  	if (a.onclick) {
					    	onclick3 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href3 = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Starlight Princess 1000")) {
					  	if (a.onclick) {
					    	onclick4 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href4 = a.href;
					    }
					  }
					});
				}

				const htmlString = `
				    <div class="gameList" style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661280.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">GATOTKACA SUPER SCATTER</div>
					  </a>
					</div>

					<div class="gameList" style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href2+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661340.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">MAHJONG WINS WINRATEX2</div>
					  </a>
					</div>

					<div class="gameList" style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href3+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661340_1.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">OLYMPUS SCATTER X10000</div>
					  </a>
					</div>

					<div class="gameList" style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href4+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661400.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">STARLIGHT X5000</div>
					  </a>
					</div>
				    `;

				const htmlString2 = `
					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661280.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">GATOTKACA SUPER SCATTER</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href2+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661340.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">MAHJONG WINS WINRATEX2</div>
					  </a>
					</div>

				    <div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href3+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661340_1.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">OLYMPUS SCATTER X10000</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="`+href4+`">
					    <img src="https://imggalery.com/uploads/user_61/album_133/1759661400.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">STARLIGHT X5000</div>
					  </a>
					</div>
				`;

		    	const tempDiv = document.createElement('div');
		    	if (window.location.pathname.includes("m/userarea.php")) tempDiv.innerHTML = htmlString.trim();
		    	else tempDiv.innerHTML = htmlString2.trim();
		    	var games = document.getElementById('ppslot');
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[3], firstChild);
				}
		    }else{
		    	const htmlString = `
				    <figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759661280.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">GATOTKACA SUPER SCATTER</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759661340.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">MAHJONG WINS WINRATEX2</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759661340_1.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">OLYMPUS SCATTER X10000</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://imggalery.com/uploads/user_61/album_133/1759661400.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">STARLIGHT X5000</figcaption>
					</figure>
				    `;

		    	const tempDiv = document.createElement('div');
		    	tempDiv.innerHTML = htmlString.trim();
		    	var games = document.getElementsByClassName('slotarea')[0];
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[3], firstChild);
				}
			}

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
				    max-width: 207px;
				    background: #1e1e1e;
				    border-radius: 16px;
				    box-shadow: 0 4px 12px rgba(0,0,0,0.6);
				    text-align: center;
				    overflow: hidden;
				    transition: transform 0.2s ease, box-shadow 0.2s ease;
					float: left;
					margin: 5px;
					margin-bottom: 49px;
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
				    font-size: 10px;
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
				    font-size: 10px;
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

				<div class="gameContent" `+(window.location.pathname.includes("m/userarea.php") ? 'style="margin-left: 50px;"' : '')+`>
				  <div class="tnimg">
				    <a href="`+href+`">
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759661280.webp" alt="Gatotkaca Super Scatter">
				    </a>
				  </div>
				  <div class="tntitle">Gatotkaca Super Scatter</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Gatotkaca Super Scatter</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
				    <a href="`+href2+`">
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759661340.webp" alt="Mahjong Wins Winratex2">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Wins Winratex2</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Mahjong Wins Winratex2</span>
				</div>

				<div class="gameContent" `+(window.location.pathname.includes("m/userarea.php") ? 'style="margin-left: 50px;"' : '')+`>
				  <div class="tnimg">
					<a href="`+href3+`">
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759661340_1.webp" alt="Olympus Scatter X10000">
					</a>
				  </div>
				  <div class="tntitle">Olympus Scatter X10000</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Olympus Scatter X10000</span>
				</div>
				<div class="gameContent">
				  <div class="tnimg">
				    <a href="`+href4+`">
				    	<img src="https://imggalery.com/uploads/user_61/album_133/1759661400.webp" alt="Starlight X5000">
				    </a>
				  </div>
				  <div class="tntitle">Starlight X5000</div>
				  <label class="ai-switch">
				    <input type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Starlight X5000</span>
				</div>
				<div style="clear:both" bis_skin_checked="1"></div>
		    `;

		    if (isVisible) {
		    	if (document.getElementById('ppslot') != undefined) {
				    const tempDiv = document.createElement('div');
			    	tempDiv.innerHTML = htmlString3.trim();
			    	var games = document.getElementById('ppslot').parentElement;
					if (games != undefined) {
						const firstChild = games.children[0];
						games.insertBefore(tempDiv, firstChild);
					}
			    }
		    }else{
		    	if (document.getElementsByClassName("panel-body")[0] != undefined) {
				    const tempDiv = document.createElement('div');
			    	tempDiv.innerHTML = htmlString3.trim();
			    	var games = document.getElementsByClassName("panel-body")[0];
					if (games != undefined) {
						const firstChild = games.children[0];
						games.insertBefore(tempDiv, firstChild);
					}
			    }
		    }
	    }



		if (window.location.pathname === "/" || window.location.pathname === "/index.php") {
			(function() {
			  const today = new Date().toISOString().split('T')[0];
			  const lastShown = localStorage.getItem('popupSon4DDate');

			  if (lastShown !== today) {
			    let overlay = document.createElement("div");
			    overlay.id = "promoPopup";
			    overlay.className = "overlay";
			    overlay.innerHTML = `
			      <div class="popup">
			        <div class="popup-header">
			          <br>
			          <center>
			            <img style="border-radius:100%;width:100px;height:100px;" 
			                 src="https://imggalery.com/uploads/user_61/album_132/1759591380.jpg" 
			                 alt="Notification">
			          </center>
			          <br>
			          KEPADA SEMUA MEMBER SETIA SON4D
			          <span class="close" onclick="closePopup111()">&times;</span>
			        </div>
			        <div class="popup-content">
			          <img src="https://imggalery.com/uploads/user_61/album_132/1759590180.jpg" alt="Promo">
			        </div>
			        <div class="popup-text">
			          SETIAP DEPOSIT GRATIS <b>SALDO 200.000</b> SETIAP HARINYA<br>
			          KHUSUS 200 ORANG PERTAMA<br><br>
			          <a href="https://t.me/officialson4d" target="_blank" style="color:#fff; text-decoration:underline;">
			            https://t.me/officialson4d
			          </a>
			        </div>
			        <div class="popup-footer">
			          <button onclick="closePopup111()">OK</button>
			        </div>
			      </div>
			    `;

			    let style = document.createElement("style");
			    style.textContent = `
			      .overlay {
			        position: fixed; top:0; left:0; width:100%; height:100%;
			        background: rgb(0 0 0 / .8);
			        display: flex; justify-content: center; align-items: center;
			        z-index: 9999;
			        opacity: 1; transition: opacity 0.4s ease;
			      }
			      .overlay.hide { opacity:0; pointer-events:none; }
			      .popup {
			        width: 500px; background:linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% );
			        border-radius:6px;
			        overflow:hidden; color:#fff; text-align:center;
			        box-shadow:0 4px 20px rgb(0 0 0 / .5);
			        transform: scale(1); transition: transform 0.4s ease;
			      }
			      .overlay.hide .popup { transform:scale(0.8); }
			      .popup-header {
			        background: linear-gradient(to bottom,#fca311,#f77f00);
			        padding:20px; font-weight:700; font-size:18px; color:#fff;
			        position: relative;
			      }
			      .popup-header .close {
			        position:absolute; top:12px; right:15px;
			        font-size:22px; cursor:pointer; color:#fff;
			      }
			      .popup-content { padding:20px; }
			      .popup-content img { max-width:100%; border-radius:4px; }
			      .popup-text { padding:15px; font-size:15px; color:#fff; }
			      .popup-text b { color:red; }
			      .popup-footer { padding:15px; }
			      .popup-footer button {
			        background: linear-gradient(to bottom,#fca311,#f77f00);
			        border:none; color:#fff; font-size:16px;
			        padding:10px 40px; border-radius:4px;
			        cursor:pointer; transition:opacity 0.2s;
			      }
			      .popup-footer button:hover { opacity:.8; }
			    `;

			    document.head.appendChild(style);
			    document.body.appendChild(overlay);

			    window.closePopup111 = function() {
			      overlay.classList.add("hide");
			      setTimeout(() => {
			        overlay.remove();
			      }, 400);
			    };

			    localStorage.setItem('popupSon4DDate', today);
			  }
			})();
		}




		const styleElement = document.createElement("style");
		styleElement.textContent = `
			.btn-footer {
			  background: linear-gradient(
			    to bottom,
			    #26dfec 0%,
			    #0cc6e2 50%,
			    #3996ee 75%,
			    #1984ff 100%
			  );
			}
			.active,
			.collapsible:hover {
			  background-color: transparent;
			}
			/* Style default */
			body {
			  margin: 0;
			  padding: 0;
			}
			@media only screen and (min-width: 1001px) {
			  body {
			    background-image: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp");
			  }
			  .header {
			    background-image: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp");
			  }
			  #togel-desktop {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .provider {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .transaksi {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .guidelines {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .bantuan {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .contentdata {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .footer {
			    background: url("https://imggalery.com/uploads/user_61/album_132/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .d-flex.gap-3.justify-content-center.align-items-center {
			    display: none !important;
			  }
			  #boxprivacy {
			    display: none !important;
			  }
			  .show-more.desktop-only {
			    display: none !important;
			  }
			  #gt-nvframe {
			    display: none !important;
			  }
			  .mobile-only {
			    display: none;
			  }
			  .desktop-only {
			    display: block;
			  }
			  .menu {
			    display: flex;
			    justify-content: space-between;
			  }
			}

			/* Mobile (? 1000px) */
			@media only screen and (max-width: 1000px) {
			  body {
			    background-image: url("");
			  }
			  .desktop-only {
			    display: none;
			  }
			  .mobile-only {
			    display: block;
			  }
			  .menu {
			    flex-direction: column;
			  }
			  .content {
			    width: 100%;
			    padding: 0 15px;
			  }
			  
			  .menu-item{
				background: linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% );
			  }
			}


			:root {
			  --t1-color: var(--result-tanggal-background);
			  --t2-color: var(--result-keluaran-color);
			  --button-masuk-color: linear-gradient(
			    to bottom,
			    #dbbb2d 0%,
			    #ffdf00 50%,
			    #f8df01 75%,
			    #f0c434 100%
			  );
			  --button-daftar-color: linear-gradient(
			    to bottom,
			    #26dfec 0%,
			    #0cc6e2 50%,
			    #3996ee 75%,
			    #1984ff 100%
			  );
			  --header-background: linear-gradient(to bottom, #071d46 50%, #000000 100%);
			  --prepend-background: linear-gradient(
			    to bottom,
			    #26dfec 0%,
			    #0cc6e2 50%,
			    #3996ee 75%,
			    #1984ff 100%
			  );
			}
			.togel-desktop {
			  background: #000;
			  padding-top: 1rem;
			  padding-bottom: 1rem;
			}
			.login-field {
			  width: 147px;
			}
			.menu-item > label,
			.menu span {
			  color: #fff !important;
			}
			.img-casino {
			  width: 400px;
			  max-width: 100%;
			  border-radius: 5px;
			  border: var(--result-border);
			  box-shadow: 5px 3px 20px #000;
			  transition: opacity 0.5s ease-in-out;
			}
			.img-casino:hover {
			  cursor: pointer;
			}
			.title-infos {
			  text-transform: uppercase;
			  color: #000;
			  font-size: 1.2rem;
			  text-align: center;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			}
			.img-title-infos {
			  width: 40px;
			  margin-right: 0.5rem;
			}
			.transaksi {
			  padding-top: 1.5rem;
			}
			.wrap-all-trans {
			  display: grid;
			  grid-template-columns: repeat(2, 1fr);
			  gap: 5px;
			}
			.wrapper-transactions {
			  width: 35rem;
			  max-width: 100%;
			  padding: 0.7rem;
			  margin-bottom: 1rem;
			  margin-top: 1rem;
			  border-radius: 10px;
			  border: var(--result-border);
			  background: black;
			}
			.content-trans {
			  height: 15rem;
			  overflow: hidden;
			  position: relative;
			}
			.avatar-trans {
			  width: 2rem;
			  max-width: 100%;
			  margin-right: 0.7rem;
			}
			.avatar-wrapper {
			  display: flex;
			  justify-content: center;
			}
			.result-data:nth-child(odd) {
			  background: var(--primary-color);
			}
			.result > .keluaran {
			  color: #fcff00 !important;
			  opacity: 1 !important;
			}
			.result > .tanggal,
			.result > .pasaran,
			.togel-title {
			  color: #fff !important;
			  opacity: 1 !important;
			}
			.appbar i {
			  color: #fff !important;
			}
			.promosi a {
			  color: #fff !important;
			  padding: 0.5rem 1rem !important;
			  border-bottom: 2px solid #fff !important;
			  border-radius: 2px !important;
			  text-transform: uppercase !important;
			}

		`;
		document.body.insertBefore(styleElement, document.body.firstChild);

		if (isMobile) {
			document.getElementsByClassName('menu-mobile')[0].children[0].style.setProperty(
			  "background",
			  "linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% )",
			  "important"
			);
		    document.getElementsByClassName('menu-mobile')[0].children[1].style.setProperty(
			  "background",
			  "linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% )",
			  "important"
			);
		    document.getElementById('marquee-mobile').style.setProperty(
			  "background",
			  "linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% )",
			  "important"
			);
		    document.getElementsByClassName('my-navbar')[0].style.setProperty(
			  "background",
			  "linear-gradient( to bottom, #0b3c6e 0%, #16508b 50%, #13477d 75%, #093057 100% )",
			  "important"
			);
			document.getElementsByClassName('marquee-shadow')[0].style.setProperty(
			  "background",
			  "none",
			  "important"
			);
			/*document.getElementById('mobilelogin').style.setProperty(
			  "background",
			  "linear-gradient(rgb(169 145 34) 0%, rgb(82 76 30) 50%, rgb(49 45 13) 75%, rgb(0 0 0) 100%)",
			  "important"
			);*/
		}
	}

   /*function redirectCU(e) {
   if (e.ctrlKey && e.which == 85) {
       return false;
   }
   }
   document.onkeydown = redirectCU;
   function redirectKK(e) {
   if (e.which == 3) {
       return false;
   }
   }
   document.oncontextmenu = redirectKK;
   window.oncontextmenu = function () {
       return false;
   }
   $(document).keydown(function (event) {
       if (event.keyCode == 123) {
           return false;
       }
       else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
           return false;
       }
   });*/
});
