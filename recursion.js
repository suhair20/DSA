// function reversesttirng(str){
//   if(str.length<=1){
//     return str
//   }else{
//     return reversesttirng(str.slice(1))+str[0]
//   }
// }


// console.log(reversesttirng(str));

// function palindrome(str){
//     if(str.length<=1){
//        return true
//     }
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//         return palindrome(str.slice(1,-1))
  
// }

// let str='malayalam'
// console.log(palindrome(str));

// let sum=0


// function suum(arr){
// if(arr.length==0){
//     return sum
// }else{
//     sum+=arr[0]
//     return suum(arr.slice(1))
// }

// }

// console.log(suum([5,3]));

// function summ(n){
//     if(n==0){
//         return 0
//     }else{
//         return n+summ(n-1)
//     }
// }
// console.log(summ(5));

// function bineary(arr,t){
//     let left=0
//     let right=arr.length-1

//     while(left<=right){
//         let midelindex=Math.floor(right+left/2)
//      if(arr[midelindex]==t){
//         return midelindex
//      }
//  if(arr[midelindex]<=t){}
//     right=midelindex-1
//     }
//     left=midelindex+1
// }
// console.log(bineary([1,2,3,4,5,6,],3));

// let string = "Hallo Word";
// let words = [];
// let word = "";
// let newString = "";

// for(let i = 0; i < string.length; i++){
//     if(string[i] == " "){
//         words[words.length] = word;
//         word = "";
//     } else {
//         word += string[i];
//     }
// }


// if(word){
//     words[words.length] = word;
// }

// for(let i = words.length - 1; i >= 0; i--){
//     newString += words[i] + ' ';
// }
// if(newString.length > 0){
//     newString = newString.substring(0, newString.length - 1);
// }

// console.log('result ', newString);

// function stringRes(str){
//     if(str.length<=1){
//         return str
//     }else{
//         return stringRes(str.slice(1))+str[0]
//     }
// }

// let str='suhairr'
// console.log(stringRes(str));


// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }
//    if(str[0]!==str[str.length-1]){
//     return false
//    }else{
//     return palindrome(str.slice(1,-1))
//    }

// }

// console.log(palindrome('malayalam'));




// function stringreve(str){
//     if(str.length<=1){
//         return str
//     }else{
//         return stringreve(str.slice(1))+str[0]
//     }
// }
// console.log(stringreve('suhair'));//

// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }

//     if(str[0]!==str[str.length-1]){
//         return false
//     }else{
//         return palindrome(str.slice(1,-1))
//     }
// }
// console.log(palindrome('suhair'));

// let sum=0
// function summ(num){
//     if(num<=0){
//         return sum
//     }else{
//         sum+=num
//         return summ(num-1)
//     }
// }

// console.log(summ(5));


// function summm(arr){
//     if(arr.length<=0){
//         return 0
//     }else{
//         return arr[0]+summm(arr.slice(1))
//     }
// }

// console.log(summm([1,2,3]));


// function serach(arr,t){
//     let left=0
//     let rigth=arr.length-1
// while(left<rigth){

//    let middel=Math.floor(left+rigth/2)
   
//    if(arr[middel]==t){
//     return middel
//    }
//    if(t<arr[middel]){
//     rigth=middel-1
//    }else{
//     left=middel+1
//    }
// }
// return -1

// }

// console.log(serach([1,2,3,4],4));

// function binery(arr,t){
//   return serach(arr,t,0,arr.length)
// }
// function serach(arr,t,left,right){
//   while(left<right){
//   let middel =Math.floor((left+right)/2)
//   if(arr[middel]==t){
//     return middel
//   }
//   if(t<arr[middel]){
//     return serach(arr,t,left,middel-1)
//   }else{
//     return serach(arr,t,middel+1,right)
//   }
// }
// return -1
// }

// console.log(binery([1,2,3,4,5],3));


// class node{
//     constructor(data){
//    this.data=data
//    this.next=null
//    this.prev=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     append(data){

//         const newNode=new node(data)
//         if(this.head==null){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             newNode.next=this.head
//             this.head.prev=newNode
//             this.head=newNode
//         }
//     }

//     deletfirst(){
//         if(this.head==null){
//             console.log("empty");
//         }
//         if(this.head.next==null){
//             this.head=null
//         }
//         this.head=this.head.next
//     }

//     deletlast(){
//        let curr=this.head
//       while(curr.next.next){
//        curr=curr.next
//         }
//       curr.next=null
//     }

//     search(data){
//      let curr=this.head
//      while(curr){
//         if(curr.data==data){
//             console.log(curr.data);
//         }
//         curr=curr.next
//      }
//     }
    
//  findmiddel(){
//     if(this.head==null){
//         console.log(empty);
//     }

//     let one=this.head
//     let two=this.head
//     while(two&&two.next){
//         one=one.next
//         two=two.next.next
//     }
//     console.log(one.data,"MIDDEL");
//  }

    

//     print(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.next
//         }
//     }

//     putafter(x,data){
//         const newNode=new node(data)
//         let current=this.head
//         while(current){
//             if(current.data==x){
//                 let store=current.next
//                  current.next=newNode
//                  newNode.next=store

//             }
//             current=current.next
//         }
//     }

//     putbefore(x,data){
//    const newnode=new node(data)
//     let curr=this.head
//     while(curr){
//         if(curr.data==x){
//             let store=curr.prev
//             curr.prev=newnode
//             newnode.next=curr
//             store.next=newnode
//             newnode.prev=store

           
//         }
//             curr=curr.next
        
//     } 
//     }
// }
// const list =new linkedlist()
// list.append(56)
// list.append(67)
// list.append(56)
// list.append(8)
// list.putafter(56,88)
// list.putbefore(56,11)

// list.print()
// // console.log('fisrttt');
// // list.deletfirst()
// // list.print()
// // console.log('lasttttttt');
// // list.deletlast()
// // list.print()
// // list.search(56)
// list.findmiddel()
  


// function strng(str){
//     if(str.length<=1){
//         return str
//     }
//     return strng(str.slice( 1))+str[0]
// }

// let name="suhair"
// console.log(strng(name));

// function palindrome(str){
//     if(str.length<=1){
//         return true 
//     }
//     if(str[0]!==str[str.length-1]){
//         return false 
//     }else{
//         return true
//     }
// }

// console.log(palindrome("malam"));

//  let sum=0
// function summ(arr){
//     if(arr<=0){
//         return sum
//     }else{
//     sum+=arr
//     return summ(arr-1)
//     }
// }
// console.log(summ(5));


// function summ(arr){
//     if(arr.length<=0){
//         return 0
//     }else{
//         return arr[0]+summ(arr.slice(1))
//     }
// }

// console.log(summ([1,2,3,4,5]));

function bineray(arr,t){
    return serach(arr,t,0,arr.length-1)
}

function serach(arr,t,left,right){
    while(left>right){
        return -1
    }
 let middel=Math.floor((left+right)/2)

  if(t==arr[middel]){
    return middel
  }

  if(t<arr[middel]){
    return serach(arr,t,left,middel-1)
  }else{
    return serach(arr,t,middel+1,right)
  }

}
console.log(bineray([1,2,3,4,5,6],4));

function bineay(arr,t){
    
}