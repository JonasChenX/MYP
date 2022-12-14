/**
 * 陣列相關的函數
 * **/

//返回陣列所有不同的值(去重)
const distinctValuesOfArray = arr => {
    return [...new Set(arr)]
};

//陣列洗牌
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

//計算陣列中value出現的次數
const countOccurrences = (arr, value) => {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
};

//返回mainArr扣除b內容的陣列 LEFT JOIN EXCLUDING INNER JOIN
const difference = (mainArr, b) => {
	const s = new Set(b);
	return mainArr.filter(x => !s.has(x));
};

//返回兩個陣列中存在的元素的列表 INNER JOIN
const intersection = (mainArr, b) => {
	const s = new Set(b);
	return mainArr.filter(x => s.has(x));
};

//返回兩個陣列的對稱差 FULL OUTER JOIN EXCLUDING INNER JOIN
const symmetricDifference = (a, b) => {
	const sA = new Set(a),
		sB = new Set(b);
	return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

//返回陣列中的每個第n個元素
const everyNth = (arr, nth) => {
    return arr.filter((e, i) => i % nth === 0)
}

//返回陣列中的非唯一值
const filterNonUnique = arr => {
    return arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i))
};

//返回陣列中的唯一值
const filterUnique = arr => {
    return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
};

//從物件中選取陣列相對應的key
const pick = (obj, arr) => {
    return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {})
};

//返回陣列中的隨機元素
const getArrRandom = arr => { 
    return arr[Math.floor(Math.random() * arr.length)];
}



export default {
    distinctValuesOfArray, //返回陣列所有不同的值
    shuffle, //陣列洗牌
    countOccurrences, //計算陣列中value出現的次數
    difference, //返回mainArr扣除b內容的陣列
    intersection, //返回兩個陣列中存在的元素的列表
    symmetricDifference, //返回兩個陣列的對稱差 
    everyNth, //返回陣列中的每個第n個元素
    filterNonUnique, //返回陣列中的非唯一值
    filterUnique, //返回陣列中的唯一值
    pick, //從物件中選取陣列相對應的key
    getArrRandom, //返回陣列中的隨機元素


    
}