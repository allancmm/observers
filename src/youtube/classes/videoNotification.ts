import IObserver from "../interfaces/iobserver";
import ISubject from "../interfaces/isubject";
import Video from "./video";

export default class VideoNotification implements ISubject {
    private observers: IObserver[] = [];
    constructor(public readonly video: Video) {}

    subscribe(sub: IObserver): void {
        this.observers.push(sub);
    }

    unSubscribe(sub: IObserver): void {
        this.observers = this.observers.filter((o) => o !== sub);
    }

    unSubscribeAll(): void {
        this.observers = [];
    }

    notify(observer: IObserver): void {
        observer.update(this.video);
    }

    notifyAll(): void {
        this.observers.forEach((sub) => this.notify(sub));
    }
}