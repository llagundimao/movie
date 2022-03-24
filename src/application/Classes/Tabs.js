/* eslint-disable import/no-anonymous-default-export */
export const TabType = {
  NOW_PLAYING: 0,
  POPULAR: 1,
  TOP_RATED: 2,
  UPCOMING: 3
} 

export const TABS =  [
  {
    type: TabType.NOW_PLAYING,
    title: 'Now Playing'
  },
  {
    type: TabType.POPULAR,
    title: 'Popular'
  },
  {
    type: TabType.TOP_RATED,
    title: 'Top Rated'
  },
  {
    type: TabType.UPCOMING,
    title: 'Upcoming'
  }
];

export default {
  TABS
};
