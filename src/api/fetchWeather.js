import axios from 'axios'


const URL = "https://api.openweathermap.org/data/2.5/weather"
const APIKEY = "b7544706f6c81173acea58e492f09df4"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID: APIKEY
        }
    });

    return data
}