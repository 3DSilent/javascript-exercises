const sumAll = function(a,b) {
    let sum = 0;
    if (a < 0 || b < 0) { return "ERROR"};
    // if (Math.floor(a) !== a || Math.floor(b) !== b ) {return "ERROR"};
    if (!Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR"};
    if (b - a > 0 ) {
        for (;a <= b; a++){sum += a};
    } else { 
        for (;b <= a; b++){sum += b};
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
