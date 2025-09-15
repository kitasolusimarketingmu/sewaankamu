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
		const htmlString = `
	    <div class="col-md-2 col-sm-3 col-xs-4 text-center gameitembox" style="" bis_skin_checked="1">
		   <div class="gameContent" data-name="Mahjong Ways Super" data-category="1,2" bis_skin_checked="1">
		      <div class="tnhover" bis_skin_checked="1" style="line-height: 130px;">
		         <span class="glyphicon glyphicon-play"></span> Play
		      </div>
		      <div class="tntitle" bis_skin_checked="1">Mahjong Way..</div>
		      <div class="tnimg" data-show="1" bis_skin_checked="1" style="display: block;">
		         <img class="img-responsive" alt="Mahjong Ways Super" title="Mahjong Ways Super" src="https://kitasolusimarketingmu.github.io/sewaankamu/images/5 200x200.gif">
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
		   <div class="gameContent" data-name="Mahjong Ways Super" data-link="32-3-3442" data-opentype="2" data-category="1,2">
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
		   <div class="gameContent" data-name="Mahjong Ways Super 2" data-link="32-3-3443" data-opentype="2" data-category="1,2">
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
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString2.trim();
	    	var games = document.getElementsByClassName('row row-inner')[0];
			if (games != undefined) {
				const firstChild = games.children[3];
				games.insertBefore(tempDiv.children[1], firstChild);
				games.insertBefore(tempDiv.children[0], firstChild);
			}
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