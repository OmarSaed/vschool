function isCaps (letter){
    
    return letter === letter.toUpperCase();
    
}



function antiCaps (str){
    
      var string ="";
    
    for(var i = 0 ; i <str.length ; i++){
       
        var letter = str[i];
            
        if (isCaps(letter) == true){
            
            string += letter.toLowerCase();
            
        } else {
            
            string += str[i].toUpperCase();
        }
        
        
           

}
     return string;
}

 console.log(antiCaps("Helllo World"));
        
     
     
    
