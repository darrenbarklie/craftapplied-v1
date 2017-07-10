import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';


class Layout extends Component {
  render() {
    return (
      <Grid fluid className={`grid-container layout ${this.props.page}`} >

        {this.props.children}

      </Grid>
    )
  }
}

export default Layout;
