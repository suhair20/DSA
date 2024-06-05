// class hashtabel{
//     constructor(size){
//         this.items=Array(size)
//         this.size=size
//     }

//     hash(key){
//         let hashedKey=key.toString()
//         let hashedvalue=0
//         for(let i=0;i<hashedKey.length;i++){
//           hashedvalue+=hashedKey.charCodeAt(i)
//         }
//         return hashedvalue%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         this.items[index]=val
//     }

//     get(key){
//         const index=this.hash(key)
//         return this.items[index]
//     }
// }

// const hash=new hashtabel(50)

// let arr=[1,2,3,4,4,5,3]
function fere(arr){
for(i=0;i<arr.length;i++){
    if(!hash.get(arr[i])){
        hash.set(arr[i],true)
   
//     }else{
//         hash.set(arr[i],hash.get(arr[i])+1)
// //     }
// // }
// // return hash;
// // }
// // // console.log(fere(arr));

// class hashtabel{
//     constructor(size){
//       this.tabel=Array(size)
//       this.size=size  
//     }

//     hash(key){
//         let hashedKey=key.toString()
//         let total=0
//         for(let i=0;i<hashedKey.length;i++){
//             total+=hashedKey.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         this.tabel[index]=val
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.tabel[index]
//     }
//         print(){
//         for(let i=0;i<this.tabel.length;i++){
//             if(this.tabel[i]){
//                 console.log(i,this.tabel[i]);
//             }
//         }
//     }


   
// }

// const hash=new hashtabel(50)
// hash.set('name','suhair')
// hash.set('mane','moidheen')
// hash.print()

// console.log(hash.get('name'));


// class hashtabel{
//     constructor(size){
//         this.tabel=Array(size)
//         this.size=size
//     }

//     hash(key){
//         let hashedkey=key.toString()
//         let total=0
//         for(let i=0;i<hashedkey.length;i++){
//             total+=hashedkey.charCodeAt(i)

//         }
//         return total%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         const Buket=this.tabel[index]
//          if(!Buket){
//             this.tabel[index]=[[key,val]]
//          }else{
//             let same=Buket.find(items=>items[0]===key)
//             if(same){
//                 same[1]=val
//             }else{
//                 Buket.push([key,val])
//             }
//          }
//     }

//     get(key){
//         let index=this.hash(key)
//         let Buket=this.tabel[index]
//         if(!Buket){
//             return undefined
//         }else{
//            let item= Buket.find(items=>items[0]===key) 
//            return item?item[1]:undefined
//         } 
//     }
//     print(){
//         for(let i=0;i<this.tabel.length;i++){
//             if(this.tabel[i]){
//                 console.log(i,this.tabel[i]);
//             }
//         }
//     }



// }


// const has=new hashtabel(50)
// has.set('mena','suhair')
// has.set('name','moidheen')
// has.set('mane','john')
// has.get('mane')
// console.log(has.get('mane'));
// has.print()


// class HAShtabel{
//     constructor(size){
//         this.tabel=Array(size)
//         this.size=size
//     }
  
//     hash(key){
//         let hashedKey=key.toString()
//         let total=0
//         for(let i=0;i<hashedKey.length;i++){
//             total+=hashedKey.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,val){
//         let index=this.hash(key)
//         let Buket=this.tabel[index]
//         if(!Buket){
//             this.tabel[index]=[[key,val]]
//         }else{
//             let same=Buket.find(items=>items[0]===key)
//             if(same){
//                 same[1]=val
//             }else{
//                 Buket.push([key,val])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let Buket=this.tabel[index]
//         if(!Buket){
//             return undefined
//         }else{
//             let item= Buket.find(items=>items[0]===key)
//             return item?item[1]:undefined
//         }
//     }
//     remove(key){
//         let index=this.hash(key)
//         let Buket=this.tabel[index]
//         if(!Buket){
//             return undefined
//         }else{
//             let remove= Buket.findIndex(items=>items[0]===key)
//          if(remove){
//             Buket.splice(remove,1)
//             return true
//          }else{
//             return false
//          }
//         }
//     }

//     print(){
//         for(let i=0;i<this.tabel.length;i++){
//             if(this.tabel[i]){
//                 console.log(i,this.tabel[i]);
//             }
//         }

//     }

// }


// const has= new HAShtabel(50)
// has.set('name','suhair')
// has.set('mane','moidheen')
// has.print()
// has.remove('mane')
// has.print()
// console.log(has.get('mane'));


// class hashtabel{
//     constructor(size){
//     this.table=Array(size)
//     this.size=size
// }

// hash(key){
//     let hashedKey=key.toString()
//     let total=0
//  for(let i=0;i<hashedKey.length;i++){
//     total+=hashedKey.charCodeAt(i)
//  }
//  return total%this.size
// }

// set(key,val){
//     let index=this.hash(key)
//     let buket=this.table[index]
//     if(!buket){
//         this.table[index]=[[key,val]]
//     }else{
//    let item=buket.find(items=>items[0]==key)
//    if(item){
//     item[1]=val
//    }else{
//     buket.push([key,val])
//    }
//     }
// }

// get(key){
//     let index=this.hash(key)
//     return this.table[index]
// }

// remove(key){
//     let index=this.hash(key )
//     this.table[index]=undefined
// }
// display(){
//     for(let i=0;i<this.table.length;i++){
//         if(this.table[i] !== undefined){
//             console.log(i,this.table[i]);
//         }
//     }
// }


// }

// const hash=new hashtabel(50)
// hash.set('name','suhair')
// hash.set('hii','suhir')

// hash.display()
// console.log(hash.get('name'));

let arr=[11,11,33,22,33,44,22]

function sort (arr){
    let map=new Map
    let ind=0
    for(i=0;i<arr.length;i++){
        if(!map.get(arr[i])){
            map.set(arr[i],true)
          arr[ind]=arr[i]
          ind++
        }
    }
    arr.length=ind
    return arr
    
}
console.log(sort(arr));


class Hashtabel{
    constructor(size){
        this.tabel=Array(size)
        this.size=size
    }

    hashed(key){
     let hashedKey=key.toString()
     let hashedvalue=0
     for(i=0;i<hashedKey.length;i++){
        hashedvalue+=hashedKey.charCodeAt(i)
     }
     return hashedvalue%this.size

    }

    set(key,val){
        let index=this.hashed(key)
       let bucket=this.tabel[index]
       if(!bucket){
           this.tabel[index]=[[key,val]]
       }else{
        let same=bucket.find(items=>items[0]==key)

        if(same){
            same[1]=val
        }else{
            bucket.push[[key,val]]
        }
       }
    }
    get(key){
        let index=this.hashed(key)
        return this.tabel[index]
    }

    print(){
        for(i=0;i<this.tabel.length;i++){
            if(this.tabel[i]){
                console.log(i,this.tabel[i]);
            }
        }
    }
}





