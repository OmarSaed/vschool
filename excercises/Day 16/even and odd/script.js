 var evenarray = [];
function createEvenArray (highestnumber){
    
    for(var i=2 ; i<= highestnumber ; i++ ){
    
       

        if( i % 2 == 0){
            
            evenarray.push(i);
          
        }  
    }
    
    
}

createEvenArray(10);
console.log ( evenarray );

function createOddarray(highestnumber){
    
    for(i= 2 ; i <=highestnumber + 1 ; i++){
        
        if(i % 2 != 0){
            
            evenarray.push(i)
        }
        
    }
    
    
}

createOddarray(10);

evenarray.sort(function(a, b){return a-b});
console.log(evenarray);
