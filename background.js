var selected_element

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'download') {
        console.log(selected_element)
        chrome.downloads.download({url: selected_element})
        sendResponse({message: 'downloading'})
    }

    // Get hovered element
    if (request.action == 'hover') {
        selected_element = request.src
        sendResponse({message: selected_element})
    }
})
