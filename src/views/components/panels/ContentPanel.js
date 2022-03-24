import React from 'react'
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from './TabPanel';

const ContentPanel = ({ selectedTab, tabs, data, genres, favorites, isLoading, onChangeTab, onHandleFavorite, fetchMore }) => {
  const movies = data?.results || []
  const pagination = { page: data?.page, hasNextPage: data?.page < data?.total_pages }

  return (
    <Box sx={{ width: '100%', marginTop: { xs: '56px', md: '65px', lg: '56px', xl: '65px' } }}>
      <Box sx={{ position: 'fixed', width: '100%', height: { xl: '5vh' } }}>
        <Tabs
          variant='fullWidth'
          value={selectedTab.type}
          onChange={(e, v) => onChangeTab(e, tabs[v])}
        >
          {
            tabs.map(t => <Tab key={t.type} label={t.title} />)
          }
        </Tabs>
      </Box>
      <Box display="flex" flexDirection="column" sx={{ height: 'calc(100vh - 8vh)' }}>
        {
          tabs.map(t => {
            return (
              <TabPanel
                key={t.type}
                tab={t}
                value={selectedTab.type}
                movies={movies}
                genres={genres}
                favorites={favorites}
                pagination={pagination}
                isLoading={isLoading}
                onHandleFavorite={onHandleFavorite}
                fetchMore={fetchMore}
              >
                {t.title}
              </TabPanel>
            )
          })
        }
      </Box>
    </Box>
  );
};

export default ContentPanel
