// get max number of an array
const maxNumArr = [34, 56, 23, 24, 62, 89];
const maxNum = Math.max(...maxNumArr);
// console.log(maxNum);

//is pallindrom of not

function isPallindrom(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else return false;
}
// console.log(isPallindrom("abcbas"));

//function that takes an array of Numbers and return an array of even number

function evenNumber(arr) {
  const even = arr.filter((item) => {
    return item % 2 === 0;
  });
  return even;
}
const evenArray = evenNumber(maxNumArr);
// console.log(evenArray);

// There are many way to create Objects

//1.  =========================object literals
const literalObj = {
  name: "userName",
  email: "user@example.com",
  loggedIn: false,
};

//2. =============================Object create method
const createObj = Object.create(null);

//3. ==============================Using new keyword to create object
const newObj = new Object({
  name: "username",
  email: "username@example.com",
});
// console.log(newObj);

//4 ===============================using function cunstructor
function ObjOne(name, email) {
  this.name = name;
  this.email = email;
}
const person1 = new ObjOne("username", "user@example.com");
ObjOne.prototype.getFulldetail = `${person1.name} is username and ${person1.email} is person's email!`;
// console.log(person1);
// console.log(person1.getFulldetail);
// console.log(Object.getPrototypeOf(person1));

// 5 function constructor with prototype

function ProtoObj() {}
ProtoObj.prototype.name = "userName";

//6 ======================class consturctor
class ClassObj {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
const person5 = new ClassObj("suraj", "suraj@example.com");

// prototype chain

class TwoObject {
  constructor(firstname, lastname, email, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
const person2 = new TwoObject("Ashish", "Kumar", "ashish@gamil.com", "1234");
//console.log(person2);
TwoObject.prototype.getFulldetail = `Your name is ${person2.firstname} ${person2.lastname} and email is ${person2.email} !`;
// console.log(person2.getFulldetail);

//call, apply and bind

const person3 = { name: "ashish", email: "ashish@yahoo.com" };
const person4 = { name: "vikash", email: "vikas@example.com" };

function message(greeting, message) {
  console.log(`${greeting} ${this.name} ${message} ${this.email}`);
}

// message.call(person3, "Hello", "this is your");
// message.call(person4, "Hello", "this is your");
// message.call(person5, "Hi", "this is your email address");

// another example of call()

function users(name, email) {
  this.name = name;
  this.email = email;
}

function user1(name, email) {
  // console.log(this);
  users.call(this, name, email);
  this.password = "1234";
  this.userName = `user ${this.name} name`;
}
const newUser1 = new user1("ashish", "as@gamil.com");
// console.log(newUser1);
// console.log(newUser1.password);
// console.log(newUser1.userName);

// using call to invoke a function without the first (or this) argument
// console.log(globalThis);
console.log(
  "=================================================================="
);
globalThis.name = "Ashish kumar";
globalThis.message = "Hi! this is";

function myName() {
  console.log(`${this.message} ${this.name}.`);
}
// myName();

// bind ============================
const food = {
  vegitable: "Aloo Bhujiya",
  parepaired: function () {
    return `Now prepaired food is < ${this.vegitable} >.`;
  },
};

const unbounPprepairedFood = food.parepaired;
// console.log(unbounPprepairedFood());

const boundPreparedFood = unbounPprepairedFood.bind(food);
// console.log(boundPreparedFood());

//slice method and splice method and difference between them

// slice( startIndex, lastIndex, addItem, addItem,..., )
const array1 = [23, 4, 6, 23, 33, 6, 78, 9, 6];
const slicedArr = array1.slice(5, 8); // it will return an array from start index to last index -1  it mean ( last index - start index) element
// last index is not included
// console.log(slicedArr); // it will return a sub array of original array
// console.log(array1); // slice method does not mutate original array

//splice(startIndex, deleteElementCount)

// const splicedArr = array1.splice(1, array1.length - 1);
// console.log(splicedArr); // it will delete elements of original array from startIndex to number of deleteElementCount
const removeAndadd = array1.splice(1, 0, 55, 66, 77); // it will also add new items in place of removed item if deleteElementCount is given otherwise given add elements will at the place of given start index
// console.log(removeAndadd); // it will return new aaray of removed item
// console.log(array1); // it will mutate Original array

// Difference between "==" and "==="

// console.log(1 == "1"); // true
// console.log(1 === "1"); // false  it check data type also
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(null === 0); //false
// console.log(null == 0); //false
// console.log(undefined == 0); //false
// console.log(undefined == {}); //false
// console.log({} == {}); //false
// console.log({} === {}); //false

// console.log(typeof null == "object");//true
// console.log(null == Object);//false
// console.log(null == Object());// false
// console.log(typeof null === typeof new Object()); // true
// let s;
// console.log(s === undefined);

// currying function

function simpleFunc(a, b, c) {
  return a + b + c;
}
// console.log(simpleFunc(1, 2, 3));

function curryingfunction1(a) {
  return function curryingfunction2(b) {
    return function curryingfunction3(c) {
      return a + b + c;
    };
  };
}
console.log(curryingfunction1(1)(2)(3));
