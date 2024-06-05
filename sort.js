////////////BUBBLE SORT ///////////

function BUBBLEsort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }

    }while(swapped)

    
}


// let array = [5, 3, 8, 1, 4];

// BUBBLEsort(array);
// console.log(array);


/////insertion sort //////////

// function insertionSORT(arr){
//     for(let i=1;i<arr.length;i++){
//         let insert=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>insert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=insert
//     }
// }
// let array = [5, 3, 8, 1, 4];

// insertionSORT(array);
// console.log(array);//


/////////quick sort///////

// function Quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]

//   for(i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//     right.push(arr[i])
//     }
//   }
  
//   return[...Quicksort(left),pivot,...Quicksort(right)]
// }

// let arr=[6,3,2,1,7,0]
// console.log(Quicksort(arr));

////merge sort//////

function mergesort(arr){
    if(arr.length<2){
        return arr
    }
const mid= Math.floor(arr.length/2)
const left=arr.slice(0,mid)
const right=arr.slice(mid)
return merge(mergesort(left),mergesort(right))

}


function merge(left,right){
  const sortedarr=[]
  while(left.length&&right.length){
    if(left[0]<=right[0]){
        sortedarr.push(left.shift())
    }else{
        sortedarr.push(right.shift())
    }
  }
  return[...sortedarr,...left,...right]
}
 let arr=[6,3,2,1,7,0]
console.log(mergesort(arr));

////selection SORT /////

// function SORT(arr){
//   for(let i=0;i<arr.length;i++){
//     let min=i
//     for(let j=i+1;j<arr.length;j++ ){
//       if(arr[j]<arr[min]){
//         min=j
//       }
//     }
//     let temp=arr[min]
//     arr[min]=arr[i]
//     arr[i]=temp
//   }
//   return arr
// }

// let arr=[7,1,23,5,1,7]

// console.log(SORT(arr));