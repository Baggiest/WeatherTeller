const prompt = require('prompt');
require('dotenv').config()

prompt.start();
prompt.get('city', async function (err, result) {

    const weather = await getWeather(result.city)
    console.log(`The weather in ${result.city} is ${weather.temp} degrees C`)
})

let getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    return fetch(url)
        .then(async (res) => {
            // console.log(await res.json())
            let resObject = await res.json()
            return resObject.main
        })
}
