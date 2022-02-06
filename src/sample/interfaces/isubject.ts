 import IOberver from "./iobserver";

 export default interface ISubject {
     subscribe(observer: IOberver): void;
     unsubscribe(observer: IOberver): void;
     unsubscribeAll(): void;

     notify(observer: IOberver): void;
     notifyAll(): void;
 }