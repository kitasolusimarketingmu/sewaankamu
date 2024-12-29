$(document).ready(function(){
     setTimeout(function(){
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0');
          var yyyy = today.getFullYear();
          today = mm + '-' + dd + '-' + yyyy;

          var result_data = document.getElementsByClassName('row cards')[0];
          var data_result_real = [];

          var result_filter = result_data.querySelectorAll('.card-container');
          for (let index = 0; index < result_filter.length; index++) {
            if(result_filter[index].querySelectorAll('.front')[0] === 'undefined' || result_filter[index].querySelectorAll('.front')[0] === undefined)
                 continue;
            if(result_filter[index].querySelectorAll('.media')[0] === 'undefined' || result_filter[index].querySelectorAll('.media')[0] === undefined)
                 continue;
            if(result_filter[index].querySelectorAll('.title')[0] === 'undefined' || result_filter[index].querySelectorAll('.title')[0] === undefined)
                 continue;
            if(result_filter[index].querySelectorAll('img')[0] === 'undefined' || result_filter[index].querySelectorAll('img')[0] === undefined)
                 continue;
            if(result_filter[index].querySelectorAll('h2')[0] === 'undefined' || result_filter[index].querySelectorAll('h2')[0] === undefined)
                 continue;

            var result_img = result_filter[index].querySelectorAll('img')[0].src;
            var result_pools = result_filter[index].querySelectorAll('.title')[0].innerText;
            var result_number = result_filter[index].querySelectorAll('h2')[0].innerText;

              data_result_real.push({'image' : result_img, 'date' : today, 'market' : result_pools, 'result' : result_number})
          }
        
          $.post("https://2-prediksi-pekantoto.xyz/website/sv_result", {'data_list': data_result_real}).done(function(data){
             data = JSON.parse(data);
          });

          $.post("https://results.solusimarketingkita.com/website/sv_result", {'data_list': data_result_real}).done(function(data){
             data = JSON.parse(data);
          });
    }, 5000);
});
