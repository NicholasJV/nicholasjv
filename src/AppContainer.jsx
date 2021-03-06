import React, { Component } from 'react'
import greyWall from './img/P1010306-grey-wall.JPG'
import portraitIconMD from './img/nick-v-fs-256-square-small-crop.png'
import { Parallax, Background } from 'react-parallax'
import './main.css'
import './responsive.css'
import 'flexboxgrid'
import smoothScroll from 'smoothscroll-polyfill'
// Components
import IconTray from './IconTray'

export default class FlatParallax extends Component {
  constructor(){
    super()
    this.state = ({ atBottom: false })
    this.toggleScroll = this.toggleScroll.bind(this)
    smoothScroll.polyfill()
  }

  toggleScroll() {
    var VH = window.innerHeight
    // var paddedVH = VH + 100
    var marginToPopup = VH - 100
    console.log('toggle hit, dir:', this.state.atBottom, ' window height:', VH)
    console.log('y pos scroll: ', window.scrollY)
    if(this.state.atBottom) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // } else if (window.innerHeight < SET THIS MEDIA BREAKPOINT) {
    } else {
      window.scrollTo({top: marginToPopup, left: 0, behavior: 'smooth'})
    }
    this.setState({ atBottom: !this.state.atBottom })
  }

  render() {
    return (
      <div className="App">
        <div className="page-top"></div>
          <Parallax strength={400} blur={50}>
            <div className="header-container">
              <header className="header">
                <div onClick={this.toggleScroll}>
                  <h1 className="me-title">Nicholas Vanvoorthuysen</h1>
                </div>
                <IconTray/>
                <h3 className="dev-title">developer</h3>
                <h1 className="dev-symbol">&#60;/></h1>
              </header>
            </div>
            <Background blur={1000}>
              <img src={greyWall}
                className="background-image"
                role="presentation"/>
            </Background>
            <div className="abt-section">
              <h4 className="abt-title abt-text" onClick={this.toggleScroll}>
                <span onClick={this.toggleScroll}
                      className="fa fa-angle-double-down"></span>
                  <strong> ABOUT </strong>
                <span className="fa fa-angle-double-down"></span>
              </h4>
              {/* <div className="row-wrapper"> */}
                <div className="row abt">
                  <div className="abt-col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src={portraitIconMD} className="portrait-icon" alt=""/>
                    <strong className="abt-col-title"> Hi! I'm Nick. </strong>
                    <hr />
                    <p> I'm a software developer with a background in
                    engineering and video production.</p>
                    <p> As a versatile creator and determined problem-solver, I am
                    dedicated to building fresh and effective user interfaces.
                    From sleek, minimal static sites to rich, data-driven new media experiences,
                    I am excited about building the best of the web. </p>
                    <hr/>
                  </div>
                  <div className="abt-col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <strong className="skills abt-col-title">SKILLS</strong>
                    <hr />
                    <ul className="skills-list">
                      <li>Javascript/ES6</li>
                      <li>HTML5</li>
                      <li>React</li>
                      <li>CSS3</li>
                      <li>Angular</li>
                      <li>Git & github</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>jQuery</li>
                      <li>Bootstrap & Flexbox</li>
                      <li>...more</li>
                    </ul>
                    <hr/>
                  </div>
                  <h4 className="abt-col-title back-to-top"
                      onClick={this.toggleScroll}
                  >
                      <span className="fa fa-angle-double-up"></span>
                  </h4>
                </div>
                <div className="abt-section-spacer"></div>
              <p style={{fontSize: '0.7em'}}>
                site optimized for Chrome and Firefox
              </p>
            </div>
          </Parallax>
        <div className="page-bottom"></div>
      </div>
    );
  }
}
