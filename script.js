'use strict';

// const bookings = [];
// const makeBooking = function (
//   ticketNum,
//   passenger = 1,
//   price = 199 * passenger
// ) {
//   const booking = {
//     ticketNum,
//     passenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// makeBooking('AIR12', 2, 500);
// makeBooking('FD45', undefined, 200);

// const flight = 'AIR12';
// const alan = {
//   name: 'Alan',
//   passport: 2483028,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'AIR42';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2483028) {
//     ('Checked in');
//   } else {
//     ('wrong input');
//   }
//   console.log(flightNum, passenger);
// };

// checkIn(flight, alan);
// console.log(alan, flight); //Mr.Alan  as we can see here function can effect to the original object change

// const strUpper = str => str.replace(/ /g, '').toLowerCase();
// const UpperFirstLetter = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// //JavaScript abstraction refers to the concept of hiding complex implementation details and showing only the essential features or functionalities of an object or module to the user also it is the fundamental concept in object-oriented programming

// //A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// const highOrderFunc = function (str, fnc) {
//   console.log(`Before: ${str}`);
//   console.log(`After ${fnc(str)}`);
//   console.log(`name of fnc used:${fnc.name}`);
// };

// highOrderFunc('Ifgff love programming', UpperFirstLetter);
// highOrderFunc('Isdsdsd love programming', strUpper); // callback functions

// function wave() {
//   console.log('heeey');
// }

// document.body.addEventListener('click', wave);
// ['Alan', 'Jonas', 'Max'].forEach(wave);

// const alan = {
//   airline: 'UZ23',
//   ticketCode: 'UZ',
//   booked: [],

//   flight(flightNm, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.ticketCode}${flightNm}`
//     );
//     this.booked.push({ flight: `${this.ticketCode}${flightNm}`, name });
//   },
// };
// alan.flight(324, 'Mukhammadaziz');

// const john = {
//   airline: 'TRAIR',
//   ticketCode: 'TR',
//   booked: [],
// };
// const alisa = {
//   airline: 'TRAIR',
//   ticketCode: 'TR',
//   booked: [],
// };

// const flight = alan.flight;

// // flight.call(john, 21, 'John');
// //call method+++++++++++++++++===============
// flight.call(alisa, 21, 'John');
// const customer = [23, 'mr.john'];

// flight.call(john, customer); //does not work properly
// //apply method +++++++++++++++================old
// flight.apply(john, customer); //same data old style
// //call method+++++++++++++++++===============new
// flight.call(john, ...customer); //same data new style

// const bookAl = flight.bind(alisa);
// bookAl(34, 'Alisa');
// //// bind is a method on the prototype of all functions in JavaScript. It allows you to create a new function from an existing function, change the new function's this context, and provide any arguments you want the new function to be called with.

// const book45 = flight.bind(john, 45); // 45 is partial application which means arguments already “set” or partially applied.//TR45 // so here 45 is taken as we have given the FlightNum already that is why it is not taking anymore and one more thing can be done is we can use 'this' keyword manually ourselves after copying the flight method using bind method so here {'bookJo'} is the function which works for any type of value entered with and
// //

// book45('John Smith');
// // const mark = {};

// // bind is really helpful with event listener
// alan.planes = 300; // here we created new property to the {'alan' object}
// alan.buyPlanes = function () {
//   // new method to alan object
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // mark.buyPlanes();
// document.querySelector('.buy').addEventListener('click', alan.buyPlanes); // 'this ' points to .buy class but we wanna select alan not .buy class
// document
//   .querySelector('.buy')
//   .addEventListener('click', alan.buyPlanes.bind(alan)); // here with the bind method we can call alan and also this keyword points to alan.

// //partial application
// const addtaxRate = (taxRate, value) => value + value * taxRate;
// console.log(addtaxRate(0.3, 200));

// const addTax034 = addtaxRate(null, 0.33);

// console.log(addTax034);
// const addTax0033 = addtaxRate.bind(null, 0.033);
// // addVAT = value => value + value * 0.23; 👆 same
// //king kebab taxRate 😅😅😅😅😅😅
// console.log(addTax0033(1800000));

// // same thing using callbackfunc 👇

// const addVAT = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAt2 = addVAT(0.21);
// console.log(addVAt2(10));
// console.log(addVAt2(100));
// console.log(addVAt2(130));

// challange
const poll = {
  question: ' What  is your favorite programming language? ',
  options: ['0: Javascript', ' 1: Python', ' 2: Rust', ' 3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const inputData = Number(
      prompt(`${this.question}\n ${this.options.join('\n')}`)
    );
    console.log(inputData);
    typeof inputData === 'number' &&
      inputData < this.answers.length &&
      this.answers[inputData]++;
    this.displayRes();
    this.displayRes('string');
  },
  displayRes(data = 'array') {
    if (data === 'array') {
      console.log(this.answers);
    } else if (data === 'string') {
      console.log(`Poll restults are ${this.answers.join(', ')}`);
    }
  },
};

const theanswr = poll.registerNewAnswer.bind(poll);
document.querySelector('.poll').addEventListener('click', theanswr);
