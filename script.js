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

const strUpper = str => str.replace(/ /g, '').toLowerCase();
const UpperFirstLetter = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const highOrderFunc = function (str, fnc) {
  console.log(`Before: ${str}`);
  console.log(`After ${fnc(str)}`);
  console.log(`name of fnc used:${fnc.name}`);
};

highOrderFunc('Ifgff love programming', UpperFirstLetter);
highOrderFunc('Isdsdsd love programming', strUpper); // callback functions

function wave() {
  console.log('heeey');
}

document.body.addEventListener('click', wave);
['Alan', 'Jonas', 'Max'].forEach(wave);

const alan = {
  airline: 'UZ23',
  ticketCode: 'UZ',
  booked: [],

  flight(flightNm, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.ticketCode}${flightNm}`
    );
    this.booked.push({ flight: `${this.ticketCode}${flightNm}`, name });
  },
};
alan.flight(324, 'Mukhammadaziz');

const john = {
  airline: 'TR23',
  ticketCode: 'TR',
  booked: [],
};
const alisa = {
  airline: 'TR23',
  ticketCode: 'TR',
  booked: [],
};

const flight = alan.flight;

// flight.call(john, 21, 'John');
//call method+++++++++++++++++===============
flight.call(alisa, 21, 'John');
const customer = [23, 'mr.john'];

flight.call(john, customer); //does not work properly
//apply method +++++++++++++++================old
flight.apply(john, customer); //same data old style
//call method+++++++++++++++++===============new
flight.call(john, ...customer); //same data new style

//JavaScript abstraction refers to the concept of hiding complex implementation details and showing only the essential features or functionalities of an object or module to the user also it is the fundamental concept in object-oriented programming
//A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
