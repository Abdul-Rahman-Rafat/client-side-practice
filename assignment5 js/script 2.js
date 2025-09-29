// 1. Predict (in comments) the output order of this code, then run to verify.
console.log(a());
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b());
//outputs
//A
//B
//After verifying, explain (one short line) why a works before definition and b does not.
// Explain: Function a  hoisted.
// Function b  not hoisted

console.log("---")



// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a,b) { return a+b; }
let add = function(a,b) { return a+b; };
console.log(sum(3,4)); // 7
console.log(add(3,4)); // 7

console.log("----------------------")


// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log(factorial(5)); // 120
// console.log(fact(5)); // Uncaught ReferenceError: fact is not defined (because fact is not in the global scope)


console.log("-------------")
 


// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
    console.log('Number of arguments:', arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log('Argument', i+1 + ':', arguments[i]);
    }
}
showInfo();
showInfo('Hello', 42);
showInfo(1, 2, 3, 4, 5);

console.log("---------")

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
    console.log('Before mutation:');
    console.log('x =', x, ', arguments[0] =', arguments[0]);
    console.log('y =', y, ', arguments[1] =', arguments[1]);
    x = x * 2;
    y = y + 10;
    console.log('After mutation:');
    console.log('x =', x, ', arguments[0] =', arguments[0]);
    console.log('y =', y, ', arguments[1] =', arguments[1]);
}
mutate(5, 10);
// Explanation: Changing x and y does not affect arguments[0] and arguments[1]


console.log("---------------------")

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(2,5,3)); // 10
console.log(sumAll()); // 0 

console.log("-------")


// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAllReduce() {
    return Array.prototype.reduce.call(arguments, (acc, val) => acc + val, 0);
}
console.log(sumAllReduce(2,5,3)); // 10
console.log(sumAllReduce()); // 0


console.log("----------------------")



// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
    if (arguments.length === 0) {
        return 'none';
    } else if (arguments.length === 1) {
        return 'one:' + arguments[0];
    } else if (arguments.length === 2) {
        return 'two:' + arguments[0] + ',' + arguments[1];
    } else {
        return 'too many';
    }
}
console.log(describeValue()); // 'none'
console.log(describeValue(5)); // 'one:5'
console.log(describeValue(3, 7)); // 'two:3,7'  
console.log("-------")

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
let funcs = [
    function(n)
     { return n + 2; },
    function(n) 
    { return n * 3; },
    function(n)
     { return n - 5; }
];
let start = 10;
for (let i = 0; i < funcs.length; i++) {
    start = funcs[i](start);
}
console.log(start); // ((10 + 2) * 3) - 5 = 31      
console.log("-----------------------")

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
    return function(n) {
        return n * factor;
    };
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(7)); // 14
console.log(triple(7)); // 21   
console.log("--------------------")

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn) {
    let called = false;
    let result;
    return function() {
        if (!called) {
            called = true;
            result = fn.apply(this, arguments);
        }
        return result;
    };
}
let sayHello = once(function() {
    console.log('Hello called');
    return 'Hello!';
});
console.log(sayHello()); // Logs 'Hello called', returns 'Hello!'
console.log(sayHello()); // Returns 'Hello!' without logging
console.log("--------------------")

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
console.log("---------------------------")

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

console.log("--------------------")



// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start) {
    let total = start;
    return function(n) {
        total += n;
        return total;
    };
}
let adder1 = makeAdder(10);
let adder2 = makeAdder(100);
console.log(adder1(5));  // 15
console.log(adder1(10)); // 25
console.log(adder2(20)); // 120
console.log(adder2(30)); // 150
console.log("-----------------")

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment). bonus:

console.log("-------")

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).
console.log("------------")

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let user = {
    name: 'John',
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};
user.sayHi(); // 'Hi John'
let f = user.sayHi;
f(); // 'Hi undefined' because 'this' is not bound to user object in this context , it refers to the window
console.log("------------------------")

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
let anotherUser = { name: 'Sara' };
user.sayHi.call(anotherUser); // Using call
user.sayHi.apply(anotherUser); // Using apply
// call and apply set 'this' to anotherUser, so both log 'Hi Sara'.


console.log("--------------")  

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
let greeter = {
    greet: function(greeting, sign) {
        console.log(greeting + ', ' + this.name + sign);
    }
};
let ali = { name: 'Ali' };
greeter.greet.apply(ali, ['Hello', '!']); // 'Hello, Ali!'

console.log("-----------------------")


// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings. explain bind 
let lara = { name: 'Lara' };
let greetLara = greeter.greet.bind(lara);
greetLara('Hi', '!!'); // 'Hi, Lara!!'
greetLara('Welcome', '***'); // 'Welcome, Lara***'
// bind creates a new function with 'this' permanently set to the provided object (lara in this case).  

console.log("---------------------")



// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).explain the code
let sayHello2 = greeter.greet.bind(lara, 'Hello');
sayHello2('!'); // 'Hello, Lara!'
sayHello2('***'); // 'Hello, Lara***'
sayHello2('!!'); // 'Hello, Lara!!'
sayHello2('<#'); // 'Hello, Lara<#'
// Explanation: Here, we use bind to create a new function sayHello where the greeting parameter is fixed to 'Hello'.
// The returned function only requires the sign parameter when called, allowing us


console.log("---------------------")




// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function reverseArgs() {
    let argsArray = Array.prototype.slice.call(arguments);
    let reversedArray = argsArray.slice().reverse();
    console.log('Original arguments:', argsArray);
    console.log('Reversed copy:', reversedArray);
}
reverseArgs(1, 2, 3, 4); // Original arguments: [1, 2, 3, 4] Reversed copy: [4, 3, 2, 1]
console.log("--------------------")

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let arr = [5, 2, 11, 7];
let maxUsingApply = Math.max.apply(null, arr);  // with apply
console.log('Max using apply:', maxUsingApply); // 11   

let maxUsingLoop = arr[0]; // with loop
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxUsingLoop) {
        maxUsingLoop = arr[i];
    }
}
console.log('Max using loop:', maxUsingLoop); // 11
console.log("--------------------")

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
let maxUsingCall = Math.max.call(null, 5, 2, 11, 7);
console.log('Max using call:', maxUsingCall); // 11
// Explanation: Using call requires listing each argument individually, which is impractical for large arrays.
// Apply is better for arrays because it allows passing an array of arguments directly.


console.log("--------------------")

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

let name = 'Alice';
let age = 30;
let concatenated = 'User: ' + name + ' Age: ' + (age + 1);
let templateLiteral = `User: ${name} Age: ${age + 1}`;
console.log(concatenated); // 'User: Alice Age: 31'
console.log(templateLiteral); // 'User: Alice Age: 31'
console.log("--------------------") 


// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
let title = 'My Title';
let body = 'This is the body of the message.';
let multiLineTemplate = `Title: ${title}
Body: ${body}
Regards,
Admin`;
console.log('Using template literal:\n' + multiLineTemplate);   
// Classical version
let classicalMultiLine = 'Title: ' + title + '\n' +
'Body: ' + body + '\n' +
'Regards,\n' +
'Admin';
console.log('Using classical concatenation:\n' + classicalMultiLine);
console.log("----------------")

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
    var i = 10;
    let j = 20;
    console.log('Inside block: i =', i); // 10
    console.log('Inside block: j =', j); // 20
}
console.log('Outside block: i =', i); // 10 (var leaks to function/global scope)
try {
    console.log('Outside block: j =', j); // ReferenceError (let does not leak)
} catch (e) {
    console.log('Outside block: j is not defined');
}
// Comment: var i leaks outside the block, while let j does not leak and is block-scoped.

console.log("--------------------")

// 28. Write code that tries to log x before let x = 5;.
try {
    console.log(x); // ReferenceError
} catch (e) {
    console.log('Error:', e.message); // 'x is not defined'
}
let x = 5;
console.log('x after declaration:', x); // 5    
console.log("-------------")


// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const arrConst = [1, 2, 3];
arrConst.push(4); // This works
console.log('After push:', arrConst); // [1, 2, 3, 4]
// arrConst = [5, 6, 7]; // Uncaught TypeError: Assignment to constant variable. (because arrConst is a constant reference and cannot be reassigned)

console.log("-------")



// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
function square(n) { return n * n; }
let squareFull = (n) => { return n * n; };
let squareConcise = n => n * n; // parentheses optional for single arg and concise
let arrNums = [1, 2, 3];
let squaredInline = arrNums.map(n => n * n); // inline in map
console.log('squareFull(4):', squareFull(4)); // 16
console.log('squareConcise(5):', squareConcise(5)); // 25
console.log('squaredInline:', squaredInline); // [1, 4, 9]
console.log("------------")


// // 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
// let timer = {
//     count: 0,
//     startClassic: function() {
//         let self = this; // capture 'this'
//         this.classicInterval = setInterval(function() {
//             self.count++;
//             console.log('Classic count:', self.count);
//             if (self.count >= 5) clearInterval(self.classicInterval);
//         }, 1000);
//     },
//     startArrow: function() {
//         this.arrowInterval = setInterval(() => {
//             this.count++;
//             console.log('Arrow count:', this.count);
//             if (this.count >= 10) clearInterval(this.arrowInterval);
//         }, 1000);
//     }
// };
// timer.startClassic();
// setTimeout(() => timer.startArrow(), 7000); // Start arrow timer after some delay   
// console.log("--------------------")

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
let returnObject = () => ({ v: 10 });
console.log(returnObject()); // { v: 10 }
console.log("-------------")

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
let objWithMethod = {
    value: 42,
    method: function() {
        let arrowFunc = () => {
            console.log(this.value); // 'this' refers to objWithMethod
        };
        arrowFunc();
    }
};
objWithMethod.method(); // 42
// Bad choice example:
let objBadArrow = {
    value: 100,
    method: () => {
        console.log(this.value); // 'this' does NOT refer to objBadArrow, likely undefined
    }
};
objBadArrow.method(); // undefined (because 'this' in arrow function does not bind to objBadArrow)
console.log("-----")


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet = name => 'Hi ' + name + '!';
console.log(greet('Sam')); // 'Hi Sam!'

console.log("-------------") 


// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = n => n + 2;
const times3 = n => n * 3;
const minus1 = n => n - 1;
function runPipeline(n, fnsArray) {
    return fnsArray.reduce((acc, fn) => fn(acc), n);
}
console.log(runPipeline(5, [add2, times3, minus1])); // ((5 + 2) * 3) - 1 = 20
console.log("-------------")
console.log("-------------")



// 36. (write answers BEFORE running):
    // var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
    // var inc = obj.inc;
    // console.log(obj.inc());
    // console.log(inc()); 
//    Explain both lines.
// First line: obj.inc() increments obj.n to 2 and returns 2 because 'this' refers to obj. inc() increments a global n (not obj.n) to NaN because 'this' is undefined 
//so the result is NaN


// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
let counters = [];
for (let i = 0; i < 1000; i++) {
    counters.push((function() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    })());
}
// Potential memory considerations: Each closure retains its own scope, which can lead to high memory usage if many closures are created.
// If the closures capture large objects or data, it can prevent garbage collection, leading to memory leaks or excessive memory consumption.
console.log("-------------")

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst() {
    if (arguments.length === 0) {
        return undefined;
    } else {
        return Array.prototype.slice.call(arguments);
    }
}
console.log(safeFirst()); // undefined
console.log(safeFirst(1, 2, 3)); // [1, 2, 3]
console.log("-------------")    

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray) {
    let countersObj = {};
    namesArray.forEach(name => {
        let count = 0;
        countersObj[name] = function() {
            count++;
            return count;
        };
    });
    return countersObj;
}

// 40. Write 2 things that were new or tricky today (comment).

//  understanding 'this' in  regular functions or arrow functions was tricky.
//  using closures correctly 


