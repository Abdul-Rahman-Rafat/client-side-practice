
// 1- Write a function that greets a user, using a default parameter for the name.
function greet(name = "defaultUser") {
console.log(`Hola, ${name}!`);
}
greet();        
greet("Abdo");  

// ---------
// 2- Write a function that calculates the total price with a default tax rate parameter.
function calculateTotal(price, DefaultTaxRate = 0.03) {
  const total = price + (price * DefaultTaxRate);
console.log(total)
}
calculateTotal(100);      
calculateTotal(100, 0.03); 


// ------------------------

// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name, default_role = "guest") {
  return {name: name, 
    default_role: default_role};
}


// 4- Write a function that multiplies any number of arguments using the rest operator.
function mult(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);}

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multFbySumRest(first , ...numbers){
 let rest_sum =numbers.reduce((acc,nums)=>acc+nums,0);
 return rest_sum * first;
}
console.log(multFbySumRest(2,3,3)) 


// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function collectStrings(...strings) {
  console.log(strings);
}
collectStrings("apple", "banana", "strawberry")


// 7- Create a new array by combining two arrays using the spread operator.
let arr1 = [1 ,2 ,3]
let arr2 = [4 ,5 ,6]
let new_arr = [...arr1,...arr2]
console.log(new_arr)


// 8- Copy an array using the spread operator.
let new_arr2 = ["abdo","rafat"]
let new_arr3 = [...new_arr2]
console.log(new_arr3)

// 9- Merge two objects into one using the spread operator.
obj1 ={fname: "abod", 
    lname: "rafat"}

obj2 ={fname2: "abod2", 
    lname2: "rafat3"}

obj3 = {...obj1 , ...obj2}



// 10- Update a property in an object using the spread operator to create a new object.
const obj5 = { name: "Abdo", role: "admin", age: 22 };
const updatedUser = { ...obj5, age: 24 };


// 11- Destructure an array to get the first and second elements into variables.
const arr_num = [10, 20, 30, 40];

const [first_element, second_element] = arr_num;

// 12- Destructure an array to get the first element and the rest into another array.
const arr_num2 = [10, 20, 30, 40];

const [frst_elem, ...arrray] = arr_num;
console.log(arrray)


// 13- Destructure an object to extract two properties into variables.
const obj6 = { ffname: "Abdo", role: "admin", age: 22 };
const {ffname ,role } = obj6
console.log(ffname)

// 14- Destructure an object and rename the extracted properties.
const obj7 = { fffname: "Abdo", role2: "admin", age: 22 };
const {fffname ,role2:role2="guest" } = obj6
console.log(role2)


// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function printUser({ name, role }) {
  console.log(`Name: ${name}, Role: ${role}`);
}

const user = { name: "Abdo", role: "admin", age: 22 };

printUser(user); 

