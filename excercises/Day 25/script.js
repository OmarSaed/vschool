$("#first").on("click", function() {
    
    
    alert("You Clicked me");
    
    $("#null").html(" you have waited");
    
    
    
});

var timer = setTimeout(function(){
    
    $("#null").html("You waited too many");
    
    
    
} , 2000);

var datalogs = {
    
    name: "data logs" ,
    
    size : 128 ,
    
    isRuning : function(callback){
     console.log("is runing");
     return callback();
   },
   loggedIn : function(){
    return "data traffic" ;
  }
}
$("#nulls").html(datalogs.isRuning(datalogs.loggedIn));