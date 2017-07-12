import React, { Component } from 'react';

import LogoSquare from '../../assets/svg/craftapplied-logo-square.svg';

class Brand extends Component {
  render() {
    return (
      <div>
        <img src={LogoSquare} className="logo-square" alt="Craft Applied logo" />
      </div>
    )
  }
}

export default Brand;
