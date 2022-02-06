"use strict";
exports.__esModule = true;
var VideoNotification = /** @class */ (function () {
    function VideoNotification(video) {
        this.video = video;
        this.observers = [];
    }
    VideoNotification.prototype.subscribe = function (sub) {
        this.observers.push(sub);
    };
    VideoNotification.prototype.unSubscribe = function (sub) {
        this.observers = this.observers.filter(function (o) { return o !== sub; });
    };
    VideoNotification.prototype.unSubscribeAll = function () {
        this.observers = [];
    };
    VideoNotification.prototype.notify = function (observer) {
        observer.update(this.video);
    };
    VideoNotification.prototype.notifyAll = function () {
        var _this = this;
        this.observers.forEach(function (sub) { return _this.notify(sub); });
    };
    return VideoNotification;
}());
exports["default"] = VideoNotification;
