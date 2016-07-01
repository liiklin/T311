import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Categories from '../components/Categories';
import Questions from '../components/Questions';
import Cases from '../components/Cases';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Categories} />
    <Route path="/categories" component={Categories} />
    <Route path="/questions" component={Questions} />
    <Route path="/cases" component={Cases} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
