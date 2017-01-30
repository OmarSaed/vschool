$("#first-enemy-input").on("input",function() {
    var goombasNum = $("#first-enemy-input").val();
    $("#total-of-first-enemy").val(Number(goombasNum) * 5);
});
$("#second-enemy-input").on("input",function() {
    var bobombsNum = $("#second-enemy-input").val();
    $("#second-of-first-enemy").val(Number(bobombsNum) * 7);
});
$("#third-enemy-input").on("input",function() {
    var cheepcheepsSum = $("#third-enemy-input").val();
    $("#third-of-first-enemy").val(Number(cheepcheepsSum) * 11);
});
$("#first-Button").on("click", function() {
    var goombasSum = $("#total-of-first-enemy").val();
    var bobombsSum = $("#second-of-first-enemy").val();
    var cheepcheepsSum = $("#third-of-first-enemy").val();
    var Total = ( Number(goombasSum) + Number(bobombsSum) + Number(cheepcheepsSum));
    $("#The-Total").html(Total);
});

$( "#Mario-image" ).hover(function() {
  $( this ).fadeOut( "slow", function() {
 
  });
});
$( "#Mario-image" ).mouseleave(function() {
  $( this ).fadeIn( "slow", function() {
 
  });
});
$( "#first-Button" ).dblclick(function() {
  $( this ).Css( "color" , "blue")
 

    });
