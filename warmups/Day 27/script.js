$("#button").click(function(){
    var decNum = $("#input").val();
     var bin = parseInt(decNum,10).toString(2); 
    
    $("#html").html(bin);
    
    
});
