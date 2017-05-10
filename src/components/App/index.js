import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './App.scss';

import actions from '../../actions';

export class App extends Component {
  render() {
    return (
      <div className="boilerplate">
        <h1>poilerblate</h1>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  example: PropTypes.object
};

export default withRouter(connect(
  (state) => state,
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)(App));
