import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';

import Brand from './Brand';
import Navigation from './Navigation';


class Header extends Component {
  render() {
    return (
      <header className="main">

        <Brand />
        <Navigation />

      </header>
    )
  }
}

export default Header;
