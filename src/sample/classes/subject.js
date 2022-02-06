"use strict";
exports.__esModule = true;
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    Subject.prototype.unsubscribeAll = function () {
        this.observers = [];
    };
    Subject.prototype.notify = function (observer) {
        observer.update();
    };
    Subject.prototype.notifyAll = function () {
        var _this = this;
        this.observers.forEach(function (o) { return _this.notify(o); });
    };
    return Subject;
}());
exports["default"] = Subject;
