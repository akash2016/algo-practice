// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //r 1 eturn str.split('').reverse().join('');
    // 2 let reversed = "";
    // for(let character of str){
    //     console.log(character);
    //     reversed = character + reversed;
        
    // }
    // return reversed;
    return str.split('').reduce((rev, char) => char+rev , "");
}

module.exports = reverse;
