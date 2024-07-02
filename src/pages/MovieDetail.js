import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReservationForm from '../components/ReservationForm';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [showtime, setShowtime] = useState('');
  const [seats, setSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/movies/${id}`);
      setMovie(data);
      setSeats(data.seats);
    };
    fetchMovie();
  }, [id]);

  const handleShowtimeChange = (e) => {
    setShowtime(e.target.value);
  };

  const handleTotalPriceChange = (e) => {
    setTotalPrice(e.target.value);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.genre}</p>
      <select onChange={handleShowtimeChange}>
        <option value="">Select Showtime</option>
        {movie.showtimes?.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <ReservationForm movieId={id} showtime={showtime} seats={seats} totalPrice={totalPrice} />
    </div>
  );
};

export default MovieDetail;
