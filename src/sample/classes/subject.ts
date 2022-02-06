import ISubject from "../interfaces/isubject";
import IObserver from "../interfaces/iobserver";

export default  class Subject implements ISubject {
    private observers: IObserver[] = [];

    subscribe(observer: IObserver): void {
       this.observers.push(observer);
    }

    unsubscribe(observer: IObserver): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    unsubscribeAll(): void {
        this.observers = [];
    }

    notify(observer: IObserver): void {
        observer.update();
    }

    notifyAll(): void {
        this.observers.forEach((o) => this.notify(o));
    }
    
}