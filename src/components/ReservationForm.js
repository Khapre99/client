import React, { useState } from 'react';
import axios from 'axios';
import SeatSelection from './SeatSelection';

const ReservationForm = ({ movieId, showtime, seats, totalPrice }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState(''); // Fetch the user ID from your auth context or user state

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reservations/reserve', {
        movieId,
        seats: selectedSeats.join(','),
        showtime,
        totalPrice,
        userId,
      });
      alert('Reservation successful!');
    } catch (error) {
      console.error(error);
      alert('Reservation failed');
    }
  };

  return (
    <div>
      <SeatSelection seats={seats} handleSeatClick={handleSeatClick} />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
