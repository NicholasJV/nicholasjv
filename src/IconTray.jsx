import React, { Component } from 'react'
import MailTo from 'react-encoded-mailto'

export default class IconTray extends Component {
  constructor() {
    super()
    this.handleEmailLink.bind(this)
  }

  handleEmailLink() {

  }

  render() {
    return (
      <h2 className="icon-wrapper">
        <MailTo email="nick@nvanv.com" obfuscate>
          {/* <a href="#0"
              className="link"
              onClick={this.handleEmailLink}
          > */}
            <i className="fa fa-envelope link"></i>
          {/* </a> */}
        </MailTo>
        <a href="https://www.linkedin.com/in/nicholasvan" className="link">
          <i className="fa fa-linkedin-square link"></i>
        </a>
        <a href="https://github.com/NicholasJV" className="link">
          <i className="fa fa-github link"></i>
        </a>
      </h2>
    )
  }
}
