var globaltest

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    if (request.action == 'download') {
        console.log(globaltest)
        chrome.downloads.download({url: globaltest})
        sendResponse({message: 'downloading'})
    }
    if (request.src) {
        globaltest = request.src
        sendResponse({message: globaltest})
    }
})
