/**

    解題思路:
    先找出第一位數值為基準 找出第二位 [相加]為目標的對象
    若第一位沒有找到 接著以下一位為基準 陸續找

    使用方法:
    使用Dictionary概念 
    主要用途就是用一個key來尋找值

**/

//暴力解決方式 效率較差
const twoSum = (nums, target) => {
for(let x=0; x < nums.length; x++){
    let goal = target - nums[x];
        for(let y=x+1; y <= nums.length; y++){
            if(nums[y] === goal){
                return [x,y];
            }
        }
    }
}

//============================================================================

//用Map方式實作
/**
    nums: Array
    target: Number
**/
const twoSumForMap = (nums, target) => {
    const Mymap = new Map();
    //先將素材都存入在map裡
    nums.forEach((num, i)=>{
        Mymap.set(num,i);
    })
    //從第一位的數值為基準找下一位 
    for(let x=0; x < nums.length; x++){
        //相加的數值-該位的數值=要找的目標數值
        let goal = target-nums[x];
        //條件為 目標的數值且不能是該位
        if( Mymap.has(goal) && x != Mymap.get(goal)){
            return[x, Mymap.get(goal)];
        }
    }
}
//用Object方式實作
const twoSumForObj = (nums, target) => {
    const dict = {};
    nums.forEach((num, i)=>{
        dict[num] = i
    })
    for(let x=0; x<nums.length; x++){
        let goal = target - nums[x];
        if( goal in dict && x != dict[goal]){
            return[x, dict[goal]];
        }
    }
}

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums,target))
console.log(twoSumForMap(nums,target))
console.log(twoSumForObj(nums,target))

