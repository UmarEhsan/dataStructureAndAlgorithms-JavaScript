console.log("Dictionaries");
var dictionary  = require("./Exercises/Exercise1");
var dictionary1  = require("./Exercises/Excercise2");


//Example 1
let phoneBookDictionary = new dictionary();

phoneBookDictionary.add("Ehsan" , "03122449350");
phoneBookDictionary.add("Maaz" , "03122449351");
phoneBookDictionary.add("Taha" , "03122449352");
phoneBookDictionary.add("Noman" , "03122449353");
phoneBookDictionary.add("Furqan" , "03122449354");
phoneBookDictionary.add("Saqlain" , "03122449355");

var displayOne = phoneBookDictionary.displayOnePhoneNumber("Taha");

console.log(displayOne);

phoneBookDictionary.displayAllPhoneNumbers();
phoneBookDictionary.removePhoneNumbers("Ehsan");
phoneBookDictionary.displayAllPhoneNumbers();
phoneBookDictionary.clearAll();

phoneBookDictionary.displayAllPhoneNumbers();
phoneBookDictionary.add("Ehsan" , "03122449350");
phoneBookDictionary.displayAllPhoneNumbers();




//Example 2
let dictionaryExample2 = new dictionary1();
dictionaryExample2.add();

console.log(dictionaryExample2.dataStore);





























// function Dictionary()
// {
//     this.dataStore = [];
//     this.add = add;
//     this.find = find;
//     this.remove = remove;
//     this.showAll = showAll;
// }

// //This function takes two arguments, a key and a value. The key is the index for the value element
// function add(key, value)
// {
//     this.dataStore[key] = value; 
// }

// //This function takes one arguments, a key. The key is the index for the value element this method is used to find element
// function find(key)
// {
//     return this.dataStore[key];
// }

// function remove(key)
// {
//   delete this.dataStore[key];
// }

// function showAll() 
// {  
//  for(var key in Object.keys(this.dataStore))
//  {     
//   var prop = Object.keys(this.dataStore)[key];
//   console.log(prop + " -> " + this.dataStore[prop]);
//  } 
// }

// let phoneBook = new Dictionary();
// phoneBook.add("ehsan", "03122449350");
// phoneBook.add("kashif", "03122449351");
// phoneBook.add("malik", "03122449352");

// phoneBook.showAll();