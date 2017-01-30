document.getElementById("button").addEventListener("click",function(){    
 

var xhr = new XMLHttpRequest()

console.log("iam in");
xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var number = parseInt(document.getElementById("number").value) ;
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    document.getElementById("name").innerHTML = 
    data["objects"][0]["pokemon"][number]["name"];
  
  } 
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json" , true);
xhr.send();



    
  
    
});
    