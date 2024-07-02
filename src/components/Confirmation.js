import React from 'react';

const Confirmation = ({ reservation }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Movie: {reservation.movie.title}</p>
      <p>Showtime: {reservation.showtime}</p>
      <p>Seats: {reservation.seats.join(', ')}</p>
      <p>Total Price: ${reservation.totalPrice}</p>
    </div>
  );
};

export default Confirmation;
