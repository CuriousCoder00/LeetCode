var isPalindrome = function (x) {
  let temp = x,
    newX = 0;
  if (x < 0) return false;
  while (temp !== 0) {
    const rem = temp % 10;
    temp = Math.floor(temp / 10);
    newX = newX * 10 + rem;
  }
  if (newX === x) return true;
  return false;
};
