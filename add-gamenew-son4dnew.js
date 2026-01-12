(function(){
	const style = document.createElement("style");
	style.innerHTML = `
	#gameLoadingOverlay{
	  position:fixed;
	  inset:0;
	  background:rgba(0,0,0,.8);
	  display:flex;
	  align-items:center;
	  justify-content:center;
	  z-index:99999;
	  font-family:Arial,sans-serif;
	}
	#gameLoadingBox{
	  width:320px;
	  padding:24px;
	  background:linear-gradient(180deg,#0b0b0b,#1a1a1a);
	  border-radius:16px;
	  text-align:center;
	  border:2px solid #ff0000;
	  box-shadow:0 0 30px rgba(255,0,0,.6);
	  animation:popupIn .4s ease;
	}
	#gameLoadingBox img{
	  width:90px;
	  margin-bottom:10px;
	  filter:drop-shadow(0 0 12px gold);
	}
	#gameLoadingBox h2{
	  color:#fff;
	  font-size:18px;
	  margin:10px 0 14px;
	}
	#gameLoadingBar{
	  width:100%;
	  height:14px;
	  background:#111;
	  border-radius:20px;
	  overflow:hidden;
	}
	#gameLoadingProgress{
	  height:100%;
	  width:0%;
	  border-radius:20px;
	  background:linear-gradient(90deg,#0077ff,#00ffff,#0077ff);
	  background-size:200% 100%;
	  animation:glowMove 1.5s linear infinite;
	  transition:width .25s ease;
	}
	#gameLoadingText{
	  margin-top:10px;
	  color:#dcdcdc;
	  font-size:14px;
	}
	@keyframes glowMove{
	  from{background-position:0% 0%}
	  to{background-position:200% 0%}
	}
	@keyframes popupIn{
	  from{transform:scale(.7);opacity:0}
	  to{transform:scale(1);opacity:1}
	}
	`;
	document.head.appendChild(style);

	window.openGame = function(action, gameImage, gameName, checkboxId){
	  const checkbox = document.getElementById(checkboxId);

	  const go = () => {
	    if (typeof action === "function") action();
	  };

	  if(!checkbox || !checkbox.checked){
	    go();
	    return;
	  }

	  if(document.getElementById("gameLoadingOverlay")) return;

	  let progress = 0;

	  const overlay = document.createElement("div");
	  overlay.id = "gameLoadingOverlay";
	  overlay.innerHTML = `
	    <div id="gameLoadingBox">
	      <img src="${gameImage}">
	      <h2>${gameName}</h2>
	      <div id="gameLoadingBar">
	        <div id="gameLoadingProgress"></div>
	      </div>
	      <div id="gameLoadingText">Loading... <span>0%</span></div>
	    </div>
	  `;
	  document.body.appendChild(overlay);

	  const bar = document.getElementById("gameLoadingProgress");
	  const percent = overlay.querySelector("#gameLoadingText span");

	  const interval = setInterval(()=>{
	    progress += Math.floor(Math.random()*6)+2;

	    if(progress >= 100){
	      progress = 100;
	      clearInterval(interval);
	      setTimeout(go, 500);

	      var overlaya = document.getElementById("gameLoadingOverlay");
		  if (overlaya) overlaya.remove();
	    }

	    bar.style.width = progress + "%";
	    percent.innerText = progress + "%";
	  }, 120);
	};
})();

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

				var href3 = '';
				var onclick3 = '';

				var href4 = '';
				var onclick4 = '';

				var href5 = '';
				var onclick5 = '';

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
					  }else if (titleDiv && titleDiv.textContent.includes("Wild Bounty Showdown")) {
					  	if (a.onclick) {
					    	onclick3 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href3 = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Wild Bandito")) {
					  	if (a.onclick) {
					    	onclick4 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href4 = a.href;
					    }
					  }else if (titleDiv && titleDiv.textContent.includes("Lucky Neko")) {
					  	if (a.onclick) {
					    	onclick5 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href5 = a.href;
					    }
					  }
					});
				}

				const htmlString = `
				    <div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href2+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong-ways-x100.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 1 x100</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/mahjongx500.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 2 x500</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/mahjongwinsthailand.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Thailand Scatter</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/mahjongx5.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Mahjong Ways 2 Free x5</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/wbs.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Wild Bounty Showdown Super</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href4+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/bandito.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Wild Bandito Super</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="javascript:void(0)" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Fitur Baru Akan Hadir</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href5+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/luckyneko.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Lucky Neko Super</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/super-sc-mj.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Super SC MJ2</div>
					  </a>
					</div>

					<div style="height:200px; width:170px; display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/wild-bounty-ai.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Wild Bounty AI</div>
					  </a>
					</div>
				    `;

				const htmlString2 = `
					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick2+`">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong-ways-x100.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 1 x100</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://new.imagemyart.com/upload/mahjongx500.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 2 x500</div>
					  </a>
					</div>

				    <div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://new.imagemyart.com/upload/mahjongwinsthailand.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Thailand Scatter</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://new.imagemyart.com/upload/mahjongx5.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Mahjong Ways 2 Free x5</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick3+`">
					    <img src="https://new.imagemyart.com/upload/wbs.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Wild Bounty Showdown Super</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick4+`">
					    <img src="https://new.imagemyart.com/upload/bandito.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Wild Bandito Super</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="javascript:void(0)">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Fitur Baru Akan Hadir</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick5+`">
					    <img src="https://new.imagemyart.com/upload/luckyneko.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Lucky Neko Super</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a onclick="`+onclick+`">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/super-sc-mj.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Super SC MJ2</div>
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
					games.insertBefore(nodes[6], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[1], firstChild);
					//games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[3], firstChild);
					games.insertBefore(nodes[4], firstChild);
					games.insertBefore(nodes[5], firstChild);
					games.insertBefore(nodes[7], firstChild);
					games.insertBefore(nodes[8], firstChild);
					games.insertBefore(nodes[9], firstChild);
				}
		    }else{
		    	const htmlString = `
				    <figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/mahjong-ways-x100.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 1 x100</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/mahjongx500.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 2 x500</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/mahjongwinsthailand.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Thailand Scatter</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/mahjongx5.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Mahjong Ways 2 Free x5</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/wbs.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Wild Bounty Showdown Super</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/bandito.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Wild Bandito Super</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Fitur Baru Akan Hadir</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/luckyneko.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Lucky Neko Super</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/super-sc-mj.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Super SC MJ2</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/wild-bounty-ai.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Wild Bounty AI</figcaption>
					</figure>
				    `;

		    	const tempDiv = document.createElement('div');
		    	tempDiv.innerHTML = htmlString.trim();
		    	var games = document.getElementsByClassName('slotarea')[0];
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[6], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[1], firstChild);
					//games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[3], firstChild);
					games.insertBefore(nodes[4], firstChild);
					games.insertBefore(nodes[5], firstChild);
					games.insertBefore(nodes[7], firstChild);
					games.insertBefore(nodes[8], firstChild);
					games.insertBefore(nodes[9], firstChild);
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

				<div class="gameContent">
				  <div class="tnimg">
				    <a onclick="openGame(() => `+(window.location.pathname.includes("m/userarea.php") ? location.href = "'+href+'" : onclick)+`, 'https://new.imagemyart.com/upload/mahjongwinsthailand.gif', 'Mahjong Win 2 Thailand', 'double_scatter_mjwt')">
				    	<img src="https://new.imagemyart.com/upload/mahjongwinsthailand.gif" alt="Mahjong Win Thailand">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Win 2 Thailand</div>
				  <label class="ai-switch">
				    <input id="double_scatter_mjwt" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Super Scatter `+(isVisible ? '' : 'Thailand')+`</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
					  <a onclick="openGame(() => `+(window.location.pathname.includes("m/userarea.php") ? location.href = "'+href5+'" : onclick5)+`, 'https://new.imagemyart.com/upload/luckyneko.gif', 'Lucky Neko Super', 'double_scatter_neko')">
					    <img src="https://new.imagemyart.com/upload/luckyneko.gif" alt="Lucky Neko Super">
					  </a>
				  </div>
				  <div class="tntitle">Lucky Neko Super</div>
				  <label class="ai-switch">
				    <input id="double_scatter_neko" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Lucky Super Scatter</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
				    <a onclick="openGame(() => `+(window.location.pathname.includes("m/userarea.php") ? location.href = "'+href+'" : onclick)+`, 'https://new.imagemyart.com/upload/mahjongx500.gif', 'Mahjong Ways 2', 'double_scatter_mjw2')">
				    	<img src="https://new.imagemyart.com/upload/mahjongx500.gif" alt="Mahjong Ways 2">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Ways 2</div>
				  <label class="ai-switch">
				    <input id="double_scatter_mjw2" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x500</span>
				</div>
				<div class="gameContent">
				  <div class="tnimg">
				    <a onclick="openGame(() => `+(window.location.pathname.includes("m/userarea.php") ? location.href = "'+href+'" : onclick)+`, 'https://new.imagemyart.com/upload/mahjongx5.gif', 'Mahjong Ways 2 Free x5', 'double_scatter_mjw2f')">
				    	<img src="https://new.imagemyart.com/upload/mahjongx5.gif" alt="Mahjong Ways 2 Free x5">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Ways 2 Free x5</div>
				  <label class="ai-switch">
				    <input id="double_scatter_mjw2f" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2 Mahjong Ways 2 Free x5</span>
				</div>
				<div style="clear:both" bis_skin_checked="1"></div>
		    `;

		    if (isVisible) {
		    	if (document.getElementById('pgslot') != undefined) {
				    const tempDiv = document.createElement('div');
				    tempDiv.classList.add('gameContainer');
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
				    tempDiv.classList.add('gameContainer');
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

				var href5 = '';
				var onclick5 = '';

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
					  }else if (titleDiv && titleDiv.textContent.includes("Sweet Bonanza 1000")) {
					  	if (a.onclick) {
					    	onclick5 = a.onclick.toString().replace('function onclick(event) {', '').replace('}', '').trim();
					    }else{
					    	href5 = a.href;
					    }
					  }
					});
				}

				const htmlString = `
				    <div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotkaca-super-scatter.webp" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">GATOTKACA SUPER SCATTER</div>
					  </a>
					</div>

					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href2+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/mahjongwinsscatter.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">MAHJONG WINS WINRATEX2</div>
					  </a>
					</div>

					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/olympus.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">OLYMPUS SCATTER X10000</div>
					  </a>
					</div>

					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href4+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/starlight.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">STARLIGHT X5000</div>
					  </a>
					</div>


					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="javascript:void(0)" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Fitur Baru Akan Hadir</div>
					  </a>
					</div>

					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href5+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://new.imagemyart.com/upload/sweetbonanza.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Super Sweet Bonanza x10000</div>
					  </a>
					</div>

					<div style="height:190px; width:170px;display:inline-block; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`" bis_size="{&quot;x&quot;:191,&quot;y&quot;:1150,&quot;w&quot;:170,&quot;h&quot;:110,&quot;abs_x&quot;:191,&quot;abs_y&quot;:1150}">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gate-olympus-ai-son4d.gif" style="width:160px; cursor: pointer; border-radius: 30px;" bis_size="{&quot;x&quot;:196,&quot;y&quot;:1078,&quot;w&quot;:160,&quot;h&quot;:160,&quot;abs_x&quot;:196,&quot;abs_y&quot;:1078}" bis_id="bn_mvouyxcw1ygjgf1n47ifgj">
					    <div style="text-align:center; margin-top:5px" bis_skin_checked="1">Gates Olympus AI</div>
					  </a>
					</div>
				    `;

				const htmlString2 = `
					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href+`">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotkaca-super-scatter.webp" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">GATOTKACA SUPER SCATTER</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href2+`">
					    <img src="https://new.imagemyart.com/upload/mahjongwinsscatter.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">MAHJONG WINS WINRATEX2</div>
					  </a>
					</div>

				    <div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`">
					    <img src="https://new.imagemyart.com/upload/olympus.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">OLYMPUS SCATTER X10000</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href4+`">
					    <img src="https://new.imagemyart.com/upload/starlight.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">STARLIGHT X5000</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a href="javascript:void(0)">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Fitur Baru Akan Hadir</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top" bis_skin_checked="1">
					  <a target="_blank" href="`+href5+`">
					    <img src="https://new.imagemyart.com/upload/sweetbonanza.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Super Sweet Bonanza x10000</div>
					  </a>
					</div>

					<div style="height:205px; width:185px; float:left; text-align:center; vertical-align:top;" bis_skin_checked="1">
					  <a target="_blank" href="`+href3+`">
					    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gate-olympus-ai-son4d.gif" style="width:160px; cursor: pointer; border-radius: 30px;">
					    <div style="text-align:center; margin-top:5px; cursor: pointer;" bis_skin_checked="1">Gates Olympus AI</div>
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
					games.insertBefore(nodes[4], firstChild);
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[3], firstChild);
					games.insertBefore(nodes[5], firstChild);
					games.insertBefore(nodes[6], firstChild);
				}
		    }else{
		    	const htmlString = `
				    <figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotkaca-super-scatter.webp" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">GATOTKACA SUPER SCATTER</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/mahjongwinsscatter.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">MAHJONG WINS WINRATEX2</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/olympus.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">OLYMPUS SCATTER X10000</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/starlight.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">STARLIGHT X5000</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/fitur-baru-akan-hadir.png" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Fitur Baru Akan Hadir</figcaption>
					</figure>

					<figure class="gameitem">
					  <img src="https://new.imagemyart.com/upload/sweetbonanza.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Super Sweet Bonanza x10000</figcaption>
					</figure>
					<figure class="gameitem">
					  <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/gate-olympus-ai-son4d.gif" style="width:150px; border-radius: 30px;">
					  <figcaption style="text-align:center; margin-top:5px;">Gates Olympus AI</figcaption>
					</figure>
				    `;

		    	const tempDiv = document.createElement('div');
		    	tempDiv.innerHTML = htmlString.trim();
		    	var games = document.getElementsByClassName('slotarea')[0];
		    	const nodes = Array.from(tempDiv.children);
				if (games != undefined) {
					const firstChild = games.firstElementChild;
					games.insertBefore(nodes[4], firstChild);
					games.insertBefore(nodes[0], firstChild);
					games.insertBefore(nodes[1], firstChild);
					games.insertBefore(nodes[2], firstChild);
					games.insertBefore(nodes[3], firstChild);
					games.insertBefore(nodes[5], firstChild);
					games.insertBefore(nodes[6], firstChild);
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

				<div class="gameContent">
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href+'"' : 'onclick="'+onclick+'"')+`>
				    	<img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/gatotkaca-super-scatter.webp" alt="Gatotkaca Super Scatter">
				    </a>
				  </div>
				  <div class="tntitle">Gatotkaca Super Scatter</div>
				  <label class="ai-switch">
				    <input id="double_scatter_gatot" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Gatotkaca Super Scatter</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href2+'"' : 'onclick="'+onclick2+'"')+`>
				    	<img src="https://new.imagemyart.com/upload/mahjongwinsscatter.gif" alt="Mahjong Wins Winratex2">
				    </a>
				  </div>
				  <div class="tntitle">Mahjong Wins Winratex2</div>
				  <label class="ai-switch">
				    <input id="double_scatter_mjw" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Mahjong Wins Winratex2</span>
				</div>

				<div class="gameContent">
				  <div class="tnimg">
					<a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href3+'"' : 'onclick="'+onclick3+'"')+`>
				    	<img src="https://new.imagemyart.com/upload/olympus.gif" alt="Olympus Scatter X10000">
					</a>
				  </div>
				  <div class="tntitle">Olympus Scatter X10000</div>
				  <label class="ai-switch">
				    <input id="double_scatter_olympus" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Olympus Scatter X10000</span>
				</div>
				<div class="gameContent">
				  <div class="tnimg">
				    <a `+(window.location.pathname.includes("m/userarea.php") ? 'href="'+href4+'"' : 'onclick="'+onclick4+'"')+`>
				    	<img src="https://new.imagemyart.com/upload/starlight.gif" alt="Starlight X5000">
				    </a>
				  </div>
				  <div class="tntitle">Starlight X5000</div>
				  <label class="ai-switch">
				    <input id="double_scatter_starlight" type="checkbox" `+(isVisible ? '' : 'disabled')+`>
				    <span class="ai-slider"></span>
				  </label>
				  <span class="label-text">Aktifkan Kemenangan Ganda x2<br>Starlight X5000</span>
				</div>
				<div style="clear:both" bis_skin_checked="1"></div>
		    `;

		    if (isVisible) {
		    	if (document.getElementById('ppslot') != undefined) {
				    const tempDiv = document.createElement('div');
				    tempDiv.classList.add('gameContainer');
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
				    tempDiv.classList.add('gameContainer');
			    	tempDiv.innerHTML = htmlString3.trim();
			    	var games = document.getElementsByClassName("panel-body")[0];
					if (games != undefined) {
						const firstChild = games.children[0];
						games.insertBefore(tempDiv, firstChild);
					}
			    }
		    }
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
			    background-image: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp");
			  }
			  .header {
			    background-image: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp");
			  }
			  #togel-desktop {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .provider {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .transaksi {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .guidelines {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .bantuan {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .contentdata {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
			      #000000;
			    background-attachment: fixed;
			    background-size: cover;
			  }
			  .footer {
			    background: url("https://kitasolusimarketingmu.github.io/sewaankamu/images/imgs/1759650120.webp")
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
		//document.body.insertBefore(styleElement, document.body.firstChild);

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

   function redirectCU(e) {
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
   });
});
