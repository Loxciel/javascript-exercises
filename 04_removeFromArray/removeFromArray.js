const removeFromArray = function(arr, ...val) {
  let a = [];
//take all arguments of ...val and output to a
  for (const args of val) {
    a.push(args);
  } 
//pass each value of new array and remove from arr

for (let i = 0; i < a.length; i++){
if (arr.indexOf(a[i])) {
    let index = arr.indexOf(a[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  } 
} 
  return arr;
};




// Do not edit below this line
module.exports = removeFromArray;
