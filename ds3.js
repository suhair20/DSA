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

//     insert(word){
//         let curr=this.root
//        for(let val of word){
//         if(!curr.children[val]){
//             curr.children[val]=new Node()
//         }
//         curr=curr.children[val]
//        }
//        curr.isEnd=true
//     }

//     startPrfix(word){
//         let curr=this.root
//         for(let val of word){
//             if(!curr.children[val]){
//                return  console.log("not matching preix");
//             }
// //             curr=curr.children[val]
// //         }
// //         this.display(curr,word)
// //     }

// //     display(root,prefix=''){
// //         if(root.isEnd){
// //             console.log(prefix);
// //         }
// //         for(let val in  root.children){
// //             this.display(root.children[val],prefix+val)
// //         }
// //     }

// //     search(word){
// //         let curr=this.root
// //         for(let val of word ){
// //             if(curr.data==val){
// //                 return true
// //             }
             
// //         }

// //         if(curr.isEnd){
// //             return True
// //         }else{
// //             return false
// //         }
// //     }
   
// // }

// // const tr=new trie()
// // tr.insert('suhair')
// // tr.insert('hlooo')
// // tr.insert("Ali")
// // tr.startPrfix('Al')



// class NOde{
//     constructor(){
//         this.childre={}
//         this.isEnd=false

//     }
// }


// class trie{
//     constructor() {
//         this.root=new Node()
//     }


//     insert(word){
//         let curr=this.root
//     for(let val of word ){
//         if(!curr.childre[val]){
//             curr.childre[val]=new NOde()
//         }
//         curr=curr.childre[val]
//     }


//     curr.isEnd=true
        
//     }


//     serchValue(word){
//         let curr=this.root
//         for(let val of word){
//             if(!curr.childre[val]){
//                 console.log('word is not i here');
//             }
//             curr=curr.childre[val]
//         }
//         if(curr.isEnd){
//             return true
//         }else{
//             false
//         }
//     }

//     startWithPREFIX(word){
//         let curr=this.root
//    for(let val of word){
//     if(!curr.childre[val]){
//         console.log("not matching prefix");
//     }

//    }
//     }
// }


// class graph{
//     constructor(){
//         this.list={}
//     }

//    addvertex(vertex){
//     if(!this.list[vertex]){
//         this.list[vertex]=new Set()
//     }
    
//    }

//    addEdge(vertex,edge){
//     this.addvertex(vertex)
//     this.addvertex(edge)
//     this.list[vertex].add(edge)
//     this.list[edge].add(vertex)

//    }

//    remove(vertex,edge){
//     this.list[vertex].delete(edge)
//    }

//    removeVertex(vertex){
//     for(let val of this.list[vertex]){
//         this.remove(vertex,val)
//     }
//     delete this.list[vertex]
//    }

//    dfs(start){
//     let stack=[]
//     let visited={}
//     stack.push(start)
//     while(stack.length){
//         let vertex=stack.pop()
//         if(!visited[vertex]){
//             visited[vertex]=true
//             console.log(vertex);
//             let neardata=this.list[vertex]
//             for(let val of neardata){
//                 if(!visited[val]){
//                     stack.push(val)
//                 }
//             }
//         }
//     }
//    }



// Bfs(start){
//     let Que=[]
//     let visited={}
//     Que.push(start)
//     while(Que.length){
//         let vertex=Que.shift()
//         if(!visited[vertex]){
//          visited[vertex]=true
//          console.log(vertex);
//          let neardata=this.list[vertex]
//          for(let val of neardata ){
//             if(!visited[val]){
//                 Que.push(val)
//             }
//          }
//         }
//     }
// }

// display(){
//     for(let val in this.list){
//         console.log(val,"--->"+[...this.list[val]]);
//     }
// }
// }



// const gr=new graph()
// gr.addEdge(2,4)
// gr.addEdge(5,2)
// gr.addEdge(4,2)
// gr.Bfs(2)
// gr.display()
// class heap{
//     constructor(){
//         this.arr=[]

//     }

//     getParent(i){
//         return Math.floor(i-1/2)
//     }
// getLeft(i){
//     return i*2+1
// }

// getright(i){
//     return i*2+2
// }

// swap(i,j){
//     let temp=this.arr[i]
//     this.arr[i]=this.arr[j]
//     this.arr[j]=temp
// }


// insertdata(data){
//     this.arr[this.arr.length]=data
//     this.heapyfy()
// }

// heapyfy(){
//     let index= this.arr.length-1

// while(this.arr[index]>this.arr[this.getParent(index)]){
//     this.swap(index,this.getParent(index))
//     index=this.getParent(index)
// }


// }
// removeRoot(){
//     let root=this.arr[0]
//     let last=this.arr.pop()
//     if(this.arr.length>0){

//         this.arr[0]=last
//        this.heapydown(0,this.arr.length)
//     }
//     return  root 
// }

// heapydown(index,arrlength){
//   let largest=index
//   let left=this.getLeft(index)
//   let right=this.getright(index)
//   if(arrlength>left&&this.arr[left]>this.arr[largest]){
//     largest=left
//   }
//   if(arrlength>right&& this.arr[right]>this.arr[largest]){
//     largest=right
//   }
//   if(index!=largest){
//     this.swap(index,largest)
//     this.heapydown(largest,arrlength)
//   }
// }
// buildHeap(){
//     let arrlength=this.arr.length
//     for(let i=Math.floor(arrlength/2)-1;i>=0;i--){
//         this.heapydown(i,arrlength)
//     }
// }

// heapSORT(){
//     this.buildHeap()
//     for(let i=this.arr.length;i>=0;i--){
//         this.swap(i,0)
//         this.heapydown(i,0)
//     }
// }

// }

// const hp=new heap()
// hp.insertdata(5)
// hp.insertdata(8)
// hp.insertdata(9)
// hp.insertdata(6)
// hp.insertdata(45)
// hp.removeRoot()
// console.log(hp.arr);



class NOde{
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
        const newNode=new NOde(data)
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
                }
                curr=curr.left
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


    inOrde(root){
        if(root){
            this.inOrde(root.left)
            console.log(root.data);
            this.inOrde(root.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOredre(root){
    if(root){
        this.postOredre(root.left)
        this.postOredre(root.right)
        console.log(root.data);
    }
    }

    serch(val){
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
            this.min(root.left)
        }
    }

    max(root){
        if(!root.rigth){
            return root.data
        }else{
            this.max(root.rigth)
        }
    }


    lewise(){
        let Que=[]
        Que.push(this.root)
        while(Que.length){
            let curr=Que.shift()
            console.log(curr.data);
            if(curr.left){
                Que.push(curr.left)
            }

            if(curr.right   ){
                Que.push(curr.right)
            }
        }
    }

    validateBST(){
        const value=[]
        function inOrder(node){
            if(node=null){
                return 
            }

            inOrder(node.left)
            value.push(node.data)
            inOrder(node.right)

        }
        inOrder(this.root)
        for(i=0;i<value.length;i++){
            if(value[i]>value[i+1]){
                return false
            }else{
                return true
            }
        }
    }


    delet(value){
       this.root=this.deleHelper(this.root, value)
    }

    deleHelper(root,val){
        if(root==null){
            return root
        }

        if(root.data>val){
            root.left=this.deleHelper(root.left,val)
        }
        else if(root.data<val){
            root.right=this.deleHelper(root.rigth,val)
        }else{
            if(!root.right&&!root.left){
                return null
            }
            if(!root.left){
                return root.rigth
            }else if (!root.right){
                return root.left
            }
            root.data=this.min(root.right)
            root.right=this.deleHelper(root.right,root.data)
            
        }
        return root 
    }
}


const BB=new BST()
BB.insertdata(78)
BB.insertdata(89)
BB.insertdata(34)
BB.insertdata(24)
console.log(BB.serch(24));
// BB.inOrde(BB.root)
// BB.postOredre(BB.root)
BB.lewise()