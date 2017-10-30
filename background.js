var selected_element

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

    if (request.action == 'hover') {
      selected_element = request.src
      sendResponse({message: selected_element})
    }

    if (request.action == 'download') {
      chrome.downloads.download({url: selected_element})
      sendResponse({message: 'downloading ' + selected_element})
    }

  }
)
