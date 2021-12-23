const axios = require('axios');

const fetchForecast = function(stationID) {
  return axios.get(`http://bcrfc.env.gov.bc.ca/freshet/clever/${stationID}.CSV`)
    .then((response) => {
      
      response.data.split('\r\n').forEach((data) => {
        console.log(data)
      })
    })
    .catch(err => console.log(err.message))

}

fetchForecast('08NL024');
  