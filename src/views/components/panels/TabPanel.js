import { Box } from '@mui/material';
import Page from './Page';

const TabPanel = ({ movies, value, tab, genres, favorites, pagination, isLoading, onHandleFavorite, fetchMore}) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== tab.type}
      aria-labelledby={`movie-tab-${tab.type}`}
      sx={{
        marginTop: {
          xs: '60px',
          sm: '60px',
          md: '50px',
          lg: '50px',
          xl: '50px'
        },
        overflow: 'auto'
      }}
    >
      {value === tab.type && (
        <Box>
          <Page
            movies={movies}
            genres={genres}
            favorites={favorites}
            pagination={pagination}
            isLoading={isLoading}
            onHandleFavorite={onHandleFavorite}
            fetchMore={fetchMore}
            selectedTab={value}
          />
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
