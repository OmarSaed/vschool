var readlineSync = require('readline-sync');
var num1 = readlineSync.question("Enter Number One ");
var num2 = readlineSync.question("Enter Number Two ");
var operator = readlineSync.question("is it + - * / ");

var addition = function() {
    var add;
    add = parseFloat(num1) + parseFloat(num2);
    console.log("the result is " + add.toString());
};
var subtraction = function() {
    var sub;
    sub = parseFloat(num1) - parseFloat(num2);
    console.log("the result is " + sub);
};
var multiplication = function() {
    console.log("The result is " + parseFloat(num1) * parseFloat(num2));
};
var division = function() {
    console.log("The result is " + parseFloat(num1) / parseFloat(num2));
};


if(operator ==  "+") {
    return addition();
} else if(operator ==  "-") {
    return subtraction();
} else if (operator ==  "*") {
    return multiplication();
}else if(operator ==  "/") {
    return division();
};