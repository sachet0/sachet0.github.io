$(document).ready(function () {
    $(".window").draggable({
        cursor: "grabbing",
        containment: "body",
        handle: ".title-bar",
    });

    $("#taskbar").draggable("disable");
});

function setTime() {
    document.querySelector('#time').textContent = new Date().toLocaleTimeString([], {
        timeStyle: 'short'
    });
}
setTime()
setInterval(setTime, 10000);