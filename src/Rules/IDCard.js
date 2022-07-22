export class IDCard {

    #cityCodes = {};
    #cardInt = [];
    #cardCh = [];

    #reg = null;

    constructor() {
        this.#configure();
    }

    #configure() {
        this.#cityCodes = {
            11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
            21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
            33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
            42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
            51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
            63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
        };

        this.#cardInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

        this.#cardCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

        this.#reg = new RegExp(/(^\d{15}$)|(^\d{17}(\d|X|x)$)/);
    }

    validate(idCard) {

        if (!this.#reg.test(idCard)) {
            return false;
        }

        const provinceCode = idCard.substring(0, 2);

        return this.#cityCodes[provinceCode] === undefined
            ? false
            : this.#checkParity(idCard) !== false;
    }

    #checkParity(card) {

        card = this.#changeFifteenToEighteen(card);

        return card.length === 18 ? this.#calcParity(card) : false;
    }

    #calcParity(card) {
        let sum = 0;

        for (let i = 0; i < 17; i++) {
            sum += card.charAt(i) * this.#cardInt[i];
        }

        return this.#cardCh[sum % 11] === card.substring(17).toLocaleUpperCase();
    }

    #changeFifteenToEighteen(card) {
        return card.length === 15 ? this.#calcCardFifteenToEighteen(card) : card;
    }

    #calcCardFifteenToEighteen(card) {
        card = card.substring(0, 6) + '19' + card.substring(6);

        let sum = 0;

        for (let i = 0; i < 17; i++) {
            sum += card.charAt(i) * this.#cardInt[i];
        }

        return card + this.#cardCh[sum % 11];
    }

    static getInstance() {
        return new IDCard();
    }
}