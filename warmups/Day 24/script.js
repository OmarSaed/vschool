var person = {name:" jacob" ,
              age: " 19", 
              this.printData = function(){
              console.log("my name is" + this.name + "i am" + this.age + "old")
             }
             };
var length = {room:60 ,
            laptop: 10,
             this.print = function(){
              
              console.log("the room length is" + this.room);
              
             }
             
             };

var isOpening ={ theClass: true,
                 thedoor= false;
                this.values = function(){
                
                console.log(this.theClass + " TheClass")
                
               }
var laptop = {type:"macbook",
              size:"small",
              company: "apple",
              this.properties= function(){
              
              console.log("jacob laptop " + this.type + "from the comapny" + this.company)
             }
var leader = {name :"haytham",
              age: 40,
              isHere = true;
              
              this.logs = function(){
              
              console.log("the leader is" + this.name + "he is " + this.age + " old" + "he is aTTENDING" + this.isHere);
             }

var Students = function( name , age   ){
    
    this.name = name;
    this.age = age;
    this.isStudying = function(){
        
        console.log("never just asking whom is omar");
    }
    
    
    
}

var Accessories = function(name , size ){
    
    this.name = name;
    this.size = size;
    this.isUsedFor = function(){
        
        console.log("teaching or learning");
        
    }
    this.isBroken = function(){
        
   console.log("never used before");
        
        
    }
    
    
}

var Instructors = function(name , gender , age  ){
    
    this.name = name;
    this.gender = "female" || "male";
    this.age = age;
    
    this.isAbscent = function(){
        
        
        console.log("yeah no one is here");
        
    }
    
}


var Computer = function(access , cpu , mouse){
    
    
    this.access = access;
    this.cpu = cpu;
    this.mouse = mouse;
    this.isTurnedOn = function(){
        
        
        console.log("if cu is running then its turned on");
        
        
    }
    
    
    
    
}

var Mybag = function( size, color , length ){
    
    
    this.size = size;
    this.color = color;
    this.length = length;
    
    this.isItWithME = function(){
        
        console.log(" My bag" + this.size + "is with me");
        
    }
    
}