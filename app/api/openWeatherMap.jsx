const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=70a3c56c68e9749a2a8f2f70b691cd87';
module.exports = {
  getTemp: function (location) {
    const encodeLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestUrl).then( function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
