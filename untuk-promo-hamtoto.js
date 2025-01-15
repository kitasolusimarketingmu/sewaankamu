function isPromotionPage() {
        return window.location.href.indexOf("promotion") > -1;
    }

    function isDesktop() {
        return window.innerWidth >= 1024;
    }

    document.addEventListener("DOMContentLoaded", function() {
    	setTimeout(function() {
	        if (isPromotionPage() && isDesktop()) {
	        	var style = document.createElement("style");
			    style.type = "text/css";
			    style.innerHTML = `
			        .wimage {
			            border-radius: 0px;
			        }

			        .panel-heading {
			            padding: 0px 15px;
			            margin-top: -1px;
			        }
			    `;
			    document.body.appendChild(style);

	            var kotakkan = document.querySelectorAll('#content')[0];
				var centerElements = document.querySelectorAll("center");
				centerElements.forEach(function(element) {
				    element.remove();
				});

				var brElements = document.querySelectorAll("br");
				brElements.forEach(function(element) {
				    element.remove();
				});
	        }else{
	        	var style = document.createElement("style");
			    style.type = "text/css";
			    style.innerHTML = `
			        .promosi-content-container .promosi-more {
					    background-color: #000000 !important;
					}
					.promosi-content-container {
					    margin-bottom: 0px !important;
					}
					.main-content .title-page {
					    font-size: 2.5rem;
					    color: #fff;
					    text-shadow: 2px 2px 0px rgb(0 0 0) !important;
					}
					.promosi-content-container .promosi-content .promosi-btn-wrapper .btn-promo#btn-promo-more {
					    background: linear-gradient(to bottom, #fdef02 0%, #ffae00 100%) !important;
					    color: #000 !important;
					    width: 100% !important;
					    height: 76px !important;
					    box-shadow: inset 0 0 5px 3px #f18700, inset 0 2px 0 0 #fff, inset 0 0 0 2px #640067, 3px 3px 3px 1px rgba(0, 0, 0, .2);
					    border-radius: 0px 5px 5px 0px !important;
					    margin-top: 0px !important;
					    padding: 2px !important;
					    border: 1px solid #fdef02;
					}
					.promosi-content-container .promosi-content .promosi-btn-wrapper {
					        width: 14%!important;
					        height: 100%!important;
					        display: flex!important;
					}
					.promosi-content-container .promosi-content {
					        display: flex!important;
					        flex-direction: row!important;
					        overflow: hidden!important;
					        border-radius: 0 0 0.5rem 0.5rem!important;
					        z-index: 1!important;
					}
					.promosi-content-container .promosi-content .promosi-btn-wrapper .btn-promo#btn-promo-play {
					    background-color: #1e9fbe;
					    color: #fff;
					    display: none;
					}
					button#btn-promo-more {
					    background: linear-gradient(to left,#980b0b 0%,#ff0000 50%,#980b0b 100%) !important;
					    color: white !important;
					}
					a#btn-promo-play {
					display:none}
					}
					.promosi-content-container .promosi-more {
					    background-color: #000000 !important;
					}
					.promosi-content-container {
					    margin-bottom: 0px !important;
					}
					.main-content .title-page {
					    font-size: 2.5rem;
					    color: #fff;
					    text-shadow: 2px 2px 0px rgb(0 0 0) !important;
					}
					.promosi-content-container .promosi-content .promosi-btn-wrapper .btn-promo#btn-promo-more {
					    background: linear-gradient(to bottom, #fdef02 0%, #ffae00 100%) !important;
					    color: #000 !important;
					    width: 100% !important;
					    height: 76px !important;
					    box-shadow: inset 0 0 5px 3px #f18700, inset 0 2px 0 0 #fff, inset 0 0 0 2px #640067, 3px 3px 3px 1px rgba(0, 0, 0, .2);
					    border-radius: 0px 5px 5px 0px !important;
					    margin-top: 0px !important;
					    padding: 2px !important;
					    border: 1px solid #fdef02;
					}
					.promosi-content-container .promosi-content .promosi-btn-wrapper {
					        width: 14%!important;
					        height: 100%!important;
					        display: flex!important;
					}
					.promosi-content-container .promosi-content {
					        display: flex!important;
					        flex-direction: row!important;
					        overflow: hidden!important;
					        border-radius: 0 0 0.5rem 0.5rem!important;
					        z-index: 1!important;
					}
			    `;
			    document.body.appendChild(style);
	        }
    	}, 200);
    });
