import React, { Component } from 'react'
import './layout.css';

class Layout extends Component {
 
  state = {
    
  }
  render() {
    return (
      <div>
        header
        {this.props.children}
        footer
      </div>
    )
  }
}


export default Layout;
