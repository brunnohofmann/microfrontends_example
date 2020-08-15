import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PageHeader } from '@antd';
import Home from './pages/Home';
import ParcelFirstOption from './pages/ParcelFirstOption';
import ParcelSecondOption from './pages/ParcelSecondOption';

export default () => {
  return (
    <Router>
      <PageHeader
        className="site-page-header"
        title={<Link to="/">Microfrontend Example</Link>}
        subTitle="This app mounts some Micro Frontends examples using SingleSpa"
      />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>{' '}
        <Route path="/parcels/first_option" exact>
          <ParcelFirstOption />
        </Route>
        <Route path="/parcels/second_option" exact>
          <ParcelSecondOption />
        </Route>
      </Switch>
    </Router>
  );
};
