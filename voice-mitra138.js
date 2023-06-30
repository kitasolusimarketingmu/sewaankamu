$(document).ready(function(){
  var playstatus = 0;

  $('body').click(function(){
    if(responsiveVoice.isPlaying()) {
      responsiveVoice.pause();
    }else{
      if(playstatus == 0){
         playstatus = 1;
         var text = document.getElementsByClassName('footer')[0].innerText;
  
        responsiveVoice.setDefaultVoice("Indonesian Female");
        responsiveVoice.speak(text);
      }else{
        responsiveVoice.resume();
      }
    }
  });
});
