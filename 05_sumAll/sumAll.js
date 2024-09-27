const sumAll = function(min, max) {
    let totalSum = 0;
    if(!(min < 0) && Number.isInteger(min) && typeof max === "number"){
          if(max>min){
        for(let i = min; max >= i; i++){
            totalSum += i;
        }
    }
    else{
        for(let x = max; min >= x; x++){
            totalSum += x;
        }
    }
    return totalSum
}
else{
    return "ERROR"
}
};

    
    
    sumAll(10, [90,1])
// Do not edit below this line
module.exports = sumAll;
