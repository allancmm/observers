import Observer from "./classes/observer";
import Subject from "./classes/subject";

const observerOne = new Observer(1);
const observerTwo = new Observer(2);
const observerThree = new Observer(3);

const subject = new Subject();

console.log("Subscribe 1, 2 and 3");
subject.subscribe(observerOne);
subject.subscribe(observerTwo);
subject.subscribe(observerThree);

subject.notifyAll();