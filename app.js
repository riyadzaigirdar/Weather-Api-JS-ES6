const ui = new Ui
const storage = new Storage
document.addEventListener("DOMContentLoaded", fetchFromLocal)

function fetchFromLocal() {
    const item = storage.getItem()
    const weather = new Weather(item)
    weather.getWeather()
        .then(data => {
            console.log(data)

            ui.setWeather(data)
        })
}

document.getElementById('w-change-btn').addEventListener('click', function () {
    storage.setItem()
    fetchFromLocal()

})