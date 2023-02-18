const leapYears = function(currentYear) {

    if(currentYear % 4 == 0 && currentYear % 100 !== 0){
        return true;
    } else if(currentYear % 400 == 0){
        return true;
    } else{
        return false;
    }
};
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
