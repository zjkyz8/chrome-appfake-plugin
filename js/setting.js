(function (argument) {
    function save_options() {
        var isGetCurrentUserEnabled = document.getElementById('isGetCurrentUserEnabled').checked;
        var currentUserData = document.getElementById('currentUserData').value;
        var status = document.getElementById('status');
        chrome.storage.sync.set({
            getCurrentUser:{
                isEnable: isGetCurrentUserEnabled,
                data: currentUserData
            }
        }, function() {
            status.textContent = '保存成功';
            setTimeout(function() {
                status.textContent = '';
            }, 750);
        });
    }

    function restore_options() {
  // Use default value color = 'red' and likesColor = true.
        chrome.storage.sync.get({
            getCurrentUser: {
                isEnable: isGetCurrentUserEnabled,
            }
        }, function(items) {
            document.getElementById('isGetCurrentUserEnabled').checked = items.getCurrentUser.isEnable;
            document.getElementById('currentUserData').value = items.getCurrentUser.data;
        });
    }
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('save').addEventListener('click', save_options);
})();