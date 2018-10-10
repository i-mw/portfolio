import React, {Component} from 'react';

class Footer extends Component {
  componentDidMount() {
    this.fixFooterToBottom()
  }

  fixFooterToBottom() {
    let footer = document.querySelector('footer');
    function checkHeights() {
        let bodyHeight = Number(window.getComputedStyle(document.body)
            .height.replace('px', ''));
        let viewportHeight = window.innerHeight;

        if (bodyHeight < viewportHeight) {
            footer.classList.add('fixed-bottom')
        } else {
            footer.classList.remove('fixed-bottom')
        }
    }
    checkHeights();
    window.addEventListener('resize', checkHeights);
  }

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