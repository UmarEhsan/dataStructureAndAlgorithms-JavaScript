console.log("Hashing");

function HashTable()
{
    this.table = new Array(137);
    this.simpleHash = simpleHash;
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
        return total % this.table.length;
}