/**
 * 創建枚舉的函數
 * **/

const createEnumObject = (enums, config = null) => {
    let valueKey = (config ? config.valueKey : null) || 'value'
    let labelKey = (config ? config.labelKey : null) || 'label'
  
    return {
      /**
       * 獲取單個配置項
       * @param {Any} value
       * @param {String} key
       * @returns {Object}
       */
      getItem(value, key = null) {
        for (let item of enums) {
          if (item[key || valueKey] == value) {
            return item
          }
        }
      },
  
      /**
       * 獲取配置項單列
       * @param {String} key
       * @returns {Array}
       */
      getColums(key) {
        return enums.map((item) => {
            return item[key]})
      },
  
      /**
       * 獲取配置單項值
       * @param {String} column
       * @param {String} key
       * @param {Any} value
       * @returns {Any}
       */
      getColum(column, value, key) {
        let item = this.getItem(value, key)
        if (item) {
          return item[column]
        }
      },
  
      /**
       * 獲取label列
       * @returns {Array}
       */
      getLabels() {
        return this.getColums(labelKey)
      },
  
      /**
       * 獲取value列
       * @returns {Array}
       */
      getValues() {
        return this.getColums(valueKey)
      },
  
      /**
       * 獲取label
       * @param {Any} value
       * @param {String} key
       * @returns {Any}
       */
      getLabel(value, key = null) {
        return this.getColum(labelKey,value, key || valueKey)
      },
  
      /**
       * 獲取value
       * @param {Any} value
       * @param {String} key
       * @returns {Any}
       */
      getValue(value, key = null) {
        return this.getColum(valueKey, value, key || labelKey)
      },
    }
}


//=============使用方式=================

const statusEnum = {
    // 待支付
    WaitPay: 0,
    // 已完成
    Success: 1,
    // 已取消
    Cancel: 2,
};

const statusEnumConfig = [
    {
        value: statusEnum.WaitPay,
        label: "待支付",
        color: "yellow",
        // 支付 取消支付
        actions: ["pay", "cancel"],
    },
    {
        value: statusEnum.Success,
        label: "已完成",
        color: "green",
        // 查看明細 退款
        actions: ["detail", "return"],
    },
    {
        value: statusEnum.Cancel,
        label: "已取消",
        color: "red",
        // 查看明細
        actions: ["detail"],
    },
];

const statusEnumObject = createEnumObject(statusEnumConfig);

// 通过 value获取配置项
console.log(statusEnumObject.getColums('color'));
console.log(statusEnumObject.getColum('label',1,'value'));
// {
//   value: 1,
//   label: '已完成',
//   color: 'green',
//   actions: [ 'detail', 'return' ]
// }

// 通过label获取value
console.log(statusEnumObject.getValue("已完成"));
// 1

// 没有对应的值返回undefined
console.log(statusEnumObject.getValue(1));
// undefined

// 通过value 获取 label
// 接口返回的真实数值，转换为显示值
console.log(statusEnumObject.getLabel(1));
// 已完成

// 通过指定key=color，获取label
console.log(statusEnumObject.getLabel('green', 'color'));
// 已完成

// 直接和接口返回的数值，做逻辑判断
let status = 1;
console.log(statusEnum.Success == status);
// true


//=============GitHub=================
//https://github.com/mouday/more-enum
