import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="wrap-out">
        <div className="wrap-in">
          <div className="container">
            <p>View this portfolio's source code on &nbsp;
              <a href="https://github.com/i-mw/i-mw.github.io">github</a></p><p>
                &copy;Mustafa Wahba[MW]
            </p>
          </div>
        </div>
      </footer>    
    )
  }
}

export default Footer;