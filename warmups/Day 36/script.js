var word ="";
var counter = 0;
   word.toLowerCase();
var vowels = function(word){
    
    
    
    for( var i= 0; i<word.length ; i++){
     
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" || word[i] == " "){
            
            counter ++
        }    
        
        
        
    }
    console.log(counter);
    
}

var notVowels = function(word){
    
    var counters = 0;
    
    for( var i= 0; i<word.length ; i++){
        if(word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != " "){
            
            counters ++
        }    
        
        
        
    }
    console.log(counters);
    
}

var anotherSolution = function(){
    var countersss = 0;
    countersss = counter - word.length;
   console.log(countersss);
    
}
vowels("Omar Saed");
anotherSolution();
notVowels("Omar Saed")
