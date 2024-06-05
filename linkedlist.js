// // class node {
// //     constructor(data){
// //         this.data =data
// //         this.next= null
// //     }
// // }
// // class linkedlist{
// //     constructor(){
// //         this.head=null
// //         this.tail=null
// //     }
// //     insertData(data){
// //        const nodeData =new node(data)
// //        if(this.head==null){
// //         this.head=nodeData
// //         this.tail=nodeData
// //        }else{
// //         nodeData.next=this.head
// //         this.head=nodeData
// //        }
// //     }
// //     search(val){
// //         let curr = this.head
// //         while(curr){
// //           if(curr.data == val){
// //             console.log(curr.data == val);
// //             return true
// //           }
// //           curr = curr.next
// //         }
// //          console.log(false);
// //         return false
// //       }
// //       print(){
// //         let curr = this.head
// //         while(curr){
// //           console.log(curr.data);
// //           curr = curr.next
// //         }
// //       }
// //     }
// // const list= new linkedlist()
// // list.insertData(1)
// // list.insertData(2)
// // list.insertData(3)
// // list.insertData(4)
// // list.search(22)

// // list.print()
// // list.search(44)
// // list.search(2 )



// class node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }


// class linkedlist{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }

// /////////////////////////adding first//////////////////////////////
//   prepend(data){
//   const newnode= new node (data)
//   if(this.head==null){
//     this.head=newnode
//     this.tail=newnode
//   }else{
//     newnode.next=this.head
//     this.head=newnode
//   }
//   }
// //////////////////////adding last////////////////////////
//   append(data){
//     const newnode=new node(data)
//     if(this.head==null){
//       this.head=newnode
//       this.tail=newnode

//     }else{
//      let prev=this.head
//       while(prev.next){
//         prev=prev.next
//       }
//       prev.next=newnode
//     }


//   }
// /////////////////////delet first////////////////////////
//   deletfirst(){
//     if(this.head==null){
//       console.log('nothing to delete');
//       return
//     }
//     if(this.head.next==null){
//       this.head=null
//     }
//     this.head=this.head.next
//   }
// /////////////////////delete last//////////////////
//   deletlast(){
//     let curr=this.head
//     while(curr.next.next){
//       curr=curr.next
//     }
//     curr.next=null
//   }
//   ////////////////////////delete value /////////////////
 
//   deletval(val){
//    if(this.head.data==val){
//    this.head=this.head.next
//   }
//   let curr=this.head
//   while(curr.next&&curr.next.data!=val){
//     curr=curr.next
//   }
//   const removenode=curr.next
//   curr.next=removenode.next
//   }
 

// /////////////print all the value////////////////////////////
//   print(){
//    let curr=this.head
//    while(curr){
//     console.log(curr.data);
//     curr=curr.next
//    }
//   }
// /////////////////search val/////////////////////////////////////
//   search(val){
//   let curr=this.head
//    while(curr){
//     if(curr.data==val){
//       console.log(curr.data==val);
//       return true
//     }
//     curr=curr.next
//    }
//     console.log(false);
//     return false
//   }
// ////////////////////////find middel man///////////////

// middeleman(){
//   if(this.head==null){
//     console.log(emptyy);
//     return
//   }

//   let one=this.head
//   let two=this.head

//   if(two&&two.next!==null){
//     one=one.next
//     two=two.next.next
//   }
//   console.log(one.data,"middelman");
// }

// }
//   const list =new linkedlist()
//   list.append(45)
//   list.prepend(9)
//   list.prepend(55)
//   list.print()
//   list.deletval(9)
//   list.print()

////////////DOUBELE LINKED////////////////


// class node{
//   constructor(data){
//     this.data=data
//     this.next=null
//     this.prev=null
//   }
// }
// class linkedlist{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }
// insertdata(data){
//   const newnode=new node(data)
//   if(this.head==null){
//     this.head=newnode
//     this.tail=newnode
//   }else{
//   newnode.next=this.head
//   this.head.prev=newnode
//   this.head=newnode
//   }
// }

// deletfirst(){
//   this.head=this.head.next
//   this.head.prev=null
// }

// deletlst(){
//   this.tail=this.tail.prev
//   this.head.next=null
// }

// deletval(val){
//   let curr=this.head
//   while(curr){
//   if(curr.data==val){
//     curr.prev.next=curr.next
//     curr.next.prev=curr.prev
//   }
//   }
// }

// print(){
//   let curr=this.head
//   while(curr){
//     console.log(curr.data);
//     curr=curr.next
//   }
// }
// putafter(x,data){
//   const newnode=new node(data)
//   let curr= this.head
//   while(curr){
//     if(curr.data==x){
//       let store=curr.next
//       curr.next=newnode
//       newnode.next=store
//       break
//     }
//     curr=curr.next
//   }
// }
// putBefore(x,data){
//   let curr = this.head
//   const nodeData = new node(data)
//   while(curr){
//     if(curr.data == x){
//       let store = curr.prev
//       curr.prev = nodeData
//       nodeData.next = curr
//       store.next = nodeData
//       break
//     }
//     curr = curr.next
//   }
// }

// printreverse(){
//   let curr=this.tail
//   while(curr){
//     console.log(curr.data);
//     curr=curr.prev
//   }
// }

// deleteValSingle(val){
//   let curr = this.head
//   let prev = null
//   while(curr && curr.data!==val){
//     prev =curr
//     curr = curr.next
//   }

//   prev.next = curr.next
// }

// }

// const list=new linkedlist()

// list.insertdata(34)
// list.insertdata(56)
// list.insertdata(45)
// list.putafter(34,1)
// list.putBefore(56,2)
// // list.deleteValSingle(34)
// // list.print()
// // // list.printreverse()


// class node{
//   constructor(data){
//     this.data=data
//     this.next=null  
//     this.prev=null
//   }
// }


// class Linkedlist{

// constructor(){
//   this.head=null
//   this.tail=null

// }
// insertdata(data){
//   const newnode= new node(data)
//   if(this.head==null){
//     this.head=newnode
//     this.tail=newnode

//   }else{
//     newnode.next=this.head
//     this.head.prev=newnode
//     this.head=newnode
//   }
// }

// middeleman(){
// if(this.head==null){
//   console.log('this lined list are empty')
// }else{
//   let one =this.head
//   let two=this.head
//   while(two&&two.next){
//     one=one.next
//     two=two.next.next
//   } 
//   console.log(one.data,"MIddel man");

// }
// }

// print(){
//   let curr=this.head
//   while(curr){
//     console.log(curr.data)
//     curr=curr.next
//   }


// }

// insertafter(x,data){
//   const newnode=new node(data)
//   let curr=this.head
//   while(curr){
//     if(curr.data==x){
//       let store=curr.next
//       curr.next=newnode
//       newnode.next=store
     
//     }
//     curr=curr.next
//   }
// }

// putbefore(x,data){
//   const newnode=new node(data)
//   let curr=this.head
//   while(curr){
// if(curr.data==x){
//    let store=curr.prev
//    curr.prev=newnode
//    newnode.next=curr
//    store.next=newnode
//    newnode.prev=store
// }
// curr=curr.next



//   }


// }
// printreverse(){
//   let curr=this.tail
//   while(curr){
//     console.log(curr.data);
//     curr=curr.prev
//   }
// }

// dletval(val){
//  let curr=this.head
//   while(curr){
//     if(curr.data==val){
//   curr.prev.next=curr.next
//   curr.next.prev=curr.prev
//     }
//     curr=curr.next
//   }


  
// }
// delet(val){
//   let curr=this.head
//   let prev=null
//   while(curr&&curr.data!==val){
//     prev=curr
//     curr=curr.next
//   }
//   curr=curr.next
// }




// }
// const list=new Linkedlist()
// list.insertdata(34)
// list.insertdata(78)
// list.insertdata(7)
// list.insertdata(65)
// list.insertdata(85)
// list.middeleman()
// list.putbefore(7,100)
// list.insertafter(78,4)
// list.dletval(7)
// list.print()



// class node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }

// class Linkedlist{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }

//   insertdata(data){
//     const newnode=new node(data)
//     if(this.head==null){
//       this.head=newnode
//       this.tail=newnode
//     }else{
//       newnode.next=this.head
//       this.head=newnode
//     }


//   }

//   print(){
//     let curr=this.head
//     while(curr){
//       console.log(curr.data);
//       curr=curr.next
//     }
//   }
// }
// const list=new Linkedlist()
// list.insertdata

// function search(arr, t1, t2) {
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] == t1 && arr[i + 1] == t2) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(search([1, 2, 3, 4, 5], 3, 2));


// function search(arr, t1, t2) {
//     let foundT1 = false;
//     let foundT2 = false;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === t1) {
//             foundT1 = true;
//         }
//         if (arr[i] === t2) {
//             foundT2 = true;
//         }
//     }

//     return foundT1 && foundT2;
// }

// console.log(search([1, 2, 3, 4, 5], 3, 2)); 



// class node{
//     constructor(data){
//         this.data=data
//         this.next=data
//     }
// }


// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
// insertdata(data){
//    const newnode=new node(data)
//     if(this.head==null){
//         this.head=newnode
//         this.tail=newnode
//     }else{
//         newnode.next=this.head
//         this.head=newnode
//     }
// }
// prepend(data){
//     const newnode=new node(data)
//     if(this.head==null){
//         this.head=newnode
//         this.tail=newnode
//     }else{
//         let prev =this.head
//         while(prev.next){
//             prev=prev.next
//         }
//         prev.next=newnode
        
// } 
// }



// print(){
//     let prev=this.head
//     while(prev){
//         console.log(prev.data);
//         prev=prev.next
//     }
// }


// }


// const list=new linkedlist()
// list.insertdata(34)
// list.insertdata(67)
// list.prepend(78)
// list.print()

//  function bineryserch(arr,t){
//   arr.sort((a,b)=>a-b)
// }


class node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}


class linkedlist{

    constructor() {
        this.head=null
        this.tail=null
    }


    inseertdata(data){
   const newNode=new node(data)
   if(this.head==null){
    this.head=newNode
    this.tail=newNode

   } else{
    newNode.next=this.head
    this.head.prev=newNode
    this.head=newNode
   } 

    }

    prepend(data){
        const newNode=new node(data)
        if(this.head==null){
         this.head=newNode
         this.tail=newNode
     
        } else{
        let curr=this.head
        while(curr.next){
            curr=curr.next
        }
        curr.next=newNode
    }
}

midelman(){
    if(this.haed==null){
        console.log("thismn empty man ");
    }

    let one=this.head 
    let two=this.head
    while(two&&two.next){
        one=one.next
        two=two.next.next
    }
    console.log(one.data,"middel man");
}
deleteVal(val){
    let curr = this.head
    while(curr){
      if(curr.data == val){
        curr.prev.next = curr.next
        curr.next.prev = curr.prev
      }
      curr = curr.next
    }
  }

serach(val){
  let curr=this.head
  while(curr){
    if(curr.data==val){
        console.log(curr.data);
    }
    curr=curr.next
  }
}



print(){
  let curr=this.head
  while(curr){
    console.log(curr.data);
    curr=curr.next
  }

}




}


const list =new linkedlist()
list.inseertdata(76)
list.inseertdata(87)
list.inseertdata(98)
list.inseertdata(7)
list.deleteVal(7)
// list.deletval(76)
list.print()