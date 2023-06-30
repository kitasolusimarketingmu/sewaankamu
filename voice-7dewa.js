$(document).ready(function(){
  var playstatus = 0;

  $('body').click(function(){
    if(responsiveVoice.isPlaying()) {
      responsiveVoice.pause();

      console.log('pause speak');
    }else{
      if(playstatus == 0){
         playstatus = 1;
         var text = document.getElementsByClassName('site-description')[0].innerText;

        console.log('start speak');
        
        responsiveVoice.setDefaultVoice("Indonesian Female");
        responsiveVoice.speak(text);
      }else{
        responsiveVoice.resume();
        console.log('resume speak');
      }
    }
  });
});
