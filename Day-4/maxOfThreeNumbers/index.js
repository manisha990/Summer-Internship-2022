function maxOfThree(x, y, z) 
 {
  maxNumber = 0;
  (x > y) ? maxNumber = x : maxNumber = y;
  (z > maxNumber) ? maxNumber = z : maxNumber;
  return maxNumber;
}

console.log(maxOfThree(1,0,1));
console.log(maxOfThree(0,-10,-20));
console.log(maxOfThree(100,500,400));