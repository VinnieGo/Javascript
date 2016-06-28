var array = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
/**螺旋打印一个矩阵
 * @param arr {Array} 一个NxN的矩阵的二维数组表示
 */
function showHelix(arr){
    var startX = 0,
        endX = arr.length - 1,
        startY = 0,
        endY = arr[0].length - 1,
        i;
        while(startX <= endX && startY <= endY){
            for(i = startX; i <= endX; i++){
                console.log(arr[startY][i]);    //输出上边的行
            }
            startY++;                           //行坐标加1
            for(i = startY; i <= endY; i++){
                console.log(arr[i][endX]);      //输出右边的列
            }
            endX--;                             // 列坐标减1
            for(i = endX; i >= startX; i--){      // 输出下边的行
                console.log(arr[endY][i])
            }
            endY--;                             // 行坐标减1
            for(i = endY; i >= startY; i--){          // 输出左边的列
                console.log(arr[i][startX]);
            }
            startX++;                           //列坐标增加1
        }
}

showHelix(array);
