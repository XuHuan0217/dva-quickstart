import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/products" exact component={Products}/>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
