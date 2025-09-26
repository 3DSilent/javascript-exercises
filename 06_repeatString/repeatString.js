const repeatString = function(str,num) {
    let repeatStr = str;
    for (;num > 1;num--) {
        repeatStr += str;
    }
    if (num ===0) {repeatStr = ""};
    if (num < 0) {repeatStr = "ERROR"};
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
