 function isPromotionPage() {
        return window.location.href.indexOf("promotion") > -1;
}

    function isDesktop() {
        return window.innerWidth >= 1024;
    }

function addElementAtIndex(containerId, newElement, index) {
				  const container = containerId;
				  if (!container) {
				    console.error(`Container dengan ID '${containerId}' tidak ditemukan.`);
				    return;
				  }

				  const referenceNode = container.children[index];
				  if (referenceNode) {
				    container.insertBefore(newElement, referenceNode);
				  } else {
				    container.appendChild(newElement);
				  }
				}

    document.addEventListener("DOMContentLoaded", function() {
    	setTimeout(function() {
	        if (isDesktop()) {
	        	if (isPromotionPage()) {
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

				const divElement = document.createElement("div");
				divElement.textContent = "2025";
				divElement.style.width = "100%";
				divElement.style.height = "120px";
				divElement.style.backgroundImage = "url('https://myrecaphost.cloud/hamtoto/ms/images/jackpot.gif')";
				divElement.style.backgroundSize = "100%";
				divElement.style.backgroundRepeat = "no-repeat";
				divElement.style.display = "flex";
				divElement.style.justifyContent = "center";
				divElement.style.alignItems = "center";
				divElement.style.fontSize = "4rem";
				divElement.style.fontWeight = "bold";
				divElement.style.color = "#ffffff";
				divElement.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
				divElement.style.paddingTop = "-15px";
				divElement.style.marginTop = "5px";
				divElement.style.marginBottom = "5px";
				divElement.style.fontFamily = "Muli";

				const latestResultsElement = document.getElementById("latest-results");
				if (latestResultsElement) {
				latestResultsElement.parentNode.insertBefore(divElement, latestResultsElement);
				} else {
				console.error('Elemen dengan ID "latest-results" tidak ditemukan.');
				}

				function formatRupiah(number) {
				return new Intl.NumberFormat('id-ID', {
				  style: 'currency',
				  currency: 'IDR',
				  minimumFractionDigits: 0
				}).format(number);
				}

				function getInitialValue() {
				const now = new Date();
				const startDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0);
				const diffInSeconds = Math.floor((now - startDate) / 1000);
				return 2000000000 + diffInSeconds * 1000;
				}

				const latestResults = document.getElementById('latest-results');
				let currentValue = getInitialValue();
				divElement.textContent = formatRupiah(currentValue);

				latestResults.parentNode.insertBefore(divElement, latestResults);

				setInterval(() => {
					currentValue += Math.floor(Math.random() * 1000) + 1;
					divElement.textContent = formatRupiah(currentValue);
				}, 100);
	        }else{
	        	if (isPromotionPage()) {
	        		var style = document.createElement("style");
				    style.type = "text/css";
				    style.innerHTML = `
				        .promosi-content-container .promosi-more {
						    background-color: #000000 !important;
						}
						.promosi-content-container {
						    margin-bottom: -1px !important;
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
				    document.head.appendChild(style);
	        	}

			    var buttonjoin = document.querySelectorAll('.buttonjoin')[1];
				function reorderElements(containerId, newOrder) {
				  const container = containerId;
				  if (!container) {
				    console.error(`Container dengan ID '${containerId}' tidak ditemukan.`);
				    return;
				  }
				  const children = Array.from(container.children);
				  if (newOrder.length !== children.length) {
				    console.error("Urutan baru tidak sesuai dengan jumlah elemen dalam container.");
				    return;
				  }
				  const reorderedChildren = newOrder.map(index => {
				    if (index < 0 || index >= children.length) {
				      console.error(`Indeks ${index} tidak valid.`);
				    }
				    return children[index];
				  });
				  container.innerHTML = "";
				  reorderedChildren.forEach(child => container.appendChild(child));
				}

				reorderElements(buttonjoin, [0, 3, 1, 2]);
				buttonjoin.children[1].style.marginBottom = "10px";

				buttonjoin.children[0].classList.remove("buttonWrap", "buttong", "button-green");
				buttonjoin.children[2].classList.remove("buttonWrap", "buttong", "button-green");
				//buttonjoin.children[3].classList.remove("buttonWrap", "buttong", "button-green");
				var styleNya11 = {
				  background: "linear-gradient(to bottom, #fdef02 0%, #ffae00 100%)",
				  color: "white",
				  width: "100%",
				  boxShadow: "inset 0 0 5px 3px #f18700, inset 0 2px 0 0 #fff, inset 0 0 0 2px #640067, 3px 3px 3px 1px rgba(0, 0, 0, .2)",
				  borderRadius: "20px",
				  border: "1px solid #fdef02",
				  marginBottom: "10px",
				  textAlign: "center",
				  fontFamily: "aller",
				  fontSize: "20px",
				  paddingTop: "10px"
				};
				Object.assign(buttonjoin.children[0].style, styleNya11);
				Object.assign(buttonjoin.children[2].style, styleNya11);
				//Object.assign(buttonjoin.children[3].style, styleNya11);

				var buttonjoin = document.querySelectorAll('.buttonjoin')[1];
				const divElement = document.createElement("div");
				divElement.textContent = "2025";
				divElement.style.width = "100%";
				divElement.style.height = "45px";
				divElement.style.backgroundImage = "url('https://myrecaphost.cloud/hamtoto/ms/images/jackpot.gif')";
				divElement.style.backgroundSize = "100%";
				divElement.style.backgroundRepeat = "no-repeat";
				divElement.style.display = "flex";
				divElement.style.justifyContent = "center";
				divElement.style.alignItems = "center";
				divElement.style.fontSize = "1rem";
				divElement.style.fontWeight = "bold";
				divElement.style.color = "#ffffff";
				divElement.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
				divElement.style.paddingTop = "-15px";
				divElement.style.marginTop = "5px";
				divElement.style.marginBottom = "5px";
				divElement.style.fontFamily = "Muli";

				addElementAtIndex(buttonjoin, divElement, 2);

				function formatRupiah(number) {
					return new Intl.NumberFormat('id-ID', {
					  style: 'currency',
					  currency: 'IDR',
					  minimumFractionDigits: 0
					}).format(number);
				}

				function getInitialValue() {
					const now = new Date();
					const startDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0);
					const diffInSeconds = Math.floor((now - startDate) / 1000);
					return 2000000000 + diffInSeconds * 1000;
				}

				let currentValue = getInitialValue();
				divElement.textContent = formatRupiah(currentValue);

				setInterval(() => {
					currentValue += Math.floor(Math.random() * 1000) + 1;
					divElement.textContent = formatRupiah(currentValue);
				}, 100);
	        }

		buttonjoin = document.querySelectorAll('.buttonjoin')[1];
		Object.assign(buttonjoin.children[5].style, {marginBottom:'10px'});
		reorderElements(buttonjoin, [0, 2, 5, 1, 3, 4]);

		var cariin = $('<div style="margin-top: 6px;text-align: center;margin-bottom: 0px;" bis_skin_checked="1"><p style="color: white; , 0px 0px 20px #faf2ca; font-size: 21px;"><b style="-webkit-text-stroke-color: yellow; color: #ffffff;font-size: 15px;font-weight: 600;">Cari HAMTOTO Disini</b></p></div><div class="buttonWrap buttons contactSubmitButton" style="border: 2px solid;animation: borderanimation 5s linear infinite;background: #000000!important;border: 1px solid #800000;!important;" bis_skin_checked="1"><p style="text-align:center;"><b><span"><a href="https://cariakses.id/" style=" color: #FFFFFF;display: flex;justify-content: center;"><span style="text-transform:uppercase;font-size:19px;letter-spacing: 3.2px;color: white;margin-left: 37px;">CARIAKSES.ID</span></a></span"></b></p><div style="position: absolute;top: 0px;left: 0px;background: linear-gradient(to bottom,#c1c1c1 0%,#8f8f8f 50%,#ffffff 100%);border-radius: 17px 0 0 17px;padding: 10px 13px;box-shadow: 1px 0 5px #000000;z-index: 1000px;" bis_skin_checked="1"><b><a href="https://cariakses.id/" style=" color: #FFFFFF;display: flex;justify-content: center;"><img src="https://imgku.io/download/8jKiqH4G.png" alt="" style="width: 20px;"></a></b></div><b><a href="https://cariakses.id/" style=" color: #FFFFFF;display: flex;justify-content: center;"><br></a></b></div>');
		addElementAtIndex(buttonjoin, cariin[0], 3);
		addElementAtIndex(buttonjoin, cariin[1], 4);

		var sliderGame = $('<style>.slider-container{overflow:hidden;width:850px;margin-top: 11px;white-space:nowrap;position:relative}.slider-track{display:flex;gap:10px;animation:scroll 10s linear infinite}.slider-track img{width:140px;height:auto;border-radius:10px}@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}</style><div class=slider-container><div class=slider-track><img src=https://imggalery.com/uploads/user_61/album_99/1741929960.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741929960_1.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_1.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_2.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_3.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_4.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_5.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_6.png> <img src=https://imggalery.com/uploads/user_61/album_99/1741930020_1.png></div></div>');
		addElementAtIndex(buttonjoin, sliderGame[0], 2);
		addElementAtIndex(buttonjoin, sliderGame[1], 3);
    	}, 200);
    });
