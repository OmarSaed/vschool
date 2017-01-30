function loadData (data){
    var data ={
        title : "",
        description : description || "N\A" ,
        price : price || 0,
        imgUrl : "" || "N\A",
        
    }
    
 $.ajax(function(){
 
  url: "http://api.vschool.io/class/todo/",
  type="GET"
  data: data ,
  success = true      
    })
    $("#output").append("<li>" + title + "</li>")
}




$(document).ready(function(){
            loadData();
                  })