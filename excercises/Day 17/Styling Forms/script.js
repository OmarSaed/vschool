$("#btn").click(function(){
var firstname =  $("#firsntame").val();
var lastname =  $("#lastname").val();
var age =  $("#Age").val();
var location = $("#location:checked").val();
var rst = $("rst1:checked").val();
var gender = $("male:checked").val();
              
   
   
 alert("hi " + firstname + " "    
     + lastname + " you are : " + age + " " + gender + " thanks for choosing your location " + location + " " + rst  )
});

