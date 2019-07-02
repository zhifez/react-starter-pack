import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/home/home';

class App extends React.Component {
  render () {
    const {
      authData
    } = this.props;

    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );

    if ( authData ) {
      routes = (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      );
    }

    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    authData: state.authReducer.loadData
  }
}

export default connect (
  mapStateToProps
) ( App );
