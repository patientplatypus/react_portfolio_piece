

import React, { Component } from 'react';


class PonyImage extends Component {

  render() {
    console.log('inside PonyImage');
          return (
            <div>
              <img src={this.props.imageUrl} alt=''/>
            </div>
          );
        }
}

export default PonyImage;
