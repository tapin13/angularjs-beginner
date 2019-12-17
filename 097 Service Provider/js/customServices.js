const module = angular.module("customServices", []);

module.provider("logService", function() {
    let counter = true;
    let debug = true;

    return {
        messageCounterEnabled: function(setting) {
            if(angular.isDefined(setting)) {
                counter = setting;
                return this;
            }

            return debug;
        },
        debugEnabled: function(setting) {
            if(angular.isDefined(setting)) {
                debug = setting;
                return this;
            }

            return debug;
        },
        $get: function() {
            return {
                messageCount: 0,
                log: function(message) {
                    if(debug) {
                        console.log("#log " + (counter ? this.messageCount + ', ' : '') + 'message: ' + message);
                        counter ? this.messageCount++ : null;
                    }
                }
            };
        }
    };
});
