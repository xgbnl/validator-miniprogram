import {BaseValidator} from "./BaseValidator";

export class Validator extends BaseValidator {

    constructor() {
        super();
    }

    /**
     * 给定字符串是否为空
     * @param haystack
     * @returns {boolean}
     */
    isEmpty(haystack) {
        return !haystack || !haystack.trim();
    }

    /**
     * 是否为合法手机号
     * @param phone
     * @returns {boolean}
     */
    isPhone(phone) {
        return !this.matchDecorate.phoneMatch().test(phone);
    }

    /**
     * 是否为合法姓名
     * @param name
     * @returns {boolean}
     */
    isName(name) {
        return !this.matchDecorate.nameMatch().test(name);
    }

    /**
     * 验证给定字符串是否超出设置长度
     * @param haystack
     * @param length
     * @returns {boolean}
     */
    validateLength(haystack, length = 50) {
        return haystack && haystack.trim().length > length;
    }

    /**
     * 给定对象是否为空对象
     * @param haystack
     * @returns {boolean}
     */
    objectEmpty(haystack) {
        return JSON.stringify(haystack) === '{}';
    }

    /**
     * 数组是否包含某个元素
     * @param array
     * @param needle
     * @returns {*}
     */
    inArray(array, needle) {
        return array.includes(needle);
    }

    /**
     * 是否为空数组
     * @param haystack
     */
    isEmptyArray(haystack) {
        return Array.isArray(haystack) && !haystack.length;
    }
}

