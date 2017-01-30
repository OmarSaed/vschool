$("#text").css("color" , "red");
$("#color-button").click(function (){
    
    $("#text").css("color" , getColors);
    
    
    
})

var colors = [ "red " , " blue " , "green" , "yellow"];

function getRandom (max , min){
    return Math.floor(Math.random() * (max - min +1 ) + min);
    
}
function getColors( ){
   return colors[getRandom(0 , colors.length -1)];
}
