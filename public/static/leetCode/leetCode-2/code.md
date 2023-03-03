
/**

    解題思路:
    先把二維陣列中， matrix[i][j] & matrix[j][i] 的數值對調
    再把每一個row，直接做 reverse

**/

const rotate = (matrix) => {
  const n = matrix.length;
  // i 代表 row，j 代表 column。
  // 先把二維陣列中， matrix[i][j] & matrix[j][i] 的數值對調。(transpose： 轉置矩陣)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 使用解構函數 將值對調
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  // 再把每一個row，直接做 reverse。即可得
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix
};

const matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log(rotate(matrix1))
console.log(rotate(matrix2))
