// function mergeSORT(arr){

//     if(arr.length<2){
//         return arr 
//     }

//     const mid=Math.floor(arr.length/2)
//     const left=arr.slice(0,mid)
//     const right=arr.slice(mid)
// return merge(mergeSORT(left),mergeSORT(right))
// }

// function merge(left,right){
//     const sortedarr=[]
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sortedarr.push(left.shift())
//         }else{
//             sortedarr.push(right.shift())
//         }

//     }

//     return [...sortedarr,...left,...right]
// }

// const arr=[9,12,1,3,42,]
// console.log(mergeSORT(arr));

////quick sort////
// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let right=[]
//     let left=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quicksort(left),pivot,...quicksort(right)]
// }
// const arr=[1,2,36,4,0,45,3,]
// console.log(quicksort(arr));

// function bubblesort(arr){
//   let swapped
//   do{
//     swapped=false
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
//   }while(swapped)
// }

// let arr=[8,2,4,1,5]
// bubblesort(arr)
// console.log(arr);


// function insertionSort(arr){
//     for(let i=1;i<=arr.length-1;i++){
//         let insert=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>insert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=insert
//     }
// } 

// console.log(insertionSort(arr));


// function qickSORT(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let paivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<paivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...qickSORT(left),paivot,...qickSORT(right)]
// }

// console.log(qickSORT(arr));

// function mergeSORT(ARR){
//     if(ARR.length<2){
//         return ARR
//     }
//   let mid=Math.floor(ARR.length/2)
//   let left=ARR.slice(0,mid)
//   let right=ARR.slice(mid)
//   return merge(mergeSORT(left),mergeSORT(right))

// }

// function merge(left,right){
//     let sortedarr=[]
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sortedarr.push(left.shift())
//         }else{
//             sortedarr.push(right.shift())
//         }
//     }
//     return [...sortedarr,...left,...right]
// }

// console.log(mergeSORT(arr));


// function bubbleSort(arr){
//     let swapped 
//     do{
//         swapped=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                let  temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }

//     }while(swapped)
// }

// let arr=[78,4,54,3,1,77,]

// bubbleSort(arr)
// console.log(arr);

// function insertSort(arr){
//     for(i=1;i<arr.length;i++){
//      let insertion=arr[i]
//      let j=i-1
//      while(j>=0&& arr[j]>insertion){
//      arr[j+1]=arr[j]
//       j--
//      }
//      arr[j+1]=insertion
//     }
    
// }
// insertSort(arr)
// console.log(arr);

// function quicksort(arr) {
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//    let  left=[]
//     let right=[]
//  for(let i=0;i<arr.length-1;i++){
//     if(arr[i]>pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
//  }
//  return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort(arr));

// function mergSORT(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergSORT(left),mergSORT(right))

// }

// function merge(left,right){
//     let sortarr=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortarr.push(left.shift())
//         }else{
//             sortarr.push(right.shift())
//         }
//     }
//     return [...sortarr,...left,...right]


// }

// console.log(mergSORT(arr));

// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }


// }

// class linkque{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     enque(data){
//         const newnode= new node(data)
//         if(this.head==null){
//             this.head=newnode
//             this.tail=newnode

//         }else{
//             this.head.next
//         }
//     }
// }

////bubbel sort///

// function bubbel(arr){
//     let swapped
//     do{
//         swapped=false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }
// let arr=[23,54,12,1]
// bubbel(arr)
// console.log(arr);

// function insertSort(arr){
//     for(i=1;i<arr.length;i++){
//         let insertion=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>insertion){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=insertion
//     }
// }

let arr=[5,43,1,3]
// insertSort(arr)
// console.log(arr);

//quick sort////


// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//   let pivot=arr[arr.length-1]
//   let right=[]
//   let left=[]
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
//   }

//   return[...quickSort(left),pivot,...quickSort(right)]

// }

// console.log(quickSort(arr));

// function mergeSORT(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSORT(left),mergeSORT(right))
// }

// function merge(left,right){
//     let sortedarr=[]
//     while(left.length&&right.length){
//     if(left[0]<right[0]){
//         sortedarr.push(left.shift())
//     }else{
//         sortedarr.push(right.shift())
//     }
// }
// return[...sortedarr,...left,...right]
// }
// console.log(mergeSORT(arr));


////stack////

// class stack{
//     constructor(){
//         this.item=[]
//     }
//     push(a){
//         this.item.push(a)
//     }

//     pop(){
//        return this.item.pop()
//     }
//     isEmpty(){
//        return this.item.length==0
//     }

//     peek(){
//     return this.item[this.item.length-1]
//     }
//     print(){
//         console.log(this.item);
//     }
// }
// // const list=new stack()
// // list.push(87)
// // list.push(56)
// // list.push(87)
// // list.print()
// // console.log(list.peek());
// // console.log(list.isEmpty());

// function  String(str){ 
//     let Stack=new stack()
//     for(i=0;i<str.length;i++){
//         Stack.push(str[i])
//     }

//     let soted=''

//     while(!Stack.isEmpty()){
//         soted+=Stack.pop()
//     }
//     return soted
// }

// let str='shair'
// console.log(String(str));

///

// class node{
//     constructor(data){
//     this.data=data
//     this.size
//     }
// }


// class stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }

// //     push(a){
// //         const newnode=new node(a)
// //         if(this.top==null){
// //             this.top=newnode
// //         }else{
// //             newnode.next=this.top
// //             this.top=newnode
// //         }
// //         this.size++
// //     }
// //     pop(){
// //        this.top=this.top.next
// //        this.size--
      

// //     }
// //     peek(){
// //         return this.top.data
// //     }

// //     print(){
// //         let curr=this.top
// //         while(curr){
// //             console.log(curr.data);
// //             curr=curr.next
// //         }
// //     }
// // }


// // function bubbeSORT(arr){
// //   let swapped
// //   do{
// //     swapped=false
// //    for(i=0;i<arr.length;i++){
// //     if(arr[i]>arr[i+1]){
// //         let temp=arr[i]
// //         arr[i]=arr[i+1]
// //         arr[i+1]=temp
// //          swapped=true
// //     }
// //    }
// // }while(swapped)

// // return arr
// // }




// // function insertion(arr){
// // for(i=1;i<arr.length;i++){
// //     let ins=arr[i]
// //     let j=i-1
// //   while(j>=0&&ins<arr[j]){
// //     arr[j+1]=arr[j]
// //     j--
// //   }
// //   arr[j+1]=ins
// // }
// // return arr
// // }




// // function selectionSRT(arr){
// //    for(i=0;i<arr.length;i++){
// // let smalest=i
// // for(j=i+1;j<arr.length;j++){
// //     if(arr[smalest]>arr[j]){
// //         let temp=arr[smalest]
// //         arr[smalest]=arr[i]
// //         arr[i]=temp
// //     }
// // }
// //    } 
// //    return arr
// // }


// // function quickSort(arr){

// //     if(arr.length<2){
// //       return arr
// //     }
// //     let pivot=arr[arr.length-1]
// //     let right=[]
// //     let left=[]
// //     for(i=0;i<arr.length-1;i++){
// //         if(arr[i]>pivot){
// //             right.push(arr[i])
// //         }else{
// //             left.push(arr[i])
// //         }
// //     }

// //     return[...quickSort(left),pivot,...quickSort(right)]

// // }



// // function MergeSort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let mid=Math.floor(arr.length/2)
// //     let left=arr.slice(0,mid)
// //     let right=arr.slice(mid)
// //     return Merge(MergeSort(left),MergeSort(right))
// // }

// // function Merge(left,right){
// //     let sortedArr=[]
// //     if(left.length&&right.length){
// //     while(left[0]>right[0]){
// //         sortedArr.push(right.shift())
// //     }
// //     sortedArr.push(left.shift())
// // }
// // return[...sortedArr,...left,...right]
// // }
// //   let ar3=[8,4,6,2]

// //   console.log(MergeSort(ar3));






// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }

// class Bst{
//     constructor(){
//         this.root=null
//     }

//     insert(data){
//         const newNode=new node(data)
//         if(!this.root){
//             this.root=newNode
//             return
//         }
//         let curr=this.root
//         while(curr){
//             if(curr.data>data){
//                 if(curr.left==null){
//                     curr.left=newNode
//                     break
//                 }else{
//                     curr=curr.left
//                 }
//             }else{
//                 if(curr.right==null){
//                     curr.right=newNode
//                     break
//                 }else{
//                     curr=curr.right
//                 }
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//     }
//  postOrder(root){
//     if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.data);
//     }
//  }
//  preOrder(root){
//     if(root){
//         console.log(root.data);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
//  }

//  search(data){
//     let curr=this.root
//     while(curr){
//     if(curr.data==data){
//         return true
//     }else if(curr.data>data){
//         curr=curr.left
//     }else{
//         curr=curr.right
//     }
//  }
//  return false
// }


// min(root){
//     if(!root.left){
//         return root.data
//     }else{
//         this.min(root.left)
//     }
// }

// max(root){
//     if(!root.right){
//         return root.data
//     }else{
//         this.max(root.right)
//     }
// }

// levelWise(){
//     let Que=[]
//     Que.push(this.root)
//     while(Que.length){
//         let curr=Que.shift()
//         console.log(curr.data);
//         if(curr.left){
//             Que.push(curr.left)

//         }
//         if(curr.right){
//            Que.push(curr.right)
//         }
//     }
// }

// delete(val){
//     this.root=this.deletHElper(this.root,val)
// }

// deletHElper(root,val){
//     if(root==null){
//         return root
//     }
//     if(root.data>val){
//         root.left=this.deletHElper(root.left,val)
//     }else if(root.data<val){
//         root.right=this.deletHElper(root.right,val)
//     }else{
//         if(!root.right&&!root.left){
//             return null
//         }
//         if(!root.left){
//             return root.right
//         }else if(!root.right){
//             return root.left
//         }
//             root.data=this.min(root.right)
//             root.right=this.deletHElper(root.right,root.data)
        
//     }
//     return root
// }


// }

// const Tree=new Bst()
// Tree.insert(78)
// Tree.insert(15)
// Tree.insert(65)
// Tree.insert(45)

// console.log(Tree.search(45));

// Tree.levelWise()
// Tree.delete(65)
// Tree.levelWise()

// class graph{
//     constructor(){
//         this.list={}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     AddEdge(vertex,edge){
//         this.addVertex(vertex)
//         this.addVertex(edge)
//         this.list[vertex].add(edge)
//         this.list[edge].add(vertex)
//     }
//     remove(vertex,edge){
//         this.list[vertex].remove(edge)
//     }

//     removeVertex(vertex){
//         for(let val of this.list[vertex]){
//             this.remove(vertex,edge)
//         }
//         delete this.list[vertex]
//     }

//     dbs(start){
//         let stack=[]
//         let visited={}
//         stack.push(start)
//     while(stack.length){
//         let vertex=stack.pop()
//         if(!visited[vertex]){
//             visited[vertex]=true
//             console.log(vertex);


//             let neardat=this.list[vertex]

//             for(let val of neardat){
//                 if(!visited[val]){
//                     stack.push(val)
//                 }
//             }
//         }
//     }
//     }

//     dispaly(){
//         for(let val of  this.list){
//             console.log(val+"--->"+[...this.list[val]]);
//         }
//     }
// }


// class Node{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }


// class trie{
//     constructor(){
//         this.root=new Node()
//     }
//  insert(word){
//     let curr=this.root
//     for(let val of word){
//         if(!curr.children[val]){
//             curr.children[val]=new Node()
//         }
//         curr=curr.children[val]
//     }
//     curr.isEnd=true
//  }

//  startPrefix(word){
//     let curr=this.root

//     for(let val of word){
//         if(!curr.children[val]){
//             console.log("your wrong prefix");
//         }
//         curr=curr.children[val]
//     }
//     dispaly(curr,word)
//  }

//  dispaly(root,prefix=''){
//     if(root.isEnd){
//         console.log(prefix);
//     }
//     for(let val in root.children){
//         this.dispaly(root.children[val],prefix+val)
//     }
//  }

//  search(word){
//     let curr=this.root
//     for(let val of word){
//         if(!curr.children[val]){
//           return true
//         }
//         curr=curr.children[val]
//     }

//     if(curr.isEnd){
//         return true
//     }else{
//         return false
//     }

//  }

// }
// class heap{
//     constructor(){
//         this.arr=[]
//     }

//     getParent(i){
//         return Math.floor(i-1/2)
//     }

//     getleftChild(i){
//         return i*2+1
//     }

//     getrightChild(i){
//         return i*2+2
//     }

//      swap(i,j){
//         let temp=this.arr[i]
//         this.arr[i]=this.arr[j]
//         this.arr[j]=temp
//      }

//      insertData(data){
//         this.arr[this.arr.length]=data
//        this.heapyfyup()
//      }

//      heapyfyup(){
//         let index=this.arr.length-1
//         while(this.arr[index]>this.arr[this.getParent(index)]){
//             this.swap(index,this.getParent(index))
//             index=this.getParent(index)
//         }
//      }

//      removeroot(){
//         let root=this.arr[0]
//         let last=this.arr.pop()

//         if(arr.length>0){
//             this.arr[0]=last
//             heapyfydown(0,arr.length)
//         }
//         return root
//      }

//      heapyfydown(index,arrlength){
//         let largest=index
//         let left=this.getleftChild(index)
//         let right=this.getrightChild(index)

//         if(left<arrlength&&this.arr[left]>this.arr[largest]){
//             largest=left
//         }
//         if(right<arrlength&&this.arr[right]>this.arr[largest]){
//             largest=right
//         }

//         if(largest!=index){
//             this.swap(index,largest)
//             this.heapyfydown(largest,arrlength)
//         }
//      }
// }


// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }

// }

// class Bst{
//     constructor(){
//         this.root=null
//     }

//     insertdata(data){
//         const newdata=new node(data)
//         let curr=this.root

//         if(!this.root){
//             this.root=newdata
//             return
//         }

//         while(curr){
//             if(curr.data>data){
//                 if(curr.left==null){
//                     curr.left=newdata
//                     break
//                 }
//                 curr=curr.left
//             }else{
//                 if(curr.right==null){
//                     curr.right=newdata
//                     break
//                 }
//                 curr=curr.right
//             }
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//     }

//     search(val){
//         curr=this.root
//         while(curr){
//             if(curr.data==val){
//                 return true
//             }else if(curr.data>val){
//               curr=curr.left
//             }else{
//                 curr=curr.right
//             }
//         }
//         return false
//     }

//     min(root){
//         if(!root.left){
//             return root.data
//         }
//         return this.min(root.left)
//     }

//     max(root){
//         if(!root.right){
//             return root.data
//         }
//         return this.max(root.right)
//     }

//     lewise(){
//         let Que=[]
//         stack.push(this.root)
//         while(Que.length){
//             let curr=Que.shift()
//             console.log(curr.data);
//             if(curr.left){
//                 Que.push(curr.left)
//             }
//             if(curr.right){
//                 Que.push(curr.right)
//             }
//         }
//     }


//     delet(val){
//         this.root=this.deletHElper(this.root,val)
//     }

// //     deletHElper(root,val){
// //         if(root==null){
// //             return root
// //         }
// //         if(root.data>val){
// //             root.left=this.deletHElper(root.left,val)
// //         }else if(root.data<val){
// //             root.right=this.deletHElper(root.right,val)
// //         }else{
// //             if(!root.right&&!root.left){
// //                 return null
// //             }
// //             if(!root.left){
// //                 return root.left
// //             }else if(!root.right){
// //                 return root.right
// //             }

// //             root.data=this.min(root.right)
// //             root.right=this.deletHElper(root.right,root.data)
// //         }
// //         return root
// //     }

// // }


// class Node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }

//     insert(data){
//         const newNode=new Node(data)
//         let curr=this.root
//         while(curr){
//             if(curr.data>val){
//                 if(curr.left==null){
//                     curr.left=newNode
//                     break
//                 }
//                 curr=curr.left
//             }else{
//                if(curr.right==null){
//                   curr.right=null
//                   break
//                }
//                curr=curr.right
//             }
//         }
//     }

//      search(val){
//         let curr=this.root
//         while(curr){
//             if(curr.data==val){
//                 return true
//             }else if(curr.data>val){
//                 curr=curr.left
//             }else{
//                 curr=curr.right
//             }
//         }
//         return false
//      }

//      inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//      }

//      preOrder(root){
//         if(root){
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//      }
//      postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//      }

//      min(root){
//         if(!root.left){
//             return root.data
//         }
//         return this.min(root.left)
//      }

//      max(root){
//         if(!root.right){
//             return root.data
//         }
//         return this.max(root.left)
//      }

//      levelWise(){
//         let Que=[]
//         Que.push(this.root)
//         while(Que.length){
//             let curr=Que.shift()
//             console.log(curr.data);
//             if(curr.left){
//                 Que.push(curr.left)
//             }
//             if(curr.right){
//                 Que.push(curr.right)
//             }
//         }
//      }


//      delete(val){
//         this.root=this.deletHelper(this.root,val)
//      }

//      deletHelper(root,val){
//         if(root==null){
//             return root
//         }

//         if(root.data>val){
//             root.left=this.deletHelper(root.left,val)
//         }else if(root.data<val){
//             root.right=this.deletHelper(root.right,val)
//         }else{
//             if(!root.right&&!root.left){
//                 return null
//             }
//              if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.data=this.min(root.right)
//             root.right=this.deletHelper(root.right,root.data)
//         }
//         return root
//      }
// }

// class graph{
//     constructor(){
//         this.list={}
//     }

//     addertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }

//     addedge(vertex,edge){
//         this.addertex(vertex)
//         this.addertex(edge)
//         this.list[vertex].add(edge)
//         this.list[edge].add(vertex)
//     }

//     delet(vertex,edge){
//         this.list[vertex].remove(edge)
//     }

//     removeVertex(vertex){
//         for(let val of this.list[vertex]){
//             remove(vertex,edge)
//         }
//         delete this.list[vertex]
//     }

//     BFS(start){
//         let Que=[]
//         let visited={}
//      Que.push(start)
//      while(Que.length){
//         let curr=Que.shift()
//         if(!visited[curr]){
//             visited[curr]=true
//             console.log(curr);

//             let neardat=this.list[curr]

//             for(let val of neardat){
//                 if(!visited[val]){
//                     Que.push(val)
//                 }
//             }
//         }
//      }
//     }

// }

class heap{
    constructor(){
        this.arr=[]
    }

    getParent(i){
        return Math.floor(i-1/2)
    }

    getLeftchild(i){
        return i*2+1
    }

    getRightChild(i){
        return i*2+2
    }
    swap(i,j){
        let temp =this.arr[i]
        this.arr[i]=this.arr[j]
        this.arr[j]=temp
    }

    insertData(data){
        this.arr[this.arr.length]=data
        this.heapyfyup()
    }

    heapyfyup(){
        let index=this.arr.length-1
        while(this.arr[index]>this.arr[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index=this.getParent(index)
        }
    }

    removeRoot(){
        let root=this.arr[0]
        let last=this.arr.pop()
        if(this.arr.length>0){
            this.arr[0]=last
            this.heapyfydown(0,this.arr.length)
        }
        return root
    }
    heapyfydown(index,arrlength){
    let largest=index
   let left=this.getLeftchild(index)
   let right=this.getRightChild(index)

   if(left<arrlength&&this.arr[left]>this.arr[largest]){
    largest=left
   }

   if(right<arrlength&&this.arr[right]>this.arr[largest]){
    largest=right
   }

   if(index!=largest){
    this.swap(index,largest)
    this.heapyfydown(largest,arrlength)
   }

    }


    Buildheap(){
        let arrlength=this.arr.length
        for(let i=Math.floor(arrlength/2)-1;i>=0;i--){
            this.heapyfydown(i,arrlength)
        }
    }

    heapSort(){
        this.Buildheap()
        for(let i=this.arr.length-1;i>=0;i--){
            this.swap(0,i)
            this.heapyfydown(0,i)
        }
    }
}

const Heap=new heap()
Heap.insertData(100)
Heap.insertData(23)
Heap.insertData(90)
Heap.insertData(111)


Heap.heapSort()
Heap.removeRoot()


console.log(Heap.arr);




class graph{
    constructor(){
        this.list={}

    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }

    addEdge(edge,vertex){
        this.addVertex(vertex)
        this.addVertex(edge)
        this.list[vertex].add(edge)
        this.list[edge].add(vertex)
    }

    removeVertex(vertex,edge){
      this.list[vertex].delete(edge)
    }

    remove(vertex){
        for(let val of this.list[vertex]){
            this.removeVertex(vertex,val)
        }

        delete this.list[vertex]
    }

    dfs(start){
        let stack=[]
        let visited={}
        stack.push(start)
        while(stack.length){
            let vertex=stack.pop()
            if(!visited[vertex]){
                console.log(vertex);
            }
            let neardata=this.list[vertex]
            for(let val of neardata){
                if(!visited[val]){
                    stack.push(val)
                }
            }
        }
    }
}
