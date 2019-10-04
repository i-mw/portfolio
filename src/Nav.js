import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
                  <Link to="/">
                    <svg onClick={this.hideNavMenu} preserveAspectRatio="xMidYMid meet" viewBox="0 0 34 34" width={34} height={34}><defs><path d="M34 17C34 26.39 26.39 34 17 34C7.61 34 0 26.39 0 17C0 7.61 7.61 0 17 0C26.39 0 34 7.61 34 17Z" id="eHnoaTqMa" /><path d="M18.4 31.27C18.33 31.27 18.27 31.26 18.23 31.22C17.9 31.14 17.73 30.94 17.73 30.6C17.73 27.88 17.73 6.12 17.73 3.4C17.73 2.95 17.95 2.73 18.4 2.73C18.59 2.73 18.74 2.8 18.85 2.95C19 3.1 19.08 3.25 19.08 3.4C19.08 5.04 19.08 13.22 19.08 27.96C21.61 23.41 23.01 20.88 23.29 20.37C23.33 20.22 23.46 20.11 23.68 20.03C23.87 20 24.06 20.03 24.25 20.15C24.67 20.43 28.09 22.68 28.52 22.96C29.49 20.97 29.96 18.99 29.92 17C29.92 14.64 29.32 12.45 28.12 10.42C26.96 8.36 25.35 6.77 23.29 5.65C22.92 5.46 22.82 5.16 23.01 4.75C23.16 4.41 23.46 4.32 23.91 4.47C26.19 5.74 27.99 7.5 29.3 9.75C30.62 11.96 31.27 14.38 31.27 17C31.35 19.51 30.71 21.93 29.36 24.25C29.32 24.4 29.17 24.51 28.91 24.59C28.76 24.62 28.59 24.59 28.41 24.47C28.12 24.29 26.7 23.35 24.13 21.66C21.07 27.23 19.36 30.32 19.02 30.94C18.8 31.16 18.59 31.27 18.4 31.27" id="h1uU32uSfF" /><path d="M15.59 31.27C15.4 31.27 15.24 31.2 15.09 31.05C14.97 30.9 14.92 30.75 14.92 30.6C14.92 28.97 14.92 20.82 14.92 6.15C12.56 10.6 11.25 13.08 10.98 13.57C10.95 13.72 10.8 13.83 10.53 13.91C10.38 13.95 10.22 13.91 10.03 13.8C9.59 13.49 6.08 11.07 5.65 10.76C4.56 12.64 4.02 14.71 4.02 17C4.05 19.36 4.63 21.53 5.76 23.52C6.88 25.47 8.45 27.02 10.48 28.18C10.89 28.45 10.97 28.75 10.7 29.08C10.52 29.46 10.22 29.55 9.8 29.36C7.59 28.05 5.85 26.31 4.58 24.14C3.34 21.96 2.72 19.59 2.72 17C2.72 14.23 3.43 11.7 4.86 9.41C4.97 9.23 5.12 9.13 5.31 9.13C5.5 9.06 5.66 9.09 5.81 9.24C6.11 9.45 7.57 10.46 10.2 12.28C13.1 6.78 14.71 3.73 15.03 3.12C15.22 2.82 15.48 2.71 15.82 2.78C16.15 2.86 16.32 3.06 16.32 3.4C16.32 6.12 16.32 27.88 16.32 30.6C16.25 31.05 16 31.27 15.59 31.27" id="c2g0ZSc9Q" /></defs><g><g><g><use xlinkHref="#eHnoaTqMa" opacity={1} fill="#435472" fillOpacity={1} /><g><use xlinkHref="#eHnoaTqMa" opacity={1} fillOpacity={0} stroke="#000000" strokeWidth={0} strokeOpacity={1} /></g></g><g><use xlinkHref="#h1uU32uSfF" opacity={1} fill="#ffffff" fillOpacity={1} /><g><use xlinkHref="#h1uU32uSfF" opacity={1} fillOpacity={0} stroke="#ffffff" strokeWidth={0.5} strokeOpacity={1} /></g></g><g><use xlinkHref="#c2g0ZSc9Q" opacity={1} fill="#ffffff" fillOpacity={1} /><g><use xlinkHref="#c2g0ZSc9Q" opacity={1} fillOpacity={0} stroke="#ffffff" strokeWidth={0.5} strokeOpacity={1} /></g></g></g></g></svg>
                  </Link>
              </div>
              <div className="hamburger" tabIndex="0" onClick={this.toggleNavMenu}
                  onKeyDown={event => event.keyCode === 13 && this.toggleNavMenu(event)}>
                  <svg viewBox="0 0 24 24" enableBackground="new 0 0 24 24" width="24px" height="24px"><g><path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#435472" /><path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#435472" /><path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#435472" /></g></svg>
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