/* eslint-disable no-underscore-dangle */
import { positiveInteger } from '../decorators';
import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
