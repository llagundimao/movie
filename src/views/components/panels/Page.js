import React, { Fragment } from 'react';
import { Grid, Container, CircularProgress, Typography } from '@mui/material';
import MovieCard from '../snippets/MovieCard';
import { Waypoint } from 'react-waypoint';

const Page = ({ movies = [], genres, selectedTab, favorites, pagination, isLoading, isLoaded, onHandleFavorite, fetchMore }) => {
  const tStyle = isLoading ? 'none' : 'block';

  // if (isLoading) return (
  //   <Container><CircularProgress size={100} /></Container>
  // );

  if (movies.length === 0) return (
    <Typography variant='h4' sx={{ display: tStyle, textAlign: 'center', color: '#ccc', marginTop: '100px'}}>NO MOVIE(S) FOUND</Typography>
  );

  return (
    <Grid container justifyContent="center" alignItems="center" gap={2}>
      {
        movies.map((m, i) => {
          return (
            <Fragment key={m.id}>
              <MovieCard
                key={m.id}
                movie={m}
                genres={genres}
                favorites={favorites}
                onHandleFavorite={onHandleFavorite}
              />
              {
                i === movies.length - 5 && (
                  <Waypoint
                    onEnter={() => {
                      if (pagination?.hasNextPage) {
                        fetchMore({
                          type: selectedTab,
                          currentItems: movies,
                          page: pagination?.page + 1
                        })
                      }
                    }}
                  />
                )
              }
            </Fragment>
          )
        })
      }
    </Grid>
  )
};

export default Page;
