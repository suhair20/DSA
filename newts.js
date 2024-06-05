class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }



}

class BST{
    constructor(){
        this.root=null
    }


    insertdata(data){
        const newNode=new Node(data)
        if(!this.root){
            this.root=newNode
        }

        let curr=this.root
        while(curr){
            if(curr.data>data){
                if(curr.left==null){
                    curr.left=newNode
                    break
                }else{
                    curr=curr.left
                }
            }else{
                if(curr.right==null){
                    curr.right=newNode
                    break
                }else{
                    curr=curr.right
                }
            }
        }
    }


    findLargest(){
        if(this.root==null){
            return null
        }

     let curr=this.root
     while(curr){

        if(curr.rigth){
        return curr.data
            
     }


    }
}