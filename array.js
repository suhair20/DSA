class node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class linkedlisst{
    constructor(){
        this.head=null
        this.tail=null
    }



insert(data){
    const newNOde =new node(data)
    if(this.head==null){
        this.head=newNOde
        this.tail=newNOde
    }else{
        newNOde.next=this.head
        this.head.prev=newNOde
        this.head=newNOde
}

}



 insertdata(x,data){
   const newNOde=new node(data)
     let curr=this.head
     while(curr){
        if(curr.data==x){
            let store=curr.next
            curr.next=newNOde
            newNOde.prev=curr
            newNOde.next=store
        }
        curr=curr.next
     }
    }
 }
 const list =new linkedlisst()
 list.insert(76)
 list.insert

