class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let curr=this.root
        for(let val of word){
            if(!curr.children[val]){
                curr.children[val]=new Node()
            }
            curr=curr.children[val]
        }
        curr.isEnd=true 

    }

    StartPrefix(word){
        let curr=this.root
      for(let val of word){
        if(!curr.children[val]){
            return 'no matching prefix '
        }
        curr=curr.children[val]
      }

      this.display(curr,word)
    }

    display(root,prefix=''){
        if(root.isEnd){
            console.log(prefix);
        }

        for(let val in root.children){
            this.display(root.children[val],prefix+val)
        }
    }

    search(word){
        let curr= this.root
        for(let val of word){
            if(!curr.children[val]){
                return false
            }
            curr=curr.children[val]
        }

        if(curr.isEnd){
            return true
        }else{
            false
        }
    }
}
const tt= new trie()
tt.insert('apple')
tt.insert('banan')
tt.insert('app')
console.log(tt.search('apple'));
tt.StartPrefix('a')

class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let curr=this.root
        for(let val of word){
            if(!curr.children[val]){
                curr.children[val]=new Node()
            }

            curr=curr.children[val]
        }
        curr.isEnd=true
    }


    StartPrefix(word){
        let curr=this.root
        for(let val of word){
            if(!curr.children[val]){
                console.log("its not prefix");
            }
            curr=curr.children[val]
        }
        this.display(curr,word)
    }

    display(root,prefix=''){
        if(root.isEnd){
            console.log(prefix);
        }

        for(let val of  root.children){
            this.display(root.children[val],prefix+val)
        }
    }
}




