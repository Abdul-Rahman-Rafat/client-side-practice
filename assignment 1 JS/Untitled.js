// console.log("hi")
// console.log(js)
// var js= "javascript"




// function xx() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); 
// }

// xx();




// var str = "abdo"
// var num = 1
// var T = true
// var un_def = undefined
// var nnn = null

// console.log(str,nnn,num,un_def,T)





// var obj1 = { name: "Alice" };
// console.log(obj1.name);





// var numLiteral = 42;                  
// var numConstructor = new Number(42); 

// console.log(typeof numLiteral);      
// console.log(typeof numConstructor);  

// var strLiteral = "hello";             
// var strConstructor = new String("hello");

// console.log(typeof strLiteral);     
// console.log(typeof strConstructor); 

// var boolLiteral = true;              
// var boolConstructor = new Boolean(true); 

// console.log(typeof boolLiteral);    
// console.log(typeof boolConstructor); 





// var x = 123.4567;
//    console.log(x.toFixed(2));
//    console.log(x.toPrecision(4));





// nanana = NaN
// console.log(isNaN(nanana))





// console.log(parseInt(" a 23 ab c"));
// console.log(parseInt(" 23 ab c"));

// console.log(parseFloat("123.45abc")); // 123.45

// console.log(Number("123abc"));   // NaN (لا تقبل الحروف بعد الرقم)







// var imp1 = "5" + 10 ;
// console.log(imp1 );
// var exp = "5" * 10 ;
// console.log(exp );






// console.log(true + 5)
// console.log("10" - 2 )
// console.log(12 - "1a")
// console.log(5 / 0)
// console.log(5 + undefined)






// var a = "15.5";
// 	var b = +a;
// 	console.log(b, typeof b ,a, typeof a);






// var result = 20 > true < 5 == 1;
// 	console.log(result);







// function string_conv(str) {
// num = Number(str);
//   return !isNaN(num) && typeof num === "number";
// }

// console.log(string_conv("10"))
// console.log(string_conv("a10"))







// var i =0
// while (i<=20){console.log(i);
//     i++;}
    






// var sum = 0;
// var input;

// do {
//   input = prompt("Please enter a number (0 to stop):");
//   input = Number(input);

//   if (!isNaN(input) && input !== 0) {
//     sum += input;
//   }
// } while (input !== 0);

// console.log("Sum of entered numbers:", sum);







function printDay(dayNumber) {
  switch(dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number");
  }
}

for (let i = 1; i <= 7; i++) {
  console.log(`Day ${i}:`);
  printDay(i);
}
