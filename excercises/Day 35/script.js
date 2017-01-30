var Parties = function(name , population){
    
    this.name = name;
    this.population = population
};

function getRandom(min,max){

    return Math.floor(Math.random()*(max -min+1))+min;

};



var party = [];


 party[0] = new Parties("Penguins" , 2000000);

 party[1] = new Parties("Soviets" , 1200000);



    var sendNuke = function(party , onHit , onMiss){
    var chance = getRandom(0,1)
        
    var attacker = getRandom(0,1);
    var attackerName = party[Math.floor(attacker)].name;
        
     console.log("the attacker is :" + attackerName );
        
    if(attackerName == "Penguins"){
        
      
     if(chance = 1){
         onHit();  
         console.log("you hitted the soviets" + party[1].population )
     } else{
         
        onMiss();
     }
        
 } else{
      
     
     if(chance = 1){
         onHit(); 
         console.log("you killed a penguin" + party[0].population )
     } else{
         
        onMiss();
     }
     
 } 
    }
     
    
 
 var onHit = function(){
     
     var damage = -1000;
     party[i].population -= damage;
     
 }
  var onMiss = function(){
     
      
     console.log(attackerName  +  " you make me remember a penguin  !!! What a blind shot" )
 }
 
  
    
 
   
      



  sendNuke(party);