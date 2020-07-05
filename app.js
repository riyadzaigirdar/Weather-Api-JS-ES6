const ui = new Ui
const storage = new Storage
document.addEventListener("DOMContentLoaded", fetchFromLocal)
// added in new branch
function fetchFromLocal() {
    const item = storage.getItem()
    if (item !== null) {
        const weather = new Weather(item)
        weather.getWeather()
            .then(data => {
                ui.setWeather(data)
            })
    }

}
// added in new branch
document.getElementById('w-change-btn').addEventListener('click', function () {
    storage.setItem()
    fetchFromLocal()

})