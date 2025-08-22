window.addEventListener('DOMContentLoaded', function() {
		if(document.querySelector('.member-bottom') !== undefined){
		    var member_bottom = document.querySelector('.member-bottom');
		    if (member_bottom.children[0]) {
		    	member_bottom.removeChild(member_bottom.children[0]);
		    }
		}

		if(document.querySelector('.footer__provider') !== undefined){
		    var list_nav = document.querySelector('.footer__provider');
		    if (list_nav && list_nav.children[0]) {
		    	list_nav = list_nav.children[0].querySelector('.provider-nav');
			    if (list_nav.children[7]) {
			    	list_nav.removeChild(list_nav.children[7]);
			    }
		    }
		}

		if(document.querySelector('.sidenav__menu') !== undefined){
		    var list_nav = document.querySelectorAll('.sidenav__menu')[2].children[0];
		    if (list_nav.children[5]) {
		    	list_nav.removeChild(list_nav.children[5]);
		    }
		}
	});
