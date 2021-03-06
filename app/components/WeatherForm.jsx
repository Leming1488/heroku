const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    const location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Search weather" ref="location"/>
        <button className="expanded button" type="submit">Отправить</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
