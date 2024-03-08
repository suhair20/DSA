/////ARRAY////////////////////


const array=[1,2,3,'suhair']
array.push(3)

for(const item of array){
    console.log(item)
}


////OBJECT////////
const OBJ={
  name:"suahir",
  age:50
}
console.log(OBJ);
console.log(OBJ.name);
///////reversing the string ////////
const name="suhair"
console.log(name.length);
let suhi=""
for (let i=name.length-1;i>=0;i--){
   suhi+=name[i]
}
console.log(suhi);

///////////set////////////

const set= new Set([1,2,3])
set.add(4)/////add to set/////
set.add(4)/////if add duplicate one 
console.log(set.has(4));
set.delete(3)
console.log(set.size)
for( const item of set){
    console.log(item);
}


