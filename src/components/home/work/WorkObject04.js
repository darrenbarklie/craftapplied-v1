import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import AspectRatio from 'react-aspect-ratio';

import WorkImg from '../../../assets/img/work/04-jlb@1x.jpg';


class WorkObject04 extends Component {
  render() {

    const WorkStyle = {
      backgroundImage: `url(${WorkImg})`,
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }

    return (
      <div className="work-item-04 work-item">

        <AspectRatio ratio="3/1" style={WorkStyle} />

        <div className="label">
          <h4>{this.props.name}</h4>
          <span>{this.props.type}</span>
        </div>

      </div>
    )
  }
}

export default WorkObject04;
