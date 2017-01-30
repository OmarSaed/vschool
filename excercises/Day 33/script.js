function deleteItem(item){
    
    $(item).remove();
}



$("#submit").click(function(){
    
   var item = $("#text").val();
    console.log(item);
    $(".output").append ( "<li id = '" + item + "'> <button onclick =deleteItem(" + item + ")>x</button>" + item + "</li>" );
    
    $("#text").val("");
});
