const sumAll = function(number1, number2) {
    let sum = 0;
    if(number1 <0 || number2 < 0 || typeof number1 !== 'number' || typeof number2 !== 'number'){
        return "ERROR";
    }else if(number1 > number2){
        for(i = number2; i<= number1; i++){
        sum = sum + i;
    }
    return sum;
    }
    else{
        for(i = number1; i <= number2; i++){
            sum = sum + i;
        }
    return sum;
}
};
// Do not edit below this line
module.exports = sumAll;
