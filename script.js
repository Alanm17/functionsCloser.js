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

const flight = 'AIR12';
const alan = {
  name: 'Alan',
  passport: 2483028,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AIR42';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2483028) {
    ('Checked in');
  } else {
    ('wrong input');
  }
  console.log(flightNum, passenger);
};

checkIn(flight, alan);
console.log(alan, flight); //Mr.Alan  as we can see here function can effect to the original object change
