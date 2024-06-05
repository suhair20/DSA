class node{
    constructor(data){
        this.data=data
        this.next=null
    }

}

class list{
    constructor(){
        this.top=null
        this.size=0
    }

    push(data){
        const nodedata=new node(data)
        if(this.top==null){
            this.top=nodedata
        }else{
        nodedata.next=this.top
        this.top=nodedata
    }
    this.size++
    }

    pop(){
        this.top=this.top.next
    }
    peek(){
        return this.top.data
    }

    print(){
        let curr=this.top
        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}

const stack=new list()
stack.push(56)
stack.push(45)
// stack.pop()
stack.print()


///array stack /////

class stack{
  constructor(){
    this.item=[]
    
  }

  push(val){
    this.item.push(val)
  }

  pop(){
    return this.item.pop()
  }

  isEmpty(){
    return this.item.length===0
  }

  print(){
    console.log(this.item);
  }



}
function reverstring(str){
    const Stack=new stack()
 for(i=0;i<str.length;i++){
    Stack.push(str[i])
 }

 let string=''

 while(!Stack.isEmpty()){
   string+=Stack.pop()
 }

 return string

}

let str="suhair"

console.log(reverstring(str));



class Stack{
  construct(){
    this.item=[]
  }

  push(val){
    this.item.push(val)
  }

  pop(){
    return  this.item.pop()
  }

  isEmpty(){
    this.item.length===0
  }

  print(){
    console.log(this.item);
  }
}

const list=new Stack()

list.push(87)
list.push(45)
list.print()

let arr=[1,2,3,2,3,5,6]

function duplicate(arr){
  let map=new Map()
  
  for(i=0;i<arr.length;i++){
    if(map.get(arr[i])){
    map.set(arr[i],map.get(arr[i])+1)
   
    }else{
      map.set(arr[i],1)
    }
  }
 return map
}
console.log(duplicate(arr));


let arr=[1,2,2,2,45,3,2,2,2]
function arrr(){
 Map=new Map()
 let n=arr.length/2

for(i=0;i<arr.length;i++){
  if(Map.has(arr[i])){
   Map.set(arr[i],Map.get(arr[i])+1)
  }else{
    Map.set(arr[i],1)
  }
}

for(let [key,value] of Map){
  if(value>n){
    return key ;
  }
}
}

console.log(arrr(arr));





