function minMax(arr){
  let res = [];
  res.push(Math.min(...arr))
  res.push(Math.max(...arr))
  return res; 
}

console.log(minMax([1,2,3,4,5])) //> [1,5]
console.log(minMax([2334454,5])) //> [5,2334454]
console.log(minMax([1])) //> [1,1]
console.log(minMax([5])) //> [5,5]