if (window == top) {
    window.addEventListener('keyup', doKeyPress, false)
}

// var trigger_key = 71 // "g" key
// var trigger_key = 89 // "y" key

var trigger_key = 18 // "alt" key

function doKeyPress(e) {
    if (e.keyCode == trigger_key) {
        // if (e.ctrlKey && e.keyCode == trigger_key) {
        chrome.runtime.sendMessage({
            action: 'download'
        }, function(response) {
            // console.log(response.message)
        })
    }
}

document.addEventListener('mousemove', function(e) {
    var srcElement = e.srcElement
    // console.log(srcElement)
    var srcURL

    switch (srcElement.nodeName) {

        case "DIV":
          if(document.domain == "www.instagram.com"){
            if (srcElement.parentNode.firstChild.firstChild.firstChild){
                srcURL = srcElement.parentNode.firstChild.firstChild.firstChild.src
            }

            // console.log(srcElement.parentNode.firstChild)
          } else {
            // console.log("unknown host");
          }
          break;

        case "IMG":
            srcURL = srcElement.src;
            break;

        case "VIDEO":
          srcURL = srcElement.src;
          if (!srcURL) {
            srcURL = srcElement.childNodes[0].src;
          }
          break;
    }

    // console.log("contentscript: " + srcURL);


    if (srcURL == null || undefined){
      //nothing
      // console.log("no image found");
    } else {
      // console.log("image found");
      chrome.runtime.sendMessage({
          action: "hover",
          src: srcURL
      }, function(response) {
        // console.log("response: " + response.message);
      })
    }
}, false)
