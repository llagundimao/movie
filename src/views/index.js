import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationPanel from './components/panels/NavigationPanel';
import ContentPanel from './components/panels/ContentPanel';
import { handleFavorite, fetchMore } from '../application/actions';
import { TABS, TabType } from '../application/Classes/Tabs';
import {
  initMovieApp,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from '../application/actions';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      selectedTab: TABS[0],
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.dispatch(initMovieApp());
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.isLoading !== this.props.isLoading ||
      prevProps.data !== this.props.data
    ) {
      this.setState({ data: this.props.data,isLoading: this.props.isLoading })
    }
  }

  onChangePage = (page) => {
    const { selectedPage } = this.state
    if (page === selectedPage) return

    this.setState({ selectedPage: page })
  }

  onChangeTab = (e, tab) => {
    const { dispatch } = this.props
    const { selectedTab } = this.state

    if (selectedTab.type === tab.type) return

    switch(tab.type) {
      case TabType.POPULAR:
        dispatch(getPopular());
        break;
      case TabType.TOP_RATED:
        dispatch(getTopRated());
        break;
      case TabType.UPCOMING:
        dispatch(getUpcoming());
        break;
      default:
        dispatch(getNowPlaying());
        break;
    }
    
    this.setState({ selectedTab: tab })
  }

  onHandleFavorite = (movieId) => {
    this.props.dispatch(handleFavorite(movieId))
  }

  fetchMoreData = (params) => {
    this.props.dispatch(fetchMore(params));
  }

  render() {
    const { app } = this.props
    const { selectedTab, isLoading } = this.state
    
    return (
      <div className="App">
        <NavigationPanel
          tabs={TABS}
          value={selectedTab}
          onChangePage={this.onChangePage}
        />
        <ContentPanel
          data={app?.data}
          genres={app?.genres || []}
          favorites={app?.favorites}
          selectedTab={selectedTab}
          tabs={TABS}
          isLoading={isLoading}
          onHandleFavorite={this.onHandleFavorite}
          onChangeTab={this.onChangeTab}
          fetchMore={this.fetchMoreData}
        />
      </div>
    );
  };
}

export default connect(
  (state) => { return { ...state }},
  (dispatch) => { return { dispatch } }
)(App);
