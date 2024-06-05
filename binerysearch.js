function recursion2(arr, tar) {
  arr.sort((a,b)=>a-b)
  console.log(arr);
    return search2(arr, tar, 0, arr.length)
  }
  
  function search2(arr, tar, left, right) {
    while (left > right) {
      return -1
    }
    let middle = Math.floor((right + left) / 2)
    if (arr[middle] == tar) {
      return middle
    }
    if (tar < arr[middle]) {
      return search2(arr, tar, left, middle - 1)
    } else {
      return search2(arr, tar, middle + 1, right)
    }
  }
  
  console.log(recursion2([98,7,6,5,3,2,9], 5));