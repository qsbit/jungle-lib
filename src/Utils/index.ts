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

/**
 * 递归当前节点获取所有父节点的key，直到顶部
 * @param {*} treeData treeData
 * @param {*} currentId 当前节点的id
 * @param {*} valueKey 需要获取的父节点的key
 * @returns
*/
export const getParentKeys = (treeData: Array<any>, currentId: string, valueKey = 'label') => {
  // 结果数组
  const parentKeyList: Array<any> = [];
  const loopFn = (arr: Array<any>, id: string) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item?.id === id) {
        loopFn(treeData, item?.parentId);
        parentKeyList?.push(item[valueKey]);
        break;
      } else {
        if (item?.children) {
          loopFn(item?.children, id);
        }
      }
    }
  };
  loopFn(treeData, currentId);
  return parentKeyList;
};

// 通过id查找整棵树下边的子节点
export const findChildrenKey = (treeList: Array<any>, id: any, valueKey = 'label') => {
  const temp: Array<any> = [];
  const loopFn = (treeList: Array<any>, id: any) => {
    for (let i = 0; i < treeList?.length; i++) {
      const item = treeList[i];
      if (item?.parentId === id) {
        temp.push(item[valueKey]);
        loopFn(treeList, item.id);
      } else {
        if (item?.children) {
          loopFn(item?.children, id);
        }
      }
    }
  };
  loopFn(treeList, id);
  return temp;
};


const Utils = {
  trimObj,
  convertNumToUppercase,
  formateTimeStamp,
  getParentKeys,
  findChildrenKey,
};

export default Utils;
