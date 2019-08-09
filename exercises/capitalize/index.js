// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const chars = str.split('');
    chars[0] = chars[0].toUpperCase();
    for(let i = 0; i < chars.length; i++){
        if(chars[i] === ' '){
            chars[i+1] = chars[i+1].toUpperCase();
        }
    }
    return chars.join('');
}

module.exports = capitalize;
