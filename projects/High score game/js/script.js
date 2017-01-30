$("#button").click(function() {
    var Name = $("#name").val();
    var Game = $("#game").val();
    var Date = $("#date").val();
    var HScore = $("#score").val();
    var Trash = $("#trash:checked").val();
    var html = "<tr><td> " + Name + "</td><td>" + Game + "</td><td>" + Date + "</td><td>" + HScore + "</td><td>" + Trash;
    $(".table").append(html);
    
});

$(document).ready(function() 
    { 
        $("#myTable").tablesorter( {sortList: [[0,0], [1,0]]} ); 
    } 
); 
    
