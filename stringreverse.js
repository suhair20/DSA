// const name="suhair"
// console.log(name.length);
// let suhi=""
// for (let i=name.length-1;i>=0;i--){
//    suhi+=name[i]
// }
// console.log(suhi);

r/////everse in recursion//////
function reverse(strReverse) {
    if (strReverse.length <= 1) {
      return strReverse
    } else {
      return reverse(strReverse.slice(1)) + strReverse[0]
    }
  }
  let strReverse = 'suhair'
  console.log(reverse(strReverse));