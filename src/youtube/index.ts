import Video from "./classes/video";
import Feed from "./classes/feed";
import Subscriber from "./classes/subscriber";
import VideoNotification from "./classes/videoNotification";

const video = new Video('1', 'Aprenda a criar um CLI', '', 'videoUrl');

const videoNotification = new VideoNotification(video);

const allan = new Subscriber('1', 'Allan Martins');
const christian = new Subscriber('1', 'Christian Martins');
const feedYoutuber = new Feed('myFeedId');

videoNotification.subscribe(allan);
videoNotification.subscribe(christian);
videoNotification.subscribe(feedYoutuber);

videoNotification.notifyAll();