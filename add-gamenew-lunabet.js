window.addEventListener('DOMContentLoaded', function() {
	if (window.location.pathname.includes("slots/pgsoft") && document.body.classList.contains("mobile")) {
		const htmlString = `
	    <a class="col-xs-4 col-md-3 game-box text-center login" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" id="btnToggleRSideNav" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" *ngif="showEle" width="90" height="90"> <!--/*IMAGE MIN WIDTH MUST BE 146, MAX 6 game-box per row */-->
		   </div>
		   <h5 data-title="Lucky Super Mahjong">Lucky Super Mahjong</h5>
		</a>
	    `;

	    const htmlString2 = `
	    <a class="col-xs-4 col-md-3 game-box text-center" data-title="Lucky Super Mahjong" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" onclick="showGameLinks(event, 'Lucky Super Mahjong', 'https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1' , '74', '' )" style="">
		   <div class="content-wrapper" bis_skin_checked="1">
		      <img class=" lazyloaded" data-src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" *ngif="showEle"> <!--/*IMAGE MIN WIDTH MUST BE 146, MAX 6 game-box per row */-->            
		   </div>
		   <h5 data-title="Lucky Super Mahjong">Lucky Super Mahjong</h5>
		</a>
	    `;

	    const isVisible = document.getElementsByClassName("btn-refresh-wallet").length > 0;
	    if (isVisible) {
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString2.trim();
	    	var games = document.getElementsByClassName('games no-gutters')[0];
			if (games != undefined) {
				const firstChild = games.firstElementChild;
				games.insertBefore(tempDiv.firstElementChild, firstChild);
			}
	    }else{
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.getElementsByClassName('games no-gutters')[0];
			if (games != undefined) {
				const firstChild = games.firstElementChild;
				games.insertBefore(tempDiv.firstElementChild, firstChild);
			}
	    }
	}
});

window.addEventListener('DOMContentLoaded', function() {
	if (window.location.pathname.includes("slots/pgsoft") && document.body.classList.contains("desktop")) {
		const htmlString = `
	    <div class="game-box text-center" data-jpid="" data-title="Lucky Super Mahjong" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" [id]="'gb-'+ i" bis_skin_checked="1" style="">
		<div class="image" bis_skin_checked="1">
		   <!-- [delayMsec]="1500"-->
		   <img src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" data-src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" class="unveiled lazyloaded" *ngif="showEle">
		   <!--/*IMAGE MIN WIDTH MUST BE 146, MAX 6 game-box per row */-->
		</div>
		<div class="game-title" bis_skin_checked="1">Lucky Super Mahjong</div>
		<div class="amount_box" style="display:none;" bis_skin_checked="1">
		</div>
		<div class="game-overlay game-has-try" bis_skin_checked="1">
		   <button class="btn game_button_play login-alert " i18n="@PlayNow">
		   MAIN SEKARANG        </button>
		</div>
		</div>
	    `;

	    const htmlString2 = `
	    <div class="game-box text-center" data-jpid="" data-title="Lucky Super Mahjong" data-filter="ALL,TOP" [ngclass]="{'flex-grow-2' : game.FlexGrow =='2'}" [id]="'gb-'+ i" style="" bis_skin_checked="1">
		<div class="image" bis_skin_checked="1">
		   <!-- [delayMsec]="1500"-->
		   <img src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" data-src="https://files.sitestatic.net/games/i/165x220/f24e33352829cf3475df062f42e059ef.webp?v=0.1" class="unveiled lazyloaded" *ngif="showEle">
		   <!--/*IMAGE MIN WIDTH MUST BE 146, MAX 6 game-box per row */-->
		</div>
		<div class="game-title" bis_skin_checked="1">Lucky Super Mahjong</div>
		<div class="amount_box" style="display:none;" bis_skin_checked="1">
		</div>
		<div class="game-overlay game-has-try" bis_skin_checked="1">
		   <button class="btn game_button_play " onclick="launchSubGame(event, 'https://linklunabet78-50.xyz/subGameLaunch?isDemo=0&amp;gameID=74&amp;gameCode=pgsoft_slot&amp;subGameID=', 'pgsoft_slot' , 0 )" i18n="@PlayNow">
		   MAIN SEKARANG        </button>
		</div>
		</div>
	    `;

	    const isVisible = document.getElementsByClassName("btn-refresh-wallet").length > 0;
	    if (isVisible) {
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString2.trim();
	    	var games = document.getElementsByClassName('games pgsoft pgsoft_slot')[0];
			if (games != undefined) {
				const firstChild = games.firstElementChild;
				games.insertBefore(tempDiv.firstElementChild, firstChild);
			}
	    }else{
	    	const tempDiv = document.createElement('div');
	    	tempDiv.innerHTML = htmlString.trim();
	    	var games = document.getElementsByClassName('games pgsoft pgsoft_slot')[0];
			if (games != undefined) {
				const firstChild = games.firstElementChild;
				games.insertBefore(tempDiv.firstElementChild, firstChild);
			}
	    }
	}
});
