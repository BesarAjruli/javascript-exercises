const reverseString = function(revString) {
const splitedString = revString.split("")

const reversed = splitedString.reverse()

const finalRev = reversed.join("")

return finalRev
};

reverseString("123! abc! Hello, Odinite.")

// Do not edit below this line
module.exports = reverseString;
