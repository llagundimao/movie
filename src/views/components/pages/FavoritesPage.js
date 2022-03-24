import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import { initPage, handleFavorite } from '../../../application/actions/favoritesAction';
import NavigationPanel from '../panels/NavigationPanel';
import Page from '../panels/Page';

class FavoritesPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: props.favorites.favorites,
      isLoading: props.favorites.isLoading
    }
  }
  componentDidMount() {
    this.props.dispatch(initPage())
  }

  componentDidUpdate(prevProps, prevState) {
    const { favorites, isLoading } = this.props.favorites

    if (
      prevProps.favorites.isLoading !== isLoading ||
      prevProps.favorites.favorites !== favorites
    ) {
      this.setState({ movies: favorites, isLoading })
    }
  }

  onHandleFavorite = (movieId) => {
    this.props.dispatch(handleFavorite(movieId))
  }


  render() {
    const { favorites } = this.props
    const { movies, isLoading } = this.state

    return (
      <div>
        <NavigationPanel />
        <Box sx={{ width: '100%', marginTop: { xs: '56px', md: '65px', lg: '56px', xl: '65px' } }}>
          <Box display="flex" flexDirection="column" sx={{ height: 'calc(100vh - 8vh)' }}>
            <Page
              movies={movies}
              genres={favorites?.genres}
              favorites={movies}
              isLoading={isLoading}
              onHandleFavorite={() => { }}
            />
          </Box>
        </Box>
      </div>
    )
  }
}

export default connect(
  (state) => { return { ...state } },
  (dispatch) => { return { dispatch } }
)(FavoritesPage);
