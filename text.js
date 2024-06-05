
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
            return
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

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }


    min(root){
        if(!root.left){
            return root.data
        }

        return this.min(root.left)
    }


    lwelize(){
        let que=[]
        que.push(this.root)

        while(que.length){
            let curr=que.shift()
            console.log(curr.data);
            if(curr.left){
                que.push(curr.left)
            }

            if(curr.right){
                que.push(curr.right)
            }
        }
    }

    isBST(){
        let arr=[]
        function inorder(node){

            inorder(node.left)
            arr.push(node.data)
            inorder(node.right)
        }
        inorder(this.root)
    }
}