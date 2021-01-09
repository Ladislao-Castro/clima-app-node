const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);
    //console.log(dir);
    //let ciudad = "ottawa"
    let key = "1c2a770a90d33342cfa58303c332967d"
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=${key}`

    const instance = axios.create({
        baseURL: url,
    });

    const resp = await instance.get();

    if (resp.data.cod.encodeURI === '404') {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const nombre = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        nombre,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}