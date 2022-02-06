import IOberver from "../interfaces/iobserver";

export default class Observer implements IOberver {
    constructor(public readonly id: number) {}

    update(): void {
        console.log(`Observer ${this.id} updated`);
    }

}