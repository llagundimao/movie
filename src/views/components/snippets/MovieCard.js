/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import moment from 'moment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ToggleButton
} from '@mui/material';

function populateGenres(movie, genres) {
  if (movie && genres.length > 0) {
    const mg = movie.genre_ids.reduce((arr, o) => {
      const genre = genres.find(i => i.id === o)
      arr.push(genre.name)
      return arr
    }, [])

    return mg.join(', ')
  }

  return '--'
}

const MovieCard = ({ movie, genres, favorites, onHandleFavorite }) => {
  const history = useHistory();
  const mg = populateGenres(movie, genres)
  const fav = favorites.findIndex(f => f.id === movie.id)
  const isFavorite = (fav > -1)
  const onClickMovie = useCallback(() => history.push(`/movies/${movie?.id}`), [history]);

  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 200,
        minHeight: 400,
        maxHeight: 400
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        sx={{ objectPosition: 'top', cursor: 'pointer' }}
        onClick={onClickMovie}
      />
      <CardContent sx={{ position: 'relative' }}>
        <Typography
          gutterBottom
          component="div"
          sx={{
            lineHeight: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={onClickMovie}
        >
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="typo-label">
          <CalendarMonthIcon className="label-icon" /> {moment(movie.release_date).format('DD/MMM/YYYY')}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="typo-label">
          <TheaterComedyIcon className="label-icon" /> {mg}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="typo-label">
          Rating: {movie.vote_count}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="typo-label">
          Rating Avg.: {movie.vote_average}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="typo-label">
          <ToggleButton
            variant="text"
            disableRipple
            value={isFavorite ? 'check' : ''}
            sx={{
              width: 30,
              height: 30,
              padding: 0,
              position: 'absolute',
              top: 10,
              right: 5,
              border: 0,
            }}
            onClick={() => { onHandleFavorite(movie) }}
          >
            {isFavorite ? <FavoriteIcon sx={{ fill: 'red' }} /> : <FavoriteBorderIcon />}
          </ToggleButton>
        </Typography>
      </CardContent>
    </Card >
  )
}

export default MovieCard
