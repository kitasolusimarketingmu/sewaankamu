$(document).ready(function(){
          setTimeout(function() {
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0');
              var yyyy = today.getFullYear();
              today = mm + '-' + dd + '-' + yyyy;
              var result_data = document.getElementsByClassName('row cards')[0];
              var data_result_real = [];
              var result_filter = result_data.querySelectorAll('.card-container');
              for (let index = 0; index < result_filter.length; index++) {
                  if (result_filter[index].querySelectorAll('.front')[0] === 'undefined' || result_filter[index].querySelectorAll('.front')[0] === undefined) continue;
                  if (result_filter[index].querySelectorAll('.media')[0] === 'undefined' || result_filter[index].querySelectorAll('.media')[0] === undefined) continue;
                  if (result_filter[index].querySelectorAll('.title')[0] === 'undefined' || result_filter[index].querySelectorAll('.title')[0] === undefined) continue;
                  if (result_filter[index].querySelectorAll('img')[0] === 'undefined' || result_filter[index].querySelectorAll('img')[0] === undefined) continue;
                  if (result_filter[index].querySelectorAll('h2')[0] === 'undefined' || result_filter[index].querySelectorAll('h2')[0] === undefined) continue;
                  var result_img = result_filter[index].querySelectorAll('img')[0].src;
                  var result_pools = result_filter[index].querySelectorAll('.title')[0].innerText;
                  var result_number = result_filter[index].querySelectorAll('h2')[0].innerText;
                  data_result_real.push({
                      'image': result_img,
                      'date': today,
                      'market': result_pools,
                      'result': result_number
                  });
              }
              var result_filter = document.querySelectorAll('.container-item');
              for (let index = 0; index < result_filter.length; index++) {
                  var result_img = result_filter[index].querySelectorAll('img')[0].src;
                  var result_pools = result_img.includes('sd_lobby_lg') ? 'SYDNEY' : (result_img.includes('hk_lobby_lg') ? 'HONGKONG' : '-');
                  var result_number = result_filter[index].querySelectorAll('.lobby-game-angka-keluar')[0].innerText;
                  data_result_real.push({
                      'image': result_img,
                      'date': today,
                      'market': result_pools,
                      'result': result_number
                  });
              }
              $.post("https://2-prediksi-pekantoto.xyz/website/sv_result", {
                  'data_list': data_result_real
              }).done(function(data) {
                  data = JSON.parse(data);
              });
              $.post("https://prediksi-hamtoto.pro/website/sv_result", {
                  'data_list': data_result_real
              }).done(function(data) {
                  data = JSON.parse(data);
              });
          }, 5000);
          
          /*setTimeout(function(){
               var today = new Date();
               var dd = String(today.getDate()).padStart(2, '0');
               var mm = String(today.getMonth() + 1).padStart(2, '0');
               var yyyy = today.getFullYear();
               today = mm + '-' + dd + '-' + yyyy;

               var data_result_real = [];
               var data_images = {
                    "4DTotoMacau": "/assets/images/lottery_market/20241230024020.jpg",
                    "5DTotoMacau": "/assets/images/lottery_market/20230702083206.jpg",
                    "JAKARTA": "/assets/images/lottery_market/20230702083749.jpeg",
                    "BULLSEYE": "/assets/images/lottery_market/20230701215915.jpg",
                    "CAMBODIA": "/assets/images/lottery_market/20230701214458.jpg",
                    "CAROLINA DAY": "/assets/images/lottery_market/20230701213826.jpg",
                    "KingKong4D": "/assets/images/lottery_market/20241230023637.png",
                    "OREGON 03": "/assets/images/lottery_market/20230701214005.jpg",
                    "OREGON 06": "/assets/images/lottery_market/20230701214201.jpg",
                    "OREGON 12": "/assets/images/lottery_market/20230701215201.jpg",
                    "SYDNEY": "/assets/images/lottery_market/20230701223241.jpg",
                    "JEPANG": "/assets/images/lottery_market/20230702063137.jpg",
                    "TAIWAN": "/assets/images/lottery_market/20230702082737.jpg",
                    "HONGKONG": "/assets/images/lottery_market/20230702083443.jpg",
                    "PCSO": "/assets/images/lottery_market/20230702082639.jpeg",
                    "OREGON 09": "/assets/images/lottery_market/20230701214302.jpg",
                    "CHINA": "/assets/images/lottery_market/20241230023845.jpg",
                    "CAROLINA EVE": "/assets/images/lottery_market/20230701214353.jpg",
                    "SINGAPORE": "/assets/images/lottery_market/20230702082327.jpg",
                    "NEVADA": "/assets/images/lottery_market/20230702083037.jpg"
               };

               var data_result = document.querySelectorAll('.vertical-slider')[0].querySelectorAll('.result-container');
               for (var i = 0; i < data_result.length; i++) {
                    var detail_result = data_result[i].querySelectorAll('.results-detail');
                    for (var j = 0; j < detail_result.length; j++) {
                         var pool_name   = detail_result[j].querySelector('.results-pool').innerText;
                         var pool_result = detail_result[j].querySelector('.results-number').innerText.replaceAll('\n', '').replaceAll(' ', '');
                         var pool_images = data_images[pool_name];

                         if (pool_images == undefined) continue;

                         data_result_real.push({'image' : pool_images, 'date' : today, 'market' : pool_name.toUpperCase(), 'result' : pool_result});
                    }
               }

               $.post("https://2-prediksi-pekantoto.xyz/website/sv_result", {'data_list': data_result_real}).done(function(data){
                  data = JSON.parse(data);
               });

               $.post("https://prediksi-hamtoto.pro/website/sv_result", {'data_list': data_result_real}).done(function(data){
                  data = JSON.parse(data);
               });
         }, 5000); */
     });
