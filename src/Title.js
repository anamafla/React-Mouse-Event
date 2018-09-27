import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  
  render() {
    
    const {text} = this.props;
    return (
      <div className="titleContainer">
          <div className="titleWrapper">
              <h1>{text}</h1>
          </div>
          <div className="titleWrapper cloneWraper">
              <h1>{text}</h1>
          </div> 
      </div>
    )
  }
}

Title.PropTypes = {
    text: PropTypes.string.isRequired
}

export default Title;