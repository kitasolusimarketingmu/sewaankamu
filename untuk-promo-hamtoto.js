<script>
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
	        }
    	}, 200);
    });
</script>
