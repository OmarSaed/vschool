function getRandom(min , max){
  return Math.floor(Math.random()* (max - min +1)) + min;
}

var Enemies = function (name , hitPoints , defence  ) { 
    this.name = name ;
    this.hitPoints = hitPoints ;
    this.defence = this.hitPoints * 3 ;
    
    this.print = function(){
        
        console.log("Name : " + name  + "hit Point is : " + hitPoints + )
        
    } 

} ;
                    
var enemy = ' ' ;
                    
enemy[0] = 
                    
                    
                    