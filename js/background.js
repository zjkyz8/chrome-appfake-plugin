(function (chrome) {
    var isEnable;
    chrome.browserAction.onClicked.addListener(function(tab) {
        var isEnable;
        chrome.tabs.getAllInWindow(null, function(tabs){
            if(!isEnable){
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        file: './js/tomato-app-enable.js',
                        runAt: 'document_start'
                    });
                }
                isEnable = false;
            }
            else{
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        file: './js/tomato-app-disable.js',
                        runAt: 'document_idle'
                    });
                    isEnable = true;
                }
            }
        });
        

        // for(viewIndex in views){
            
        // }

      //   var viewTabUrl = chrome.extension.getURL('image.html');
      //   var imageUrl = /* an image's URL */;

      // // Look through all the pages in this extension to find one we can use.
      // var views = chrome.extension.getViews();
      // for (var i = 0; i < views.length; i++) {
      //   var view = views[i];

      //   // If this view has the right URL and hasn't been used yet...
      //   if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

      //     // ...call one of its functions and set a property.
      //     view.setImageUrl(imageUrl);
      //     view.imageAlreadySet = true;
      //     break; // we're done
      //   }
      // }
    });
    chrome.tabs.onCreated.addListener(function(newTab){
        chrome.extension.getBackgroundPage().console.log(newTab);
    });
     chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
        chrome.extension.getBackgroundPage().console.log(tabId);
        chrome.extension.getBackgroundPage().console.log(removeInfo);
    });
})(chrome)