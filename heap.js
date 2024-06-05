class Heap{
    constructor(){
        this.arr=[]
    }
    getParent(i){
        return  Math.floor(i-1/2)
    }

    getLeftChild(i){
        return  i*2+1
    }

    getrightChid(i){
        return i*2+2
    }

    swap(i,j){
        let temp=this.arr[i]
        this.arr[i]=this.arr[j]
        this.arr[j]=temp
    }
     insertData(data){
        this.arr[this.arr.length]=data
        this.heapfyUP()
     }

     heapfyUP(){
        let index=this.arr.length-1
        while(this.arr[index]>this.arr[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index=this.getParent(index)
        }
     }

     renmoveRoot(){
        let root=this.arr[0]
        let last=this.arr.pop()

        if(this.arr.length>0){
            this.arr[0]=last
            this.heapyfyDown(0,this.arr.length)
        }
        return root
     }

     heapyfyDown(index,arrlength){
        let largest=index
        let left=this.getLeftChild(index)
        let right=this.getrightChid(index)


        if(left<arrlength&&this.arr[left]>this.arr[largest]){
            largest=left
        }
        if(right<arrlength&&this.arr[right]>this.arr[largest]){
            largest=right
        }
        if(largest!=index){
            this.swap(index,largest)
            this.heapyfyDown(largest,arrlength)
        }
     }
}


class Heap{
    constructor(){
        this.arr=[]
    }

    getParent(i){
        return Math.floor(i-1/2)
    }
    getLeftChild(i){
        return i*2+1
    }

    getrightChid(i){
        return i*2+2
    }

    swap(i,j){
        let temp=this.arr[i]
        this.arr[i]=this.arr[j]
        this.arr[j]=temp 
    }

    insertData(data){
        this.arr[this.arr.length]=data
        this.heapfyUP()
    }

    heapfyUP(){
        let index=this.arr.length-1
        while(this.arr[index]>this.arr[this.getParent(index)]){
            this.swap(index,this.getParent(index))  
            index=this.getParent(index)
        }
    }

    renmoveRoot(){
        let root=this.arr[0]
        let last=this.arr.pop()

        if(this.arr.length>0){
            this.arr[0]=last
            heapyfyDown(0,this.arr.length)
        }
        return root
    }

    heapyfyDown(index,arrlength){
        let largest=index
        let left=this.getLeftChild(index)
        let right=this.getrightChid(index)
        if(left<arrlength&& this.arr[left]>this.arr[largest]){
            largest=left
        }
        if(right<arrlength&& this.arr[right]>this.arr[largest]){
            largest=right
        }

        if(index!=arrlength){
            this.swap(index,largest)
            this.heapyfyDown(largest,arrlength)
        }
    }

    heapBuild(){
        let arrlength=this.arr.length
        for(i=Math.floor(arrlength/2)-1;i>=0;i--){
            this.heapyfyDown(i,arrlength)
        }
    }

    heapSort(){
        this.heapBuild()
        for(i=this.arr.length;i>=0;i--){
            this.swap(i,0)
            this.heapyfyDown(i,0)
        }
    }

}

