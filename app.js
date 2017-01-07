'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){ //eslint-disable-line
  var result = a + b;
  var message = 'The sum of ' + a + ' and ' + b
 + ' is ' + result + '.';
  console.log(message);
  return [result, message];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
  var result = a * b;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + result + '.';
  console.log(message);
  return [result, message];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
// I'm tired of typing "+ ' and ' +"
var nd = ' and ';
function sumAndMultiply(a, b, c){ //eslint-disable-line
  // get the number returned by function sum() on a & b
  var addAtoB = sum(a, b)[0];
  console.log('Sum of first two numbers is: ' + addAtoB);
  // call sum() again with previous result & c
  var addABtoC = sum(addAtoB ,c)[0];
  // using .concat method on strings to reduce repetition
  var sumMessage = ''.concat(a, nd, b, nd, c, ' sum to ', addABtoC, '.');
  console.log(sumMessage);
  // follow the same pattern for function multiply();
  var multAbyB = multiply(a, b)[0];
  console.log(a + ' * '.concat(' ', b , ' returns: ', multAbyB));
  var multABbyC = multiply(multAbyB, c)[0];
  var multiplyMessage = 'The product of '.concat(a, nd, b, nd, c, ' is ', multABbyC, '.');
  console.log(multiplyMessage);
  return [addABtoC, multABbyC, sumMessage, multiplyMessage];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  /*
  the array received by this function may be of any length;
  need to iterate to ensure all numbers in the array are added.
  */
  var inputArrayString = '';
  var runningTotal = 0;
  for (var i = 0; i < testArray.length; i += 1) {
    console.log('Beginning sumArray loop ' + (i + 1) + ' of ' + (testArray.length));
    runningTotal = sum(runningTotal, testArray[i])[0];
    console.log('runningTotal is: ' + runningTotal);
    // Concatenate string of numbers added with separator
    inputArrayString += testArray[i] + ',';
    console.log('Numbers added are: ' + inputArrayString);
  }
  inputArrayString = inputArrayString.slice(0, (inputArrayString.length - 1));
  // expected output per instructions
  console.log('Expected output below:');
  console.log('2,3,4 was passed in as an array of numbers, and 9 is their sum.');
  // comparing multiple outputs with expected output, none are matching
  console.log('My output attempts:');
  console.log(inputArrayString + ' was passed in as an array of numbers, and ' + runningTotal + ' is their sum.');
  console.log(testArray + ' was passed in as an array of numbers, and ' + runningTotal + ' is their sum.');
  console.log([testArray, ' was passed in as an array of numbers, and ' + runningTotal + ' is their sum.']);
  return(testArray + ' was passed in as an array of numbers, and ' + runningTotal + ' is their sum.');
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray([2,3,4]);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
