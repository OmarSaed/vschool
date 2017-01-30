var addition = function(num1,num2){
    var num1 = document.getElementById("first-number").value;
    var num2 =  document.getElementById("second-number").value;
    
    var plus = parseInt(num1) + parseInt(num2) ;
   document.getElementById("total").value = plus;   
}
var Subtraction = function(){
    var num1 = document.getElementById("first-number").value;
    var num2 =  document.getElementById("second-number").value;
    
    var answers = parseInt(num1) - parseInt(num2) ;
    
    document.getElementById("total").value = answers  ;
    
    
}
var multiplication = function(){
    
    var num1 = document.getElementById("first-number").value;
    var num2 =  document.getElementById("second-number").value;
    
    var answers = parseInt(num1) * parseInt(num2) ;
    
    document.getElementById("total").value = answers  ;
    
}
var division = function(){
      var num1 = document.getElementById("first-number").value;
    var num2 =  document.getElementById("second-number").value;
    if (num2 == 0){
        document.getElementById("total").value = "no solution change the zero number";
        
    } else{
    
  
    
    var answers = parseInt(num1) / parseInt(num2) ;
    document.getElementById("total").value =answers ;
    }
}