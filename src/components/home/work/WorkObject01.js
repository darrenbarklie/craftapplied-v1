import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import AspectRatio from 'react-aspect-ratio';

import WorkImg from '../../../assets/img/work/01-europcar@1x.jpg';


class WorkObject01 extends Component {
  render() {

    const WorkStyle = {
      backgroundImage: `url(${WorkImg})`,
      backgroundSize: "cover",
      backgroundPosition: "left top"
    }

    return (
      <div className="work-item-01 work-item">
        {/* 2/3.03595 */}
        {/* <AspectRatio ratio="2/3" style={WorkStyle} /> */}
        {/* <AspectRatio ratio="2/3.03595" style={WorkStyle} /> */}
        <AspectRatio ratio="2/3" style={WorkStyle} />

        <div className="label">
          <h4>{this.props.name}</h4>
          <span>{this.props.type}</span>
        </div>

      </div>
    )
  }
}

export default WorkObject01;
