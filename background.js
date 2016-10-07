
var globaltest

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //   console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
      console.log(request)
      if (request.action == 'download') {
            //   sendResponse({farewell: 'goodbye'})
        console.log(globaltest)
        chrome.downloads.download({ url: globaltest })
        sendResponse({message: 'downloading'})
      }
      if (request.src) {
        globaltest = request.src
        sendResponse({message: globaltest})
      }
    }
)
