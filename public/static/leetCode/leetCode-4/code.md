/**

    解題思路:
    一開始判斷長度，不相等直接false
    若相等將字串重新排序，比對是否相同

**/

/**
  @param {string} s
  @param {string} t
  @return {boolean}
**/
const isAnagram = (s, t) => {
    if(s.length != t.length) return false;

    const str1 = s.split("").sort().join("");
    const str2 = t.split("").sort().join("");

    return str1 == str2
}
const s1 = "anagram"
const t1 = "nagaram"
console.log(isAnagram(s1,t1))

const s2 = "rat"
const t2 = "car"
console.log(isAnagram(s2,t2))