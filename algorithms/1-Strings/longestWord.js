/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 //we would have to change the function name to findShortestWord, and then in the if statement change the > to a <.
 2. How would you display the actual word in the console?
 //console.log and input the words, request the words from the user
 */

function findLongestWord(str) {
  //a function called findLongestWord has been created with a parameter of (str)
  var words = str.split(' ');
  //a variable named WORDS has been declared as a string that is split with a space 
  var longestWordLength = 0;
  //a variable has been declared as longestWordLength and set to the number value of zero
  
  for (var i = 0; i < words.length; i++) {
    //a for loop has been created with i being set to 0; i being greater than the entire length of the variable words; and to increment the variable by 1.
    if (words[i].length > longestWordLength) {
      //this is a conditional if statement saying that if the entire index of the variable words is less than the longestWordLength
      longestWordLength = words[i].length;
      //this is re-declaring the longestWordLength as equal to the entire length of the index of the variable words
    }
  }
  
  return longestWordLength;
  //returning the value of the variable 
}

