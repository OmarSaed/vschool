function getRandom(min,max){

    return Math.floor(Math.random()*(max -min+1))+min;

}
var setOfLetters = "abcopqrstuvwxyzABCVWXYZ01236789$#@%#@^"

var pass ='';


function generate() {
var n = $("#length").val();
   pass ='';
    for (var i = 0; i <=n-1; i++) {
        pass += setOfLetters.charAt(getRandom(0 ,setOfLetters.length));
    }
    return pass;
}
  

$("#button").click(function(){
    
  $("#password-Generator").html(generate(pass));  
    
});
