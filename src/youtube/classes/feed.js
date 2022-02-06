"use strict";
exports.__esModule = true;
var Feed = /** @class */ (function () {
    function Feed(channelId) {
        this.channelId = channelId;
        this.url = "videoURL/".concat(channelId);
    }
    Feed.prototype.update = function (video) {
        console.log("New video add in Feed: ".concat(video.title));
        console.log("Check this out: ".concat(this.url));
    };
    return Feed;
}());
exports["default"] = Feed;
