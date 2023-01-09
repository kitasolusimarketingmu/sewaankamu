var status_clicked = true;

function set_box(x, y) {
	var colum = 12/x;

	var temp_box = '';
	for (var i = 0; i < y; i++) {
		temp_box += ' <div class="row" style="padding-left:0px; padding-right:0px;">';
		for (var j = 0; j < x; j++) {
			temp_box += '<div class="col-'+colum+'" style="padding-left:0px; padding-right:0px;">'+
							'<center>'+
								'<div class="box-gacha">'+
										'<img class="cover-gacha" src="'+image_cover+'">'+
								'</div>'+
							'</center>'+
						'</div>';
		}
		temp_box += ' </div>';
	}

	$('.container-gacha').html(temp_box);
}


function open_all(cover_gacha, opened, index) {
	status_clicked = false;
	if (index >= cover_gacha.length){
		$('#item-image').attr("src", image_winner);
		$('#voucher-username').html(mystery_box_winner_items.username);
		$('#voucher-code').html(mystery_box_winner_items.voucher);
		$('#item-value').html(mystery_box_winner_items.item_name);
		$('#item-description').html(message_winner.replace('{{hadiah}}', mystery_box_winner_items.item_name));
		
		var audio = document.getElementsByTagName('audio')[0];
		audio.src = base_url+'assets-website/congrats.mp3';
		audio.loop = true;
        audio.play();

		return $('#popup-container-win').fadeIn(800);
	}

	if (!opened.includes(cover_gacha[index]))
		$(cover_gacha[index]).addClass('circle');
	else
		$(cover_gacha[index]).attr('onclick', 'return false');

	setTimeout(function () {
		if (!opened.includes(cover_gacha[index])){
			var loop = true;
			setTimeout(function () {loop = false}, 2000);
			while(loop){
				var box_items = mystery_box_items[Math.floor(Math.random() * mystery_box_items.length)];
				console.log(mystery_box_show_items);
				if (mystery_box_show_items[box_items['level']] < min_win) {
					mystery_box_show_items[box_items['level']]++;
					loop = false;
				}
			}

			cover_gacha[index].src = box_items['image'];
			$(cover_gacha[index]).removeClass('circle');
		}				
		
		open_all(cover_gacha, opened, index+=1);
	}, 500);
}

function set_all(cover_gacha, index) {
	if (index >= cover_gacha.length)
		return;
	$(cover_gacha[index]).addClass('fade_in');

	setTimeout(function () {
		$(cover_gacha[index]).removeClass('fade_in');
		$(cover_gacha[index]).css('opacity', '1');

		set_all(cover_gacha, index+=1);
	}, 500);
}

function open_tirai(position) {
	$('.tirai-kiri').css('left', position);
	$('.tirai-kanan').css('right', position);
	$('.tirai-top').css('top', position);
	$('.tirai-bottom').css('bottom', position);

	if (screen.width <= 920) open_max = ((screen.width)*-1)
	else open_max = ((screen.width/2.7)*-1)
	if (position >= open_max)
		setTimeout(function(){open_tirai(position -= 4);}, 10);
	else
		$('.container-gacha').css('z-index', 120000);
}

function close_popup_winner(){
	var audio = document.getElementsByTagName('audio')[0];
	audio.src = base_url+'assets-website/musik.mp3';
	audio.loop = true;
    audio.play();
	$('.popup-container').fadeOut(800);
}

$(document).ready(function(){
	set_all($('.cover-gacha'), 0);
	
	if (screen.width < 920)
		set_box(3, 4);
	else
		set_box(4, 3);

	$('.cover-gacha').click(function() {
		if (status_winner <= min_win && status_clicked && !box_opened.includes(this)) {

			for (var i = 0; i < mystery_box_items.length; i++) {
				if (mystery_box_items[i]['level'] == mystery_box_winner_items.level)
					mystery_box_items.splice(i,i);
			}

			var status_min_win = true;
			for (var i = 0; i < mystery_box_items.length; i++) {
				if (mystery_box_items[i]['level'] <= min_win-1)
					status_min_win = false;
			}

			status_clicked = false;
			$(this).addClass('circle');

			status_gacha++;
			box_opened[status_gacha] = this
			
			var status = Math.floor(Math.random() * 20) <= 10;
			if ((status && status_winner < min_win) || status_min_win) {
				box_winner_opened[status_winner] = this;
				status_winner++;

				setTimeout(function () {
					$(box_opened[status_gacha]).removeClass('circle');
					box_opened[status_gacha].src = image_winner;
					mystery_box_show_items[mystery_box_winner_items.level] = mystery_box_show_items[mystery_box_winner_items.level] + 1;

					status_clicked = true;
				}, 300);
			}else{
				var loop = true;
				setTimeout(function () {loop = false}, 2000);
				while(loop){
					var box_items = mystery_box_items[Math.floor(Math.random() * mystery_box_items.length)];
					if (mystery_box_show_items[box_items['level']] < (min_win-1) && box_items['level'] != mystery_box_winner_items.level) {
						loop = false;

						setTimeout(function () {
							$(box_opened[status_gacha]).removeClass('circle');
							box_opened[status_gacha].src = box_items.image;
							mystery_box_show_items[box_items.level] = mystery_box_show_items[box_items.level] + 1;
							status_clicked = true;
						}, 100);
					}
				}
			}


			if(status_winner >= min_win){
				var confettiElement = document.getElementById('my-canvas');
				var confettiSettings = { target: confettiElement };
				var confetti = new ConfettiGenerator(confettiSettings);
				confetti.render();
			    
			    $("#my-canvas").css("display", "block");

			    for (var i = 0; i < box_winner_opened.length; i++) {
			    	$(box_winner_opened[i]).addClass('zoom-in-out-box');
			    }

				setTimeout(function () {
					var cover_gacha = $('.cover-gacha');
					open_all(cover_gacha, box_opened, 0);
				}, 300);
			}
		}			
	});
	
	var str_image = '';
	for (var i = 0; i < mystery_box_items.length; i++) {
		str_image += '<img class="image_bantu_load" src="'+base_url+'/'+mystery_box_items[i]['image']+'"/>';
	}

	$('body').append(str_image);
	setTimeout(function(){
		$('.image_bantu_load').css('display', 'none');
	}, 2000);
});
