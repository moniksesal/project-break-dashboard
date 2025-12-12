// función principal - dentro hará el fetch a la API y llamaremos a funciones secundarias
// función para clima actual - recibe la respuesta de la API y rellena el contenedor #actualWeather (ciudad, pais, icono clima,temperatura, humedad, viento, precipitaciones)
// función para el clima futuro - recibe la respuesta de la API y crea dinámicamente bloques dentro de #futureWeather (hora, icono, temperatura)
// función "madre"
const actualWeather = document.getElementById("actualWeather")
const futureWeather = document.getElementById("futureWeather")

// necesito: ciudad y pais, estado del clima, imagen y grados celsius, precip, humedad, viento km/h
//location.name, location.country
//current.condition.text, current.condition.icon, current.temp_c,forecast.forecastday.hour.chance_of_rain, current.humidity, current.wind_kph,

const getWeather = async (city) => {
    try {
        const apiKey = "814bac6b1da8453ca23112530250312"
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
        if (!response.ok) {
            throw new Error("Ha surgido un error", response.status)
        }
        return await response.json()
    } catch (error) {
        console.log("Error al obtener los datos", error)
    }
}

const currentWeather = (data) => {
    const { name: city, country } = data.location
    const { temp_c, humidity, wind_kph, condition } = data.current
    const { text, icon } = condition
    const currentHour = new Date().getHours()
    const rain = data.forecast.forecastday[0].hour[currentHour].chance_of_rain
    const actualWeatherData = {
        city,
        country,
        temp_c,
        humidity,
        wind_kph,
        text,
        icon,
        rain
    }
    const actualTemplate = `
    <h1>${city} / ${country}</h1>
    <h2>${text}</h2>
    <div class="actualWeatherContainer">
        <img src="${icon}" alt="${text}"/>
        <p class="temp">${temp_c} Cº</p>
        <div class="subContainer">
            <p>Precipitaciones: ${rain}%</p>
            <p>Humedad: ${humidity}%</p>
            <p>Viento: ${wind_kph} Km/h</p>
        </div>
    </div>
    `
    actualWeather.innerHTML = actualTemplate
}


const forecastWeather = (data) => {
    const html = data.forecast.forecastday[0].hour.map(h => {
        const [hour, minute] = h.time.split(" ")[1].split(":")
        const { temp_c, condition } = h;
        const {icon } = condition;
        return `
            <div class="forecastContainer">
                <h3>${hour}:${minute}</h3>
                <img src="${icon}"/>
                <p class="temperature">${temp_c} Cº</p>
            </div>
        `
    })
    .join("")
    futureWeather.innerHTML = html //solo lo escribimos una vez en el DOM
}


// función madre donde controlo las demás
const main = async () => {
    const data = await getWeather("Barcelona");
    currentWeather(data)
    forecastWeather(data)
}

main()