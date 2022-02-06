import IObserver from "./iobserver";

export default interface ISubject {
    subscribe(observer: IObserver) : void;
    unSubscribe(observer: IObserver): void;
    unSubscribeAll(): void;

    notify(observer: IObserver): void;
    notifyAll(): void;
}