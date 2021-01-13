document.body.onkeyup = function (e) {
    if (e.code == "Space") {
        document.body.classList.toggle("dark")
    }
}

document.getElementById('name').onclick = function (e) {
    document.body.classList.toggle("light")
}