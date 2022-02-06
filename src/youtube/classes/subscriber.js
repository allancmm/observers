"use strict";
exports.__esModule = true;
var Subscriber = /** @class */ (function () {
    function Subscriber(id, name) {
        this.id = id;
        this.name = name;
    }
    Subscriber.prototype.update = function (video) {
        console.log("".concat(this.name, " has been notified about ").concat(video.title));
    };
    return Subscriber;
}());
exports["default"] = Subscriber;
