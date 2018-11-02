import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import hamburger from './hamburger.svg'

class Nav extends Component {
  componentDidMount() {
    //hide nav menu on escape click
    document.addEventListener('keydown', event => {
      event.keyCode === 27 && (this.hideNavMenu())
    })
  }

  toggleNavMenu() {
    let navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('hidden');
  }

  hideNavMenu() {
    let navMenu = document.querySelector('nav ul');
    navMenu.classList.add('hidden');
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
                  <Link to="/"><img src={logo} alt="logo" onClick={this.hideNavMenu}/></Link>
              </div>
              <div className="hamburger" tabIndex="0" onClick={this.toggleNavMenu}
                  onKeyDown={event => event.keyCode === 13 && this.toggleNavMenu(event)}>
                <img src={hamburger} alt="hamburger icon"/>
              </div>
              <ul className="hidden"><li>
                <Link to='/projects' onClick={this.hideNavMenu}>PROJECTS</Link></li><li>
                <Link to="/snippets" onClick={this.hideNavMenu}>SNIPPETS</Link></li><li>
                <Link to="/skills" onClick={this.hideNavMenu}>SKILLS</Link></li><li>
                <Link to="/courses" onClick={this.hideNavMenu}>COURSES</Link></li><li>
                <Link to="/certificates" onClick={this.hideNavMenu}>CERTIFICATES</Link></li><li>
                <Link to="/readings" onClick={this.hideNavMenu}>READINGS</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;