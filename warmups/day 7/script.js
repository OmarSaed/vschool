var name = " my name is Omar";
var x = 26;
var isComing = true;
var accademy = [ 1, 2, "my name"];
var myClass = {
    name: "omar",
    nextTo: "khaled"
} ;



var numbers = [ 1,,2,3,4,5,6,7,8,9,10] ;

var spliceArray = function(arr){
    
    return arr.splice(0,6);
}

console.log(spliceArray(numbers));

var myName = "Omar";

function removeO(name) {
  console.log(name);
  var data = name.toLowerCase().split("");
  console.log(data);
  var filteredData = data.filter(function(charcter) {
    if(charcter == "O") {
      return 0;
    } else {
      return 1;
    }
  });
  console.log(filteredData.join(""));
}

removeO(myName);

var myName = "Omar Saed";

var data = myName.split("");
console.log(data);
console.log(data.join(""));
