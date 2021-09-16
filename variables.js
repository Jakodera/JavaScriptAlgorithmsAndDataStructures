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

//*************************************************Constructing Strings with Variables*********************
var myName = 'Jakodera';
var myStr = 'My name is ' + myName + 'and I am well!';

//**********************************************Appending Variables to Strings*************************

var someAdjective = 'is the name';
var myStr = "Jakodera";
 myStr += someAdjective ;  //Jakodera is the name

 //=************************************************Find the Length of a String***************************
var lastName = "Jakodera";
lastName.length; //8

//***************************Use Bracket Notation to Find the nth Character in a String**************************
var lastName = "Lovelace";
lastName[0];  // L
lastName[7];  //e
//finding the last character
lastName[lastName.length - 1];

//*************************************************Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["peanut butter", 2];
var myArray = [["Chairs", 10], ["Tables", 15]]; // nested array

//*******************************************Access Multi-Dimensional Arrays With Indexes 
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
//QUIZ: Using bracket notation select an element from myArray such that myData is equal to 8.
var myData = myArray[2][1];

//************************************* Array manipulation 
var myArray = [["John", 23], ["cat", 2], [7,8,9]];
//QUIZ: Push ["dog", 3] onto the end of the myArray variable.
myArray.push(["dog", 3]); //var myArray = [["John", 23], ["cat", 2]], [7,8,9], ["dog", 3],]; adds to end
myArray.pop(); // var myArray = [["John", 23], ["cat", 2], [7,8,9]]; deletes last
myArray.shift(); //var myArray = [["cat", 2], [7,8,9]]; deletes first
myArray.unshift(["Paul",35])// var myArray = [["Paul",35], ["John", 23], ["cat", 2], [7,8,9]]; adds first