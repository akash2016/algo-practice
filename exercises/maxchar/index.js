// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var obj = {};
    var max = "";
    for(char of str){
    obj[char] = obj[char]+1 || 1;
    max = (obj[max] || 0) <= obj[char] ? char : max;
    }
    return max;
}

module.exports = maxChar;
