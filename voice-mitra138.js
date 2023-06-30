$(document).ready(function(){
  var playstatus = 0;

  $('body').click(function(){
    if(responsiveVoice.isPlaying() && playstatus == 1) {
      responsiveVoice.pause();

      console.log('pause speak');

      playstatus = 2;
    }else{
      if(playstatus == 0){
         playstatus = 1;
         var text = document.getElementsByClassName('footer')[0].innerText;

        console.log('start speak');
        
        responsiveVoice.setDefaultVoice("Indonesian Female");
        responsiveVoice.speak(text);
      }else{
        playstatus = 1;
        responsiveVoice.resume();
        console.log('resume speak');
      }
    }
  });
});
