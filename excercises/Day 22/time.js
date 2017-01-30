var upgradeTime = $("#text-box").val;
var seconds = upgradeTime;
function timer() {
    var hours       = Math.floor(seconds/3600);
    var minutesLeft = Math.floor((hours) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    $('#timer').html =  hours + ":" + minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        $('#timer').html = "End Of the World";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);



  var counter = 21;
  var repeat = setInterval(function() {
    counter--;
    if(counter <= 0) {
      clearInterval(repeat);
      
        $("#timer").html("end of the world");
       
    }
    $("#timer").html(counter);
      
  }, 1000);