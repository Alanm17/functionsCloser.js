'use strict';

const bookings = [];
const makeBooking = function (
  ticketNum,
  passenger = 1,
  price = 199 * passenger
) {
  const booking = {
    ticketNum,
    passenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
makeBooking('AIR12', 2, 500);
makeBooking('FD45', undefined, 200);
