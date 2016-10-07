if (window == top) {
    window.addEventListener('keyup', doKeyPress, false)
}

// g key
var trigger_key = 71
function doKeyPress(e) {
    if (e.ctrlKey && e.keyCode == trigger_key) {
        chrome.runtime.sendMessage({
            action: 'download'
        }, function(response) {
            console.log(response.message)
        })
    }
}

document.addEventListener('mousemove', function(e) {
    var srcElement = e.srcElement
    if (srcElement.nodeName == 'IMG') {
        chrome.runtime.sendMessage({
            src: srcElement.src
        }, function(response) {
            console.log(response.message)
        })
    }
}, false)
