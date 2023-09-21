// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var first = "I am a";
var second = "Kalvain";
var String = first + " "+ second + " ";

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
console.log(String);

// Challenge 3: Store a string in a variable and display the length of the string.
var length = String.length;
console.log(length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var uppercase = String.toUpperCase();
console.log(uppercase);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var string1 = "I love programming";
var replacedString = string1.replace("programming", "JavaScript programming"); 
console.log(replacedString); // Output: "I love JavaScript programming"

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
console.log(String.repeat(3))

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var string2 = "I am a Kalvian";
console.log(string2.split(''));

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var string3 = "Time and Tide wait for none";
console.log(string3.indexOf("Ti"));

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var string4 = "When life gives you lemons make lemonade";
console.log(string4.search("lemon"));

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var string5 = "You must be the change you wish to see in the world.";
console.log(string5.slice(16, 22)); 
console.log(string5.substring(46, 51));