// First Question
function reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse(32243)));

// Third Question

function conmbinations(dog)
{
var array1 = [];
  for (var x = 0, y=1; x < dog.length; x++,y++) 
  {
   array1[x]=dog.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

conmbinations("dog");

// fourth question
function sort(asg)
  {
return asg.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Fifth Question

function uppercase(fox)
{
  var array1 = fox.split(' ');
  var array2 = [];
    
  for(var x = 0; x < array1.length; x++){
      array2.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return array2.join(' ');
}
console.log(uppercase("the quick brown fox"));

//sixth question
function longest_word(long)
{
  var array = long.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var x = 1 ; x < array.length ; x++)
  {
    if(result.length < array[x].length)
    {
    result = array[x];
    } 
  }
  return result;
}
console.log(longest_word('Web Development Tutorial'));

// Seventh Question
function vowel(asg)
{
  var vowels = 'aeiouAEIOU';
  var vowelcount = 0;
  
  for(var x = 0; x < asg.length ; x++)
  {
    if (vowels.indexOf(asg[x]) !== -1)
    {
      vowelcount += 1;
    }
  
  }
  return vowelcount;
}
console.log(vowel("The quick brown fox"));

// Eight Question
function check_prime_number(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(check_prime_number(9));


function check_prime_number(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(check_prime_number(13));

// tenth question

function Second_last_first(sort_num)
{
  sort_num.sort(function(x,y)
           {
           return x-y;
           });
  var arrange = [sort_num[0]];
  var result = [];
  
  for(var j=1; j < sort_num.length; j++)
  {
    if(sort_num[j-1] !== sort_num[j])
    {
      arrange.push(sort_num[j]);
    }
  }
    result.push(arrange[1],arrange[arrange.length-2]);
  return result.join(',');
  }

console.log(Second_last_first([1,2,3,4,5]));
