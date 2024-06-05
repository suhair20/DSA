/////ARRAY////////////////////


// const array=[1,2,3,'suhair']
// array.push(3)

// for(const item of array){
//     console.log(item)
// }


// ////OBJECT////////
// const OBJ={
//   name:"suahir",
//   age:50
// }
// console.log(OBJ);
// console.log(OBJ.name);
// ///////reversing the string ////////
// const name="suhair"
// console.log(name.length);
// let suhi=""
// for (let i=name.length-1;i>=0;i--){
//    suhi+=name[i]
// }
// console.log(suhi);

// ///////////set////////////

// const set= new Set([1,2,3])
// set.add(4)/////add to set/////
// set.add(4)/////if add duplicate one  its not add in set ///////
// console.log(set.has(4)); //////cheking//// 
// set.delete(3)/////deleting///////
// console.log(set.size)/////length of the set/////
// for( const item of set){
//     console.log(item);
// }



// ///////map///////////////
// const map= new Map([['a',1],['b',2 ]])



// linked list 

// ////find dupicate from  an array witj O(n)///////
// function findDuplicates(array) {
//   const frequencyMap = {};
//   const duplicates = [];

//   for (const num of array) {
//       if (!frequencyMap[num]) {
//           duplicates.push(num);
//           frequencyMap[num] = true;
//       }
//   }

//   return duplicates;
// }

// const array = [2, 4, 6, 8, 4, 9, 2, 6, 5];
// const duplicates = findDuplicates(array);
// console.log("Duplicates:", duplicates); // Output: [4, 2, 6]

///find second largest and smallest in the array /////////////////////


// function findlargest(array){
//   let max = -Infinity;
//   let secondmax = -Infinity;
//   let min = Infinity;
//   let secondmin = Infinity;

//   for(i=0;i<array.length;i++){
//     if(array[i]>max){
//       secondmax=max
//       max=array[i]
      
//     }else if(array[i]>secondmax&&array[i]!==max){
//       secondmax=array[i]
//     }

//     if(array[i]<min){
//       secondmin=min
//       min=array[i]
//     }else if(array[i]<secondmin&&array[i]!==min){
//        secondmin=array[i]
//     }
     
//   }
//     return{
//       secondmin,
//       secondmax
//     }
//   }



// const array=[1,2,3,4,5,6,7]
// console.log(findlargest(array));


function search(arr,t1,t2){
  let foundT1=false
  let foundT2=false
  for(i=0;i<arr.length;i++){
    if(arr[i]==t1){
      foundT1=true
    }
    if(arr[i]==t2){
      foundT2=true
    }
  }
  return foundT1&&foundT2

}
console.log(search([1,2,3,4,5,6,],2,9));






