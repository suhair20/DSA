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

    insert(data){
        const newNode= new Node(data)
        if(!this.root){
            this.root=newNode
           return
           }
         let curr=this.root
         while (curr) {
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

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data);
    }
}

  search(val){
    let curr=this.root
    while(curr){
        if(curr.data==val){
            return true
        }else if(curr.data>val){
            curr=curr.left
        }else{
            curr=curr.right
        }
    }
    return false
  }
  min(root){
    if(!root.left){
      return root.data
    }else{
      return  this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
        return root.data
    }
    return this.max(root.right)
  }
  leWISE(){
    const Que=[]
    Que.push(this.root)
    while(Que.length){
        let curr=Que.shift()
        console.log(curr.data);
        if(curr.left){
            Que.push(curr.left)
        }
        if(curr.right){
            Que.push(curr.right)
        }
    }
  }


  validateBst(){
    const value=[]
    function inOrder(node){
        if(node==null){
            return
        }

        inOrder(node.left)
        value.push(node.data)
        inOrder(node.right)
    }
    inOrder(this.root)
    for(let i=0;i<value.length;i++){
        if(value[i]<=value[i-1]){
            return false
        }
    }
    return true
  }
  


  delet(val){
    this.root=this.delHelper(this.root,val)
  }

  delHelper(root,val){
    if(root==null){
        return root
    }
    if(root.data>val){
        root.left=this.delHelper(root.left,val)
    }else if(root.data<val){
       root.right=this.delHelper(root.right,val)
    }else{
        if(!root.right&&!root.left){
            return null
        }
        if(!root.left){
            return root.right
        }else if (!root.right){
          return root.left
        }
        root.data=this.min(root.right)
        root.right=this.delHelper(root.right,root.data)
    }
    return root
  }
}






const Tree=new BST()

Tree.insert(23)
Tree.insert(56)
Tree.insert(45)
Tree.insert(67)
Tree.insert(90)
Tree.insert(9)
console.log(Tree.search(23));
// console.log(Tree.search(9));
// Tree.inOrder(Tree.root)
// Tree.preOrder(Tree.root)
Tree.leWISE()
console.log(Tree.validateBst());
    



