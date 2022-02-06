import IOberver from "../interfaces/iobserver";
import Video from "./video";

export default class Subscriber implements IOberver {
    constructor(public readonly id: string, public readonly name: string) {}
    update(video: Video): void {
        console.log(`${this.name} has been notified about ${video.title}`);
    }
    
}