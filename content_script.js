if (window == top) {
    window.addEventListener('keyup', doKeyPress, false)
}

var trigger_key = 71 // "g" key
var trigger_key = 89 // "y" key
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
    var srcURL
    switch (srcElement.nodeName) {
        case "IMG":
            srcURL = srcElement.src
            break;
        case "VIDEO":
            srcURL = srcElement.childNodes[0].src
            break;
    }
    // console.log(srcElement.childNodes[0].src)
    // if (srcElement.nodeName == 'IMG') {
    chrome.runtime.sendMessage({
        action: "hover",
        src: srcURL
    }, function(response) {
        console.log(response.message)
    })
    // }
}, false)
