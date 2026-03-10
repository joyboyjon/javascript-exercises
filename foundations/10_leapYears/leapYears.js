const leapYears = function(year) {
    const divByFour=year%4===0;
    const isCentury= year%100===0;
    const divBy400 = year%400===0;

    if(divByFour && (!isCentury || divBy400)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
