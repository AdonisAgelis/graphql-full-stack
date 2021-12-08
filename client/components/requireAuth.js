import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class RequireAuth extends Component {
  componentDidMount() {
    if (!this.props.data.loading && !this.props.data.user) {
      hashHistory.push('/login');
    }
  }
}

graphql(query)(RequireAuth);
