//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(str){
if (name === str){
return true;
}
else {
  return false;
}
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
var name = prompt("what is your name");
return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){

 alert("Welcome, "+ getName());

}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// parameters are token values by a function
// arguments are a function's results being as parameters to another function

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

// falsy values are (0 , null , undefined , NaN , '', false) .
// if (!var)



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){

return "Qais";

  }



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn(){
  return myName;
}

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = myName ;
//Now invoke innerFn.
innerFn();
