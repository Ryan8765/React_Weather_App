var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=bdb6a0604b3762ea3d08c8360fb249bc&units=imperial';


module.exports = {


	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl)
			.then((res) => {
				console.log(res);
				if(res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				} else {
					return res.data.main.temp;
				}
			},(err) => {
				throw new Error("Unable to find location");
			});
	}


};