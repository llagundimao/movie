/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from '../snippets/Search'
import { Link } from 'react-router-dom';

const NavigationPanel = (props) => {
  const [searchResults, setSearchResults] = useState(null)
  const history = useHistory()
  const { url } = useRouteMatch()
  const navIconStyle = { marginRight: '5px' };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ height: { xl: '7vh' } }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              textTransform: 'capitalize',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {
              ['movies', 'favorites'].map(p => {
                return (
                  <Link key={p} to={`/${p}`} style={{
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '10px',
                    borderBottom: url === `/${p}` ? '5px solid #fff' : '0'
                  }}>
                    {p === 'movies' ? <HomeIcon style={navIconStyle} /> : <FavoriteIcon style={navIconStyle} />} {p}
                  </Link>
                )
              })
            }
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textTransform: 'capitalize',
              display: { xs: 'flex', md: 'none' }
            }}
          >
            {
              ['movies', 'favorites'].map(p => {
                return (
                  <Link key={p} to={`/${p}`} style={{
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '10px',
                    borderBottom: url === `/${p}` ? '5px solid #fff' : '0'
                  }}>
                    {p === 'movies' ? <HomeIcon style={navIconStyle} /> : <FavoriteIcon style={navIconStyle} />} {p}
                  </Link>
                )
              })
            }
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'right' }}>
            <Search>
              <SearchIconWrapper className="search-icon-wrapper">
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                autoComplete
                options={searchResults?.results || []}
                getOptionLabel={option => option.title}
                onInputChange={async (events, value) => {
                  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&page=1&api_key=0e7274f05c36db12cbe71d9ab0393d47`);
                  if (res.status === 200) {
                    setSearchResults(res.data)
                  }

                }}
                onChange={(event, value) => history.push(`/movies/${value?.id}`)}
                renderInput={params => {
                  const { InputLabelProps, InputProps, inputProps, ...rest } = params;
                  return (
                    <div>
                      <StyledInputBase
                        // InputProps={InputProps}
                        // InputLabelProps={InputLabelProps}
                        inputProps={inputProps}
                        ref={InputProps.ref}
                        { ...rest }
                        placeholder="Search Movie e.g. Harry Potter"
                      />
                    </div>
                  )
                }}
              />

            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationPanel
