"Using the Dictionary class,"
"write a program that stores the number of occurrences of words in a text. "
"Your program should display each word in a text just once as well as the number of times"
"the word occurs in the text. For example, given the text “the brown fox jumped over the blue fox,” "
" the output will be:"


function Dictionary()
{
    this.dataStore = new Array();
    this.add = add;
}


function split(text)
{
  return text.split(" ");
}

function add()
{
    var keys = split("the brown fox jumped over the blue fox");
    for(var i=0; i<keys.length; i++)
        {
            
            if(this.dataStore[keys[i]])
                {
                   this.dataStore[keys[i]] += 1;
                }
                else
                {
                  this.dataStore[keys[i]] = 1;
                }
        }
}



module.exports = Dictionary;