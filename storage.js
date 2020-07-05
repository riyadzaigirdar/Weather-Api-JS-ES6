class Storage {
    // added in new branch
    getItem() {
        let item
        if (localStorage.getItem('city') == null) {
            item = {}
        } else {
            item = JSON.parse(localStorage.getItem('city'))
        }
        return item
    }
    // added in new branch
    setItem() {
        const item = document.getElementById('city').value
        localStorage.setItem('city', JSON.stringify(item))
    }
}