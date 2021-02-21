$(function () {
    $(".window").draggable();
    $("#taskbar").draggable("disable");
    $(".window-body").draggable("disable");
});

function setTime() { 
    document.querySelector('#time').textContent = new Date().toLocaleTimeString([], {
        timeStyle: 'short'
    });
}
setTime()
setInterval(setTime, 10000);