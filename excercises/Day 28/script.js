var str='';
var x= 0 ;

function findcode(str){
    
    
    

for(var i= 0 ; i<str.length ; i++){
    
str.toLocaleLowerCase();
    
  if(str[i] === "c" && str[i+1] === "o" && str[i+3] === "e"){
      
      x++;
  }  

    else{
        console.log("error counter");
        
    }
    return x;  
}
    }