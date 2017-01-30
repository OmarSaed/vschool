var fibaince = function(){
    
    
    var arr= [0,1];
    for( var i=1 ; i <=98 ; i++){
        
        arr.push(arr[i] + arr[i-1]);
    }
    
    console.log(arr.reduce(function(a,b){
        
           return a + b;
        
    }))
    
    
}
    
   
  fibaince();      
     
   
    
