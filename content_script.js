if (window == top) {
  window.addEventListener('keyup', doKeyPress, false) // add the keyboard handler
}

trigger_key = 71 // g key
function doKeyPress (e) {
  // console.log(srcElement)
  // if (e.shiftKey && e.keyCode == trigger_key) { // if e.shiftKey is not provided then script will run at all instances of typing "G"
  if (e.ctrlKey && e.keyCode == trigger_key) {
    chrome.runtime.sendMessage({action: 'download'}, function (response) {
      console.log(response.message)
    })
  }

  // chrome.runtime.sendMessage({src: srcElement.src}, function (response) {
  //   console.log('downloading')
  // })
}

document.addEventListener('mousemove', function (e) {
  var srcElement = e.srcElement
  if (srcElement.nodeName == 'IMG') {
    chrome.runtime.sendMessage({src: srcElement.src}, function (response) {
      console.log(response.message)
    })
  }
  // Lets check if our underlying element is a DIV.
  // if (srcElement.nodeName == 'IMG') {
    // console.log(srcElement.src)
    // chrome.downloads.download({url: srcElement.src, filename: 'test.jpg'})
    // alert('ok')
  // chrome.downloads.download({
  //   url: 'https://backgrounds.wetransfer.net/alvpen3gl_1680x1050.jpg'
  // })
  // }
}, false)
