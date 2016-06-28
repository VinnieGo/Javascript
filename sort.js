//JS中各种排序算法的实现
/**
 * 冒泡排序
 * 算法思想：每次将最小的元素推至最前
 */
function bubbleSort(array) {
    var len = array.length,
        i, j, tmp;
    for (i = 0; i < len; i++) {
        for (j = len - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([2,1,4,65,3]));
/**
 * 改进版的冒泡排序算法
 * 算法思想：对第一种排序算法的优化，当一次遍历前后的数组不产生变化时，说明该数组已经有序，此时结束排序
 */
function bubbleSortPlus(array) {
    var len = array.length,i,j,tmp,exchage;
    for(i = 0; i < len; i++){
        exchage = 0;
        for(j = len-1; j > i; j--) {
            if(array[j] < array[j-1]){
                tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
                exchage = 1;
            }
        }
        if(!exchage)  return array;
    }
    return array;
}
console.log(bubbleSort([2,1,4,65,3]));


/**
 * 快速排序
 * 算法思想：
 * 1.在数据集之中，选择一个元素做为'基准'。
 * 2.所有小于'基准'的元素，都移到'基准'的左边；所有大于'基准'的元素，都移到'基准'的右边。
 * 3.对'基准'左边和右边的两个子集，不断的重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */
var quickSort = function(arr){
    if(arr.length <= 1){
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for(var i = 0; i < arr.length; i++){
        if(a[i] < pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}
