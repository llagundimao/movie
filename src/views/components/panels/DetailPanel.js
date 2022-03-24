import moment from 'moment'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';

function parseItems(items = [], key) {
  const pg = items.reduce((arr, o) => {
    arr.push(o[key])
    return arr
  }, []);

  return pg.join(', ')
}

const DetailPanel = ({ movie, favorites = [], onHandleFavorite }) => {
  const boxStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const fav = favorites.findIndex(f => f.id === movie.id)
  const isFavorite = (fav > -1)

  return (
    <Box sx={{ width: '100%', marginTop: { xs: '56px', md: '65px', lg: '56px', xl: '65px' } }}>
      <Box display="flex" flexDirection="column" sx={{ ...boxStyle, height: 'calc(100vh - 65px)' }}>
        <Container maxWidth="md" className='detail-container'>
          <Grid container spacing={2} sx={{ marginTop: '10px', padding: '0' }}>
            <Grid item md={4} xs={12} className="detail-left">
              <Box
                component="img"
                sx={{ height: '45vh' }}
                alt="The house from the offer."
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              />
              <Box
                sx={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                <Typography variant="body2" className="typo-label">
                  Rating: {movie?.vote_count || 0}
                </Typography>
                <Typography variant="body2" className="typo-label">
                  Rating Avg.: {movie?.vote_average || 0}
                </Typography>
              </Box>
              <Button
                color={isFavorite ? 'error' : 'info'}
                variant="contained"
                endIcon={isFavorite ? <CloseIcon /> : <FavoriteBorderIcon/>}
                onClick={() => onHandleFavorite(movie)}
              >
                { isFavorite ? 'Remove as Favorite' : 'Mark as Favorite' }
              </Button>
            </Grid>
            <Grid item md={8} xs={12} sx={{ color: '#fff' }}>
              <Typography
                component="div"
                variant="h4"
              >
                {movie?.title || '--'}
              </Typography>
              <Typography
                gutterBottom
                component="div"
                variant="body2"
                mb={2}
              >
                Release Date: {moment(movie?.release_date).format('DD/MMM/YYYY')} - "{movie?.status}"
              </Typography>
              <Typography
                component="div"
                variant="body2"
                gutterBottom
                sx={{ fontStyle: 'italic' }}
                mb={2}
              >
                {movie?.tagline}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                mb={2}
              >
                Overview:<br /> {movie?.overview}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                gutterBottom
                mb={2}
              >
                Genre:<br /> {parseItems(movie?.genres, 'name')}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                gutterBottom
                mb={2}
              >
                Spoken Language:<br /> {parseItems(movie?.spoken_languages, 'english_name')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default DetailPanel;
