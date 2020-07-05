class Ui {
    constructor() {
        this.location = document.getElementById("w-location")
        this.desc = document.getElementById("w-desc")
        this.string = document.getElementById("w-string")
        this.icon = document.getElementById("w-icon")
        this.humidity = document.getElementById("w-humidity")
        this.dewpoint = document.getElementById("w-dewpoint")
        this.feelsLike = document.getElementById("w-feels-like")
        this.wind = document.getElementById("w-wind")
    }

    setWeather(result) {
        this.location.textContent = result.name
        this.desc.textContent = result.weather[0].description
        this.string.textContent = `${result.main.temp} Degree`
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humadity ${result.main.humidity}`
        this.dewpoint.textContent = `Pressure ${result.main.pressure}`
        this.feelsLike.textContent = `Feels Like ${result.main.feels_like}`
        this.wind.textContent = `Wind Degree: ${result.wind.deg} Speed: ${result.wind.speed}`
    }

}




