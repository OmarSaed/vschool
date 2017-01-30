var employees = [];

function Employees(name , jobtitle , salary , status ){
    
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status =  "Full Time";
    
     this.printEmployeeForm = function (){
        
        
         console.log("Name : " + this.name +  " Job : " +this.jobtitle  + " Salary : " +  this.salary + " Status : " +  this.status);
        
    }
    
}

employees[0] = new Employees("Omar" , "Designer" , "1000$/hour"  );
employees[1] = new Employees("Mohamad" , "engineer" , "2000$/hour" ); 
employees[2] = new Employees("Ahmad" , "developer" , "3000$/hour"  );
  

for( var i=0 ; i < 3 ; i++){
    
  employees[i].printEmployeeForm();  
    
    
}



