window.addEventListener('DOMContentLoaded', function() {
		if(document.querySelector('.sidenav__list') !== undefined){
		    var list_nav = document.querySelector('.sidenav__list').children[0];
		    if (list_nav.children[13]) {
		    	list_nav.removeChild(list_nav.children[13]);
		    }
		}

		if(document.querySelector('.footer__provider') !== undefined){
		    var list_nav = document.querySelector('.footer__provider').children[0].querySelector('.provider-nav');
		    if (list_nav.children[7]) {
		    	list_nav.removeChild(list_nav.children[7]);
		    }
		}

		if(document.querySelector('.header-icons') !== undefined){
		    var list_nav = document.querySelector('.header-icons');
		    if (list_nav.children[1]) {
		    	list_nav.removeChild(list_nav.children[1]);
		    }
		}
	});
