var car=[];

function CarInfo (color, model ,miles){
    
    this.color = color;
    this.model = model;
    this.miles = miles;
    
    this.runs = function(){
        
        console.log(" Color : " + this.color + "model : " + this.model + " miles : " + miles + " isruning " )
        
        
    }
    
    
    
}

car[0] = new CarInfo("darkgrey" , "Bmw" , 360);

car[1] = new CarInfo("white" , "mercedes" , 260);

car[2] = new CarInfo("blue" , "honda" , 120);

car[3] = new CarInfo("red" , "Kia" , 125);


for(var i = 0 ; i < 4; i++){
    
    car[i].runs();
    
   
     
}

