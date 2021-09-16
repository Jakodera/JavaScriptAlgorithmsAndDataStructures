//Data is anything that is meaningful to the computer
//Javascript data types
/*
     undefined, 
     null, 
     boolean,
     string, 
     symbol, 
     bigint, 
     number -is a data type in JavaScript which represents numeric data, 
     and object.
*/
//Variables allow computers to store and manipulate data in a dynamic fashion

/*Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names 
have the first word in lowercase and the first letter of each subsequent word is capitalized*/

//declaring a variable and assigning value

var myName;

//Declare String Variables

myName = "Jakodera"; //This assigns the string 'Jakodera' to myVariable.

//Escaping Literal Quotes in Strings

/*you can escape a quote from considering it 
as an end of string quote by placing a backslash (\) in front of the quote.*/

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Escape Sequences in Strings
var myStr="FirstLine\n\t\\SecondLine\nThirdLine";
//output
/*FirstLine
    \SecondLine
ThirdLine*/

//Concatenating Strings with Plus Operator

var myStr= 'This is the start. ' + 'This is the end.';

//Constructing Strings with Variables
var myName = 'Jakodera';
var myStr = 'My name is ' + myName + 'and I am well!';