$(".yellow" ).hover(function(){
  $(".yellow" ).css("background","blue");
});

$(".yellow").click(function(){
    
    $(".yellow").css("background" , "red")
    
});

$(".yellow").dblclick(function(){
    
    $(".yellow").css("background" , "green")
    
});

$(window).scroll(function(){
    
    $(".yellow").css("background" , "Orange")
    
});

$(".yellow").mouseleave(function(){
    
    $(".yellow").css("background" , "yellow")
    
    
});

$(window).keypress(function(e){
    
var code = e.keyCode;
    
   if(code == 82) { 
     $(".yellow" ).css("background","red");
 }
});
$(window).keydown(function(e){
    
var code = e.keyCode;
    
   if(code == 66) { 
     $(".yellow" ).css("background","blue");
 }
});
$(window).keydown(function(e){
    
var code = e.keyCode;
    
   if(code == 79) { 
     $(".yellow" ).css("background","orange");
 }
});
$(window).keydown(function(e){
    
var code = e.keyCode;
    
   if(code == 71) { 
     $(".yellow" ).css("background","green");
 }
});
$(window).keydown(function(e){
    
var code = e.keyCode;
    
   if(code ==	89) { 
     $(".yellow" ).css("background","yellow");
 }
});