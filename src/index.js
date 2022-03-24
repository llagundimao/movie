import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import reducers from './application/reducers';
import thunk from 'redux-thunk';

import App from './views';
import FavoritesPage from './views/components/pages/FavoritesPage';
import DetailPage from './views/components/pages/DetailPage' 
import './views/scss/main-app.scss';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route exact path="/movies">
            <App />
          </Route>
          <Route exact path="/movies/:movieId">
            <DetailPage />
          </Route>
          <Route exact path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
