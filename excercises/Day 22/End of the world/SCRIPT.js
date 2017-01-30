

$("#btn-start").click(function() {


var seconds =parseInt($("#text-box").val());




function timer() {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
  
    $('#timer').html(days + ":"  + hours + ":" + minutes + ":" + remainingSeconds );
    
    if (seconds == 0) {
        clearInterval(Timerminus)
        $("#timer").html("the end of the world")
    } else{
       seconds--
    }
       
    
}
var Timerminus = setInterval(timer, 1000);
});

