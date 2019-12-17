const module = angular.module("logService", []);

module.factory("logService", function() {
    let messageCount = 0;
    return {
        log: function(message) {
            console.log("Log #" + messageCount + ", message: " + message);
            messageCount++;
        }
    }
})