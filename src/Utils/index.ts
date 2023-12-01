import { trim } from 'lodash-es';
import moment from 'moment';

/**
 * 去除对象中每一项的前后空格
 * @param object
 * {
 *  name: ' wang wu ',
 *  age: '12  '
 * }
 * @returns
 * {
 *  value1: 'wang wu',
 *  age: '12'
 * }
 */
interface objectProp {
  [key: string]: string | number | undefined | null | void;
}
export const trimObj = (object: objectProp) => {
  const newObj: objectProp = {};
  for (let item in object) {
    if (item) {
      newObj[item] = trim(object[item]);
    }
  }
  return newObj;
};

/**
 * 小写数字转换成大写，只处理到[0 ~ 99]
 * @param num 8
 * @returns 八
 */
export const convertNumToUppercase = (num: number) => {
  // eslint-disable-next-line no-param-reassign
  num = Number(num);
  let upperCaseNumber = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
  ];
  if (num <= 10) {
    return upperCaseNumber[num];
  } else if (num > 10 && num < 20) {
    return '十' + upperCaseNumber[+String(num).charAt(1)];
  } else {
    return (
      upperCaseNumber[+String(num).charAt(0)] +
      '十' +
      upperCaseNumber[+String(num).charAt(1)].replace('零', '')
    );
  }
};

/**
 * 时间戳格式化
 * @param value 时间戳
 * @param format 格式化类型
 * @returns
 */
export const formateTimeStamp = (
  value: Date,
  format: string = 'YYYY-MM-DD HH:mm:ss',
) => {
  if (!value) return;
  return moment(value)?.format(format);
};

const Utils = {
  trimObj,
  convertNumToUppercase,
  formateTimeStamp,
};

export default Utils;
