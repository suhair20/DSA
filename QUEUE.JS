// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class list {
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
 
//     enque(data){
//         const nodedata=new node(data)
//         if(this.head==null){
//             this.head=nodedata
//             this.tail=nodedata
//         }else{
//             this.tail.next=nodedata
//             this.tail=nodedata
//         }
//         this.size++
 


//     }

//     dque(){
//         if (this.head === null) {
//             console.log("Queue is empty");
//             return;
//         }
//         this.head = this.head.next;
//         this.size--;
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSIZE(){
//         return this.size
//     }

//     print(){
//        let  cur=this.head
//         while(cur){
//             console.log(cur.data);
//             cur=cur.next
//         }
//     }

//     peek(){
//         return this.head.data
//     }


// }

// const que=new list()

// que.enque(90)
// que.enque(5)
// que.enque(56)
// console.log("Queue size:", que.getSIZE());
// console.log("Is queue empty?", que.isEmpty());
// console.log(que.peek());
// que.print()


//////////Objectque///////////////


// class queobj{
//     constructor(){
//         this.items={}
//         this.back=0
//         this.front=0
//     }

//     enque(val){
//         this.items[this.back]=val
//         this.back++
//     }

//     deque(){
//         delete this.items[this.front]
//         this.front++
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// const obj=new queobj()
// obj.enque(77)
// obj.enque(90)
// obj.deque()
// obj.print()

////////////////arrray qeue/////

// class array{
//     constructor(){
//         this.items=[]
//     }

//     enque(val){
//         this.items.push(val)
//     }

//     deque(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     print(){
//         console.log(this.items);
//     }


// }

// const ar=new array()
//  ar.enque(90)
// ar.enque(98)
// console.log("is it Emty",ar.isEmpty());
// ar.print()





