class Weather {
    constructor(location) {
        this.location = location
        this.api_key = "bae75290a1785ebb49fc9d2c2241746d"
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.api_key}`)
        const responseData = await response.json()

        return responseData
    }

    changeLocation(newLocation) {
        this.location = newLocation
    }

}