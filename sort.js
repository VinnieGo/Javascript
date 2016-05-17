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
 * 插入排序
 * 算法思想：
 */
