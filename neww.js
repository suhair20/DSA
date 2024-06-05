function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[1,42,7,4,0,6]
console.log(quickSort(arr));


class node{
    constructor(data){
        this.data=data
        this.next=null
    }

    
}

class stack{
    constructor(){
        this.top=null
        this.size=0
    }

   push(data){
    const Newnode=new node(data)
   if(this.top==null){
     this.top=Newnode
   }else{
    Newnode.next=this.top
    this.top=Newnode
   }
   }  

   pop(){
    
   }

}