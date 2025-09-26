const removeFromArray = function(arr,val) {
    val = Array.from(arguments);
    val.shift();
    for (let numb of val) {
        while (arr.indexOf(numb) !== -1) {
            arr.map(item =>{
            if (item === numb) {arr.splice(arr.indexOf(item),1)} ;
            })
        }
    } 
    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;
