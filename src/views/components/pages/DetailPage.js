/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initPage } from '../../../application/actions/detailPageActions';
import NavigationPanel from '../panels/NavigationPanel';
import DetailPanel from '../panels/DetailPanel';
import { handleFavorite } from '../../../application/actions/detailPageActions';

class DetailPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detail: props.details
    }
  }

  componentDidMount() {
    const { params } = this.props
    this.props.dispatch(initPage(params.movieId))
  }

  componentDidUpdate(prevProps) {
    const { detail, params } = this.props

    if (prevProps.params?.movieId !== params.movieId) {
      if (detail?.id !== prevProps.params?.movieId) {

        this.props.dispatch(initPage(params.movieId))
      }
      else
        this.setState({ detail: detail })
    }
  }

  onHandleFavorite = (movieId) => {
    this.props.dispatch(handleFavorite(movieId))
  }

  render() {
    const { detail } = this.props;
    return (
      <div>
        <NavigationPanel />
        <DetailPanel
          movie={detail}
          favorites={detail?.favorites}
          onHandleFavorite={this.onHandleFavorite}
        />
      </div>
    )
  }
}

const DetailPageWrapper = (props) => (
  <DetailPage
      {...props}
      params={useParams()}
  />
);

export default connect(
  (state) => { return { ...state }},
  (dispatch) => { return { dispatch } }
)(DetailPageWrapper);