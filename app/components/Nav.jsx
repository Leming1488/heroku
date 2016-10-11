const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass ( {
  onSearch: function (e) {
    e.preventDefault();
    alert('dasd');
  },
  render: function () {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
              <ul className="menu">
                  <li className="menu-text">React Weather App</li>
                  <li>
                      <IndexLink to="/">Get Weather</IndexLink>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/examples">Examples</Link>
                  </li>
              </ul>
          </div>
          <div className="top-bar-right">
            <form  onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
