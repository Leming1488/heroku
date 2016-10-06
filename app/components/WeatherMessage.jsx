const React = require('react');

const WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <span>Город {location} температура {temp}</span>
    </div>
  );
};

module.exports = WeatherMessage;
