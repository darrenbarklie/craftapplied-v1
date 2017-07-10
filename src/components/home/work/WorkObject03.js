import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import AspectRatio from 'react-aspect-ratio';

import WorkImg from '../../../assets/img/work/03-rmz@1x.jpg';


class WorkObject03 extends Component {
  render() {

    const WorkStyle = {
      backgroundImage: `url(${WorkImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }

    return (
      <div className="work-item-03 work-item">

        <AspectRatio ratio="4/3" style={WorkStyle} />

        <div className="label light">
          <h4>{this.props.name}</h4>
          <span>{this.props.type}</span>
        </div>

      </div>
    )
  }
}

export default WorkObject03;
