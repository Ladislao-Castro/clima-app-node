const Axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0e0618f55305ecd9bd97d60bfb5e1cf7&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}