import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import hamburger from './hamburger.svg'

class Nav extends Component {
  componentDidMount() {
    this.hideNavMenu();
  }

  toggleNavMenu() {
    let navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('hidden');
  }

  hideNavMenu() {
    let navMenu = document.querySelector('nav ul');
    document.addEventListener('keydown', event => {
      event.keyCode === 27 && (navMenu.classList.add('hidden'))
    })
  }

  skipContent() {
    document.querySelector('main .container').focus();
  }

  render() {
    return (
      <nav>
        <div className="wrap-out">
          <div className="wrap-in">
            <div className="content-skip" tabIndex="0" onClick={this.skipContent}
                onKeyDown={event => event.keyCode === 13 && this.skipContent(event)}>
                  Skip to main content</div>
            <div className="container">
              <div className="logo">
                  <Link to="./"><img src={logo} alt="logo"/></Link>
              </div>
              <div className="hamburger" tabIndex="0" onClick={this.toggleNavMenu}
                  onKeyDown={event => event.keyCode === 13 && this.toggleNavMenu(event)}>
                <img src={hamburger} alt="hamburger icon"/>
              </div>
              <ul className="hidden"><li>
                <Link to='./projects'>PROJECTS</Link></li><li>
                <Link to="./snippets">SNIPPETS</Link></li><li>
                <Link to="./skills">SKILLS</Link></li><li>
                <Link to="./courses">COURSES</Link></li><li>
                <Link to="./certificates">CERTIFICATES</Link></li><li>
                <Link to="./readings">READINGS</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;