import {Matches} from "../Enum/Matches";

export class Decorate {
    #phone;
    #name;

    constructor() {
        this.#configure();
    }

    #configure() {
        this.#phone = Matches.phoneReg;
        this.#name = Matches.nameReg
    }

    phoneMatch() {
        return new RegExp(this.#phone);
    }

    nameMatch() {
        return new RegExp(this.#name);
    }

   static instance() {
        return new Decorate();
    }
}