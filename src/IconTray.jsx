import React, { Component } from 'react'
import Mailto from 'react-encoded-mailto'

export default class IconTray extends Component {

  render() {
    return (
      <h2 className="icon-wrapper">
        <Mailto email="nick@nvanv.com" className="link" obfuscate={true}>
          <i className="fa fa-envelope link"></i>
        </Mailto>
        <a href="https://www.linkedin.com/in/nicholasvan"
            className="fa fa-linkedin-square link">
        </a>
        <a href="https://github.com/NicholasJV" className="fa fa-github link">
        </a>
      </h2>
    )
  }
}
