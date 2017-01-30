

var a = 20 ;
var b = 256;
var c = 5;

var qudrant = function(a,b,c) {
    
    var delta = (b*b) - (4*a*c);
    var x;
    var x1;
    
    if (delta > 0 ) {
        
        return  x = (-b + Math.sqrt(delta)) / (2*a)
                x1 = (-b - Math.sqrt(delta)) / (2*a);
        
    } 
    
    else if (delta ==0){
        
        return x = (-b / (2*a));
    }
    
    else  {
        return "no solution";
    }
}
console.log(qudrant(a,b,c));


