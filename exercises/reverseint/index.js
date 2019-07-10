// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let isPositive = true;
    let reversed = '';

    if(n<0){
        isPositive = false;
        n = -n;
    }

    n = n+''.split('');
    for(let i = n.length-1; i >=0; i--){
        reversed+=n[i];
    }

    if(isPositive)
        return parseInt(reversed);
    else
        return parseInt("-"+reversed);      
}

module.exports = reverseInt;
