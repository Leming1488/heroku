const React = require('react');
const {Link, IndexLink} = require('react-router');


const Nav = () => {
  return (
    <div>
      <h3>Navigator component</h3>
      <IndexLink to="/">Get Weather</IndexLink>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
};

module.exports = Nav;
