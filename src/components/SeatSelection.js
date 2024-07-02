import React from 'react';

const SeatSelection = ({ seats, handleSeatClick }) => {
  return (
    <div>
      <h2>Select Your Seats</h2>
      <div className="seats">
        {seats.map((seat) => (
          <button
            key={seat.number}
            className={seat.isBooked ? 'booked' : 'available'}
            onClick={() => handleSeatClick(seat.number)}
            disabled={seat.isBooked}
          >
            {seat.number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
