(function(window){
    window.tomatoTownApp = {
        invoke: function(stringParams){
            var params = JSON.parse(stringParams);
            switch(params.action){
            case 'getCurrentUser':
                chrome.storage.sync.get({}, function(setting) {
                    var getCurrentUser = setting.getCurrentUser || {};
                    if(getCurrentUser.isEnable)
                        return window.tomatoTownJs.callback('', 'getCurrentUser', getCurrentUser.data, params.identifier);
                    window.tomatoTownJs.callback(JSON.stringify({message: 'method not support'}), params.action, '', params.identifier);
                });
                break;
            default:
                window.tomatoTownJs.callback(JSON.stringify({message: 'method not support'}), params.action, '', params.identifier);
            }
        }
    }
})(window);