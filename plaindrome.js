// function isPalindrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]!==str[str.length-1]){
//      return false
//     }
//      return isPalindrome(str.slice(1,-1))

// }//




// function isPalindrome(str){
//     if(str.length<=1){
//         return true 
//     }
//     if(str[0]!==str[str.length-1]){
//         return false
//     }

//     return isPalindrome(str.slice(1,-1))
// }
// console.log(isPalindrome('malayalam'));
// console.log(isPalindrome('suhair'));
// console.log(isPalindrome(''))

// function isPalindrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]!=str[str.length-1]){
//         return false
//     }
//     return isPalindrome(str.slice(1,-1))
// }
function Palindrom(str){
    if(str.length<=1){
        return true
    }
    if(str[0]!==str[str.length-1]){
      return  false
    }
        return Palindrom(str.slice(1,-1))
    
    }
    
   console.log( Palindrom('maam'))