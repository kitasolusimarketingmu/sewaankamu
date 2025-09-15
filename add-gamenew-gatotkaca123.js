window.addEventListener('DOMContentLoaded', function() {
	if ((window.location.pathname.includes("/") || window.location.pathname.includes("home"))) {
		const htmlString = `
	    <div class="col-sm-2 col-xs-4 gameContent" bis_skin_checked="1">
		   <div class="tntitle" bis_skin_checked="1">Mahjong Ways Super</div>
		   <div class="tnimg" bis_skin_checked="1">
		      <img class="img-responsive" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/5 200x200.gif">
		   </div>
		</div>
		<div class="col-sm-2 col-xs-4 gameContent" bis_skin_checked="1">
		   <div class="tntitle" bis_skin_checked="1">Mahjong Ways Super 2</div>
		   <div class="tnimg" bis_skin_checked="1">
		      <img class="img-responsive" alt="Mahjong Ways Super 2" title="Mahjong Ways Super 2" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/1 200x200.gif">
		   </div>
		</div>
	    `;

	    if (document.getElementsByClassName('gamelist').length > 0) {
		    const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.getElementsByClassName('gamelist')[1].children[0];
			if (games != undefined) {
				const firstChild = games.children[0];
				games.insertBefore(tempDiv.children[1], firstChild);
				games.insertBefore(tempDiv.children[0], firstChild);
			}
	    }

	}

	if ((window.location.href.includes("slot/pgsoft") || window.location.href.includes("games/slot?gc=32-3"))) {
		const htmlString3 = `
		    <style>
			  body {
			    font-family: Arial, sans-serif;
			    background: #121212;
			    padding: 20px;
			    color: #eee;
			  }

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

			<div class="gameContent" style="margin-left: 15px;">
			  <div class="tnimg">
			    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/Desain tanpa judul (19).png" alt="Mahjong Ways Super">
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
			    <img src="https://kitasolusimarketingmu.github.io/sewaankamu/images/Desain tanpa judul (20).png" alt="Mahjong Ways Super 2">
			  </div>
			  <div class="tntitle">Mahjong Ways Super 2</div>
			  <label class="ai-switch">
			    <input type="checkbox">
			    <span class="ai-slider"></span>
			  </label>
			  <span class="label-text">Aktifkan Kemenangan Ganda x2 Scatter Emas x1000</span>
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
	    <div class="col-md-2 col-sm-3 col-xs-4 text-center gameitembox" style="" bis_skin_checked="1">
		   <div class="gameContent" data-name="Mahjong Ways Super" data-category="1,2" bis_skin_checked="1">
		      <div class="tnhover" bis_skin_checked="1" style="line-height: 130px;">
		         <span class="glyphicon glyphicon-play"></span> Play
		      </div>
		      <div class="tntitle" bis_skin_checked="1">Mahjong Way..</div>
		      <div class="tnimg" data-show="1" bis_skin_checked="1" style="display: block;">
		         <a href=""><img class="img-responsive" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/5 200x200.gif"></a>
		         <div class="eventtagContainer" bis_skin_checked="1">
		         </div>
		      </div>
		   </div>
		</div>
		<div class="col-md-2 col-sm-3 col-xs-4 text-center gameitembox" style="" bis_skin_checked="1">
		   <div class="gameContent" data-name="Mahjong Ways Super 2" data-category="1,2" bis_skin_checked="1">
		      <div class="tnhover" bis_skin_checked="1" style="line-height: 130px;">
		         <span class="glyphicon glyphicon-play"></span> Play
		      </div>
		      <div class="tntitle" bis_skin_checked="1">Mahjong Way..</div>
		      <div class="tnimg" data-show="1" bis_skin_checked="1" style="display: block;">
		         <img class="img-responsive" alt="Mahjong Ways Super 2" title="Mahjong Ways Super 2" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/1 200x200.gif">
		         <div class="eventtagContainer" bis_skin_checked="1">
		         </div>
		      </div>
		   </div>
		</div>
	    `;

	    const htmlString2 = `
	    <div class="col-md-2 col-sm-3 col-xs-4 text-center gameitembox" style="">
		    <div class="gameContent" onclick='window.open(window.location.href.replace("gc", "gg")+"-3442", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Mahjong Ways Super" data-link="32-3-3442" data-opentype="2" data-category="1,2">
		      <div class="tnhover">
		         <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
		      </div>
		      <div class="tntitle">Mahjong Ways Super</div>
		      <div class="tnimg" data-show="1" style="display: block;">
		         <img class="img-responsive" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/5 200x200.gif">
		         <div class="eventtagContainer">
		         </div>
		      </div>
		   </div>
		</div>
		<div class="col-md-2 col-sm-3 col-xs-4 text-center gameitembox" style="">
		   <div class="gameContent" onclick='window.open(window.location.href.replace("gc", "gg")+"-3443", "_blank", "width=414,height=736,top=100,left=100,resizable=yes,scrollbars=yes,status=yes");' data-name="Mahjong Ways Super 2" data-link="32-3-3443" data-opentype="2" data-category="1,2">
		      <div class="tnhover">
		         <span class="glyphicon glyphicon-play"></span>&nbsp;&nbsp;Play
		      </div>
		      <div class="tntitle">Mahjong Ways Super 2</div>
		      <div class="tnimg" data-show="1" style="display: block;">
		         <img class="img-responsive" alt="Mahjong Ways Super 2" title="Mahjong Ways Super 2" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/1 200x200.gif">
		         <div class="eventtagContainer">
		         </div>
		      </div>
		   </div>
		</div>
	    `;

	    const isVisible = document.getElementsByClassName("playercredit").length > 0;
	    if (isVisible) {
	    	setTimeout(function(){
	    		var iframe = document.getElementById("iframeGame");
				const doc = iframe.contentDocument || iframe.contentWindow.document;
				var games = doc.querySelector('.row.row-inner');

				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = htmlString2.trim();

				if (games) {
			      const firstChild = games.children[3];
			      games.insertBefore(tempDiv.children[1], firstChild);
			      games.insertBefore(tempDiv.children[0], firstChild);
			    }
	    	}, 7000);
	    }else{
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.getElementsByClassName('subgamecontent')[0];
			if (games != undefined) {
				const firstChild = games.children[3];
				games.insertBefore(tempDiv.children[1], firstChild);
				games.insertBefore(tempDiv.children[0], firstChild);
			}
	    }
	}
});
