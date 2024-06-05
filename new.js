// function mergSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//  let midPoint=Math.floor(arr.length/2)
//  let left=arr.slice(0,midPoint)
//  let right=arr.slice(midPoint)
//  return merge(mergSort(left),mergSort(right))

// }

// function merge(left,right){
//     let sortedarr=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortedarr.push(left.shift())
//         }else{
//             sortedarr.push(right.shift())

//         }
//     }
//     return [...sortedarr,...left,...right]
// }
let arr=[-2,4,0,-1,3]

// let arr1=[3,2,3]
// let arr2=[2,2,1,1,1,2,2]

function arrss(arr){
    let count=0
    let n=arr.length/2
    const map=new Map()

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
          map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for (let [key, value] of map) {
        if (value > n) {
            return key;
        }
    }
  
// }
// console.log(arrss(arr1));



// function bubbelSrt(arr){
//     let swapped
//     do{
//         swapped=false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }
  
// bubbelSrt(arr)
// console.log(arr);

// function insertionSORT(arr){
//     for(i=0;i<arr.length;i++){
//         let insert=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>insert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=insert
//     }
// }

function selectionSORT(arr){
    for(i=0;i<arr.length;i++){
        let min=arr[i]
    }
}


insertionSORT(arr)
console.log(arr);

