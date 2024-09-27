const repeatString = function(string, num) {
    let hello = "";
if(num < 0){
    return 'ERROR'
}
else {
    for(let i = 0;num > i; num--){
    hello += string
    }
}

return hello
};
let random = Math.floor(Math.random() * 1000)
 repeatString("", 10)
// Do not edit below this line
module.exports = repeatString;
