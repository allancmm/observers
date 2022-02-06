import IOberver from "../interfaces/iobserver";
import Video from "./video";

export default class Feed implements IOberver {
    public url: string;
    constructor(public readonly channelId: string) {
        this.url = `videoURL/${channelId}`;
    }

    update(video: Video): void {
        console.log(`New video add in Feed: ${video.title}`);
        console.log(`Check this out: ${this.url}`);
    }
    
}