$(document).ready(function () {
    
    $(".window").draggable({
        cursor: "grabbing",
        containment: "body",
        handle: ".title-bar",
        start: function (event, ui) {
            customInter = setInterval(() => {
                $(this).clone().appendTo('#cloneZone');
            }, 30);
        },
        stop: function (event, ui) {
            clearInterval(customInter);
            document.getElementById('cloneZone').innerHTML = '';
        }
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