var readlineSync = require("readline-sync");


var txt = readlineSync.question("Please enter any word ? ") ;

console.log( " I cahnged your sentence to uppercase " + " " + txt.toUpperCase()) ;
console.log(" your word has these number of characters " + " " + txt.length );

var text1 = readlineSync.question("please enter first word ?") ;
var text2 = readlineSync.question("please enter the second word?" ) ;

var text3 = " " + text1.concat(" ", text2);;

console.log(text3); 
var text4 = readlineSync.question("write a very long number and illgive you the end of it : ");

if (text4.length >= 20) {
    
    console.log(text4.substr(21 , text4.length));
}

 var text5 = readlineSync.question( "please tell me where to start : ") 
 
 text6 = text4.substring(0 , text5 );

 
console.log( " " + text6);

var text7 =readlineSync.question("if you like to continue typing the last sentence type only ?" );

 console.log( " " + text6 + " " + text7);