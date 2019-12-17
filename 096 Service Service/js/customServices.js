const module = angular.module("customServices", []);

const baseLogger = function() {
    this.messageCount = 0;
    this.log = function(message) {
        console.log("Type #" + this.messageType + ", Log #" + this.messageCount + ", message: " + message);
        this.messageCount++;
    };
}

const debugLogger = function() {};
debugLogger.prototype = new baseLogger();
debugLogger.prototype.messageType = "Debug";

const errorLogger = function() {};
errorLogger.prototype = new baseLogger();
errorLogger.prototype.messageType = "Error";

module.service("logService", debugLogger).service("errorService", errorLogger);