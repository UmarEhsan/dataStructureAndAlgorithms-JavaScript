1.
" Write a program that takes"
"a set of names and phone numbers and stores them in a Dictionary object. Include in your program the ability to display one phone number"
"display all phone numbers, add new phone numbers, remove phone numbers, and clear out the list of numbers."

function Dictionary()
{
    this.datastore = new Array();
    this.add = add;
    this.displayOnePhoneNumber = displayOnePhoneNumber;
    this.displayAllPhoneNumbers = displayAllPhoneNumbers;
    this.removePhoneNumbers = removePhoneNumbers;
    this.clearAll = clearAll;

}


function add(key, value)
{
   this.datastore[key] = value;
}

function displayOnePhoneNumber(key)
{
        return this.datastore[key];
}

function displayAllPhoneNumbers()
{
    for(var key in Object.keys(this.datastore))
        {
            var prop = Object.keys(this.datastore)[key];
            console.log(prop + " => " + "phone number is " + this.datastore[prop]);
        }
}

function removePhoneNumbers(key)
{
    delete this.datastore[key]
}

function clearAll()
{
    this.datastore = [];
}

module.exports = Dictionary;