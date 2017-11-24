console.log("Hashing");

function HashTable()
{
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showAll = showAll;
    this.insert = insert;
    // this.get = get

}

//Choosing a Hash Function
//The choice of hash function depends on the data type of the key.If key is an integer, then the simplest 
//hash function is to return the key modulo to the size of the array.There are circumstances when this function is not recommended
//such as when the keys all end in 0 and the array size is 10.This is one reason the array size should alwys be a prome number, such as 137.
//Also if the keys are random integers, then hash function should more evenly distributed the keys.
//This type of hashing is known as modular hashing

//Choosing Hash Function keys
//In many applications, the keys are strings.Choosing a hash function to work with string keys to be more difficult and should be chosen carefully


//Simplest Hash Function
//A simple hash function is to sum ASCII value of the letters in the key.
//The value is then that sum modulo to the size of the array.

function simpleHash(data)
{
    let total = 0;
    for(let i=0; i<data.length; i++)
        {
            total += data.charCodeAt(i);
        }
        console.log("Hash value: " + data + " -> " + total);
        return total % this.table.length;
}


//Inserting element into hash table
function insert(data)
{
    let hashKey = this.betterHash(data);
    this.table[hashKey] = data;
}

//ShowAll elements of Hashtable
function showAll() 
{   
    var n = 0; 
    
    for (var i = 0; i < this.table.length; ++i)
    {    
        
        
        
        if (this.table[i] != undefined)
             {  
                        console.log(i + ": " + this.table[i]);     
             }
    }
            
         }



//If you pay close attention to the output you will see not all the names in the orignal array of names are displayed
//Let’s investigate further by adding a console() statement to the simpleHash() function:
//The problem is now ther's two key in the hash have same key 730 "clayton" and "raymond"
//Let's create a better hash function to avoid collision between keys


//A better hash function
//To avoid collisions, you first need to maake sure that the array you are using for the hashtable is sized to a prime number.
//This is necessary due to modular airthmetic in computing the key.
//The size of the array needs to be greater than 100 in order to more
//evenly disperse the keys in the table.


//After properly sizing the hash table, the next step to avoiding hashing collision is to compute 
//a better hash value



function betterHash(string) {   
    const H = 31;
    let total = 0; 
         for (let i = 0; i < string.length; ++i) 
            {  
            total += H * total + string.charCodeAt(i);   }  
            total = total % this.table.length;  
             if (total < 0)
                 {      
                    total += this.table.length-1;  
                 }  
                    
                     return parseInt(total); 
                    } 
const someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let hTable = new HashTable(); 

someNames.forEach(printHash)
function printHash(elem)
{
    hTable.insert(elem);
}

hTable.showAll();