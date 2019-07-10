// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
    let reversed = "";

    for(let i = str.length-1; i >=0 ; i--){
        reversed += str[i];
        debugger;
    }
    return reversed === str;
}
function palindrome2(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length - i - 1];
    })
}

function palindrome(str){ 
    for(let i = Math.ceil(str.length)-1; i >=0 ; i--){
        if(str[i] != str[ str.length - i -1]){
            return false;
        }
    }
    return true;
}

module.exports = palindrome;
