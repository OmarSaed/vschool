

var Days = ["sunday" , "Monday" , "Tuesday" , " Wednesday " , " Thursday " , " Friday " , "Saturday" ]

 var rand = Days[Math.floor(Math.random() * Days.length)];
console.log( " Today is : " + " " + rand);

var date = new Date();

var time = date.toLocaleTimeString() ; 
console.log( " Current Time is " + " " + time );

