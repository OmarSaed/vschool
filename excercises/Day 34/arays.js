function ChangeArray(x){
    
    var arr=[];
   var y= x.toString();
    for (var i=0 ; i<y.length ; i++){
        
        arr.push(y[i]);
        parseInt(y[i]);
    }
    
    
   console.log(arr);
};

ChangeArray(1964);