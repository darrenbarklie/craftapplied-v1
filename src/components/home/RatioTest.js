import React, { Component } from 'react';
import AspectRatio from 'react-aspect-ratio';

class RatioTest extends Component {
  render() {
    return (
      <div className="aspect">

        <AspectRatio ratio="3/4" style={{maxWidth: '400px'}}>
          <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" />
        </AspectRatio>


      </div>
    )
  }
}

export default RatioTest;
