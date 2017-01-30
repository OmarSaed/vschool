var readlineSync = require('readline-sync');

var  text= readlineSync.question("Enter the Sentence You want ");

var shiftednumber = parseInt(readlineSync.question("Enter the number you want to shift "));



function shiftLetters (text , shiftednumber){
    var empty = "" ;
     text=text.toLowerCase();
    
    for( var i =0 ; i <text.length ; i++){
        var character = text[i].charCodeAt();
        var shiftLetter=character+shiftednumber;
        //var shiftz = (( 97 + shiftednumber)-1);
        if (character >= 97 && character <= 122){
            
           
          if(shiftLetter>122){
            var shiftz = 122-character;
            var shift2 =97 + ((shiftednumber-shiftz)-1);
            empty += String.fromCharCode(shift2);
        }else{
             empty += String.fromCharCode(shiftLetter) ; 
         
        }
        }
        else{
            empty += String.fromCharCode(character);
        }
        
    }
    
   return empty;
}

