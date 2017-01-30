var printSong = function(lyricsArray){
    
    
    var x =""; 
    
    for(var i=0; i<lyricsArray.length; i++){
        
      x += lyricsArray[i] + " ";
        
    }
    
    console.log(x);
    
}

var printSongBackwards = function(lyricsArray){
    
    
    var y =""; 
    
    for(var i=lyricsArray.length-1; i>=0; i--){
        
     y += lyricsArray[i] + " ";
        
    }
    
    console.log(y);
    
}



var printSongEveryOther = function(lyricsArray){
    
    
    var z =""; 
    
    for(var i=0 ; i <lyricsArray.length ; i+=2){
        
     z += lyricsArray[i] + " ";
        
    }
    
    console.log(z);
    
}





var song = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
console.log("first function: ");

printSong(song);
console.log("second function: ");
printSongBackwards(song);
console.log("third function: ");
printSongEveryOther(song);

