const removeFromArray = function(theArray, ...removeNr) {
   const finalArray = theArray.filter((value) => !removeNr.includes(value))

   return finalArray
};
//the values that need to be removed
const removeValues = ["1", 3];

removeFromArray([1,2,3], removeValues);

// Do not edit below this line
module.exports = removeFromArray;
