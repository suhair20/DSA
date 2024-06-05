class graph{
    constructor(){
        this.list={}
    }

    addVertex(vertex){
     if(!this.list[vertex]){
        this.list[vertex]=new Set()
    
    }

}
addEDGE(vertex,edge){
    this.addVertex(vertex)
    this.addVertex(edge)
    this.list[vertex].add(edge)
    this.list[edge].add(vertex)
}
remove(vertex,edge){
    this.list[vertex].delete(edge)

}

removeVertex(vertex){
    for(let val of this.list[vertex]){
        this.remove(vertex,val)
    }
    delete this.list[vertex]
}

dfs(start){
    let stack=[]
    let visited={}
    stack.push(start)
    while(stack.length){
        let vertex=stack.pop()
        if(!visited[vertex]){
            visited[vertex]=true
            console.log(vertex);
             let neardata=this.list[vertex]
             for(let val of neardata){
                if(!visited[val]){
                    stack.push(val)
                }
             }
        }
    }
}

bfs(start){
    let Que=[]
    let visited={}
    Que.push(start)
    while(Que.length){
        let vertex=Que.shift()
        if(!visited[vertex]){
            visited[vertex]=true
            console.log(vertex);
            let neardata=this.list[vertex]
            for(let val of neardata){
                if(!visited[val]){
                    Que.push(val)
                }
            }
        }
    }
}
display() {
    for (let val in this.list) {
        console.log(val + "--->" + [...this.list[val]]);
    }
}

}

const gr=new graph()
gr.addEDGE(1,2)
gr.addEDGE(1,6)
gr.addEDGE(2,7)
gr.addEDGE(11,67)
gr.dfs(1)
gr.display()

