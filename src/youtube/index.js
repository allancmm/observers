"use strict";
exports.__esModule = true;
var video_1 = require("./classes/video");
var feed_1 = require("./classes/feed");
var subscriber_1 = require("./classes/subscriber");
var videoNotification_1 = require("./classes/videoNotification");
var video = new video_1["default"]('1', 'Aprenda a criar um CLI', '', 'videoUrl');
var videoNotification = new videoNotification_1["default"](video);
var allan = new subscriber_1["default"]('1', 'Allan Martins');
var christian = new subscriber_1["default"]('1', 'Christian Martins');
var feedYoutuber = new feed_1["default"]('myFeedId');
videoNotification.subscribe(allan);
videoNotification.subscribe(christian);
videoNotification.subscribe(feedYoutuber);
videoNotification.notifyAll();
