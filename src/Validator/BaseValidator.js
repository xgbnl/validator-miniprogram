import {Decorate} from "../Decorate/Decorate";

export class BaseValidator {
    matchDecorate

    constructor() {
        this.matchDecorate = Decorate.instance();
    }
}