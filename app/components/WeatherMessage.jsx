const React = require('react');

const WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <span className="text-centered">Город {location} температура {temp}</span>
    </div>
  );
};

module.exports = WeatherMessage;
