function difference_number(n) {
    if (n <= 13) {
      return (13 - n);
      }
    else
      {
       return (n - 13) * 2;
      }
  }

console.log(difference_number(12));
console.log(difference_number(13));
console.log(difference_number(19));