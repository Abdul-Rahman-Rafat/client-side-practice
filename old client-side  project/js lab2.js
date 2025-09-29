//1---------------
var str1 = "258.90";
var str1_to_int = parseInt(str1);
var str1_to_float = parseFloat(str1);

console.log(str1_to_int , str1_to_float)

//2 ---------------

var num2 = 7.45678;
var str2 = num2.toFixed(2); 
var num22 = Number(str2)
console.log(str2   , num22 )

// 3---------------

var strr = "abc";
console.log(isNaN(strr)) 
console.log(isNaN("123")) // or 123 as num

// 4---------------

console.log(.1+.2==.3) 
console.log((.1+.2).toFixed(1)==.3) 

//5 ---------------

function safeParseInt(str) {
  if (isNaN(parseInt(str))) {
    return null; 
  } else {
    return parseInt(str, 10);
  }
}
console.log(safeParseInt("120px"));  
console.log(safeParseInt("px120"));


//6 ---------------

function isFiniteNumber(value) {
  return (typeof value === "number") 
         && !isNaN(value) 
         && value !== Infinity 
         && value !== null
         && value !== -Infinity;
}

// //Passing tests
// console.log(isFiniteNumber(42));        // true  (number)
// console.log(isFiniteNumber(-3.14));     // true  (float)
// console.log(isFiniteNumber(0));         // true  (zero)
// console.log(isFiniteNumber(1e6));       // true  (scientific notation)

// // Failing tests
// console.log(isFiniteNumber("42"));      // false (string, even if numeric)
// console.log(isFiniteNumber(NaN));       // false (NaN)
// console.log(isFiniteNumber(Infinity));  // false (Infinity)
// console.log(isFiniteNumber(null));



//7 ---------------
var str4 =  "   hello world  "
console.log(str4.trim());


//8 ---------------
var strrrr =  "javascript"
console.log(strrrr.slice(4,10));
console.log(strrrr.substring(4,10));


//9 ---------------
var str2323 = "Banana Mania";
var count = 0;

str2323.toLowerCase().split("").forEach(ch => {
  if (ch === "a") {
    count++;
  }
});

console.log(count); 


//10 ---------------

var strrrr11 =  "javascript"
function reverseString(s) {
  return s
    .split("")             
    .reduceRight((acc, ch) => acc + ch, ""); 
}

console.log(reverseString(strrrr11))


//11 ---------------
function capital_Words(words) {
  return words
    .split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
}

console.log(capital_Words("hello there friend"));  


//12 ---------------
var sttr= "https://example.com/path/to/page"
twoslashs_index=sttr.indexOf("//")+2
slash_index=sttr.indexOf(".com")+4
console.log(sttr.slice(twoslashs_index,slash_index))


//13 ---------------
function naiveIndexOf(haystack, needle){
for( var i=0;i<haystack.length;i++ )
{
    if(needle==haystack[i])
        return i
}
return -1
}
console.log(naiveIndexOf("hello abdo","a"))


//14 ---------------
var s = 'hello';
 if (s.toUpperCase() === 'HELLO') // toUpperCase() no toUpperCase   and === not only =
    { console.log('match'); }


//15 ---------------
myarr=[1,2,3,4,5]    
myarr.push(6)
myarr.unshift(0)
console.log(myarr)

//16 ---------------
myarr.pop()
console.log(myarr)
st_element = myarr.shift() 
console.log(st_element)
myarr.shift() 
console.log(myarr)


//17 ---------------
arr1=[10,20,30,40,50]
arr2=arr1.slice(0,3)
console.log(arr2)


//18 ---------------
arrrr=[1,2,3,4,5]
arrrr.splice(2,0,'a','b')
console.log(arrrr)


//19 ---------------
arrrr.slice(1,3)
console.log(arrrr)  // array doesnot change

arrrr.splice(1,3)
console.log(arrrr)  // array changes


//20 ---------------
ar33r=[]
ar33r[7]=0
console.log(ar33r) 
console.log(ar33r.length) 


//21 ---------------
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {      
      result.push(array[i]);
    }
  }
  return result;
}
console.log(compact([0, 1, false, 2, '', 3, null, undefined, NaN, "hello"]));


//22 ---------------
function deepClone1D(a) {
  var clone = [];
  for (var i = 0; i < a.length; i++) {
    clone[i] = a[i];  // value by value if we use array = array it will be refrenced and that not needed here
  }
  return clone;
}
araa=[1,9]
clooooone=deepClone1D(araa)
console.log(clooooone)



//23 ---------------
var numbers = [1, 2, 3];
var squares = numbers.map(function(num) {
  return num * num;
});

console.log(squares); 


//24 ---------------
var arrrrrr= [5,10,15,20] 
filt=arrrrrr.filter(function(num) {
  return num >= 12;
});
console.log(filt)


//25 ---------------
var numbers = [2, 4, 6];
var product = numbers.reduce(function(acc, num) {
  return acc * num;
}, 1); 

console.log(product); 



//26 ---------------
var numbers = [2, 4, 6];
var sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0); 

console.log(sum); 


//27 ---------------
names=['Ali','Sara','Kareem']
// console.log(names[0][0])
chars=[]
for(var i =0 ; i<names.length;i++)
{
chars.push(names[i][0])
}
console.log(chars)


//28 ---------------
function unique_arr(a) {
  var res = [];
  for (var i = 0; i < a.length; i++) {
    if (res.indexOf(a[i]) === -1) { 
      res.push(a[i]);
    }
  }
  return res;
}

console.log(unique_arr([1, 2, 2, 3, 4, 3, 1]));  // imorove using dictionary(hashmap)



//29 ---------------
nums=[1,[2,3],[4],5]
st_nums=nums.toString().split(",")

new_arr=[]
for(var i=0 ; i<st_nums.length;i++)
{
    new_arr.push(Number(st_nums[i]))
}
console.log(new_arr)


//31 ---------------
person = {
  name: "abdo",
  age: 24
};
person.city = "shobra";   

console.log(person)


//32 ---------------
key_city="city"
console.log(person[key_city]); 


//33 ---------------
function countKeys(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { 
      count++;
    }
  }
  return count;
}
console.log(countKeys(person)); 

//39------------------
// 1.           false
// 2.           0    
// 3.           ""   
// 4.           null
// 5.           undefined



//40------------------

function safeToBoolean(v){

if(v===1 || v==='1' || v===true || v==="true" )

    return true
}

console.log(safeToBoolean("true"))


//41 ----------------------
var d1 = new Date(2025, 0, 1, 0, 0, 0);  
console.log(d1.toString());



//42 ----------------------
var now = new Date();
var year = now.getFullYear();

console.log(year);


//43 ----------------------
function daysBetween(d1, d2) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);

  var diffMs = Math.abs(date2 - date1);

  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

console.log(daysBetween("2025-01-01", "2025-01-10")); 


//44 ----------------------
var rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);


//45 ----------------------
var num = 4.567;

var roundNearest = Math.round(num);  
var roundDown    = Math.floor(num); 
var roundUp      = Math.ceil(num);   


//46 ----------------------
function randomIntArray(n, min, max) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    var randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randInt);
  }
  return arr;
}

console.log(randomIntArray(5, 10, 20));



//56 ----------------------
//57 ----------------------