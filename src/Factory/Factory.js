import {Validator} from "../Validator/Validator";

export class Factory {

   static getValidator() {
        return new Validator();
    }

}