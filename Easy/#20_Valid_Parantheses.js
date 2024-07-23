var isValid = function (s) {
  let stack = [];
  const openParas = "([{";
  const closeParas = ")]}";
  const matchParas = { ")": "(", "]": "[", "}": "{" };
  if (s.length < 2) return false;
  if (!openParas.includes(s[0])) return false;
  for (let i in s) {
    if (openParas.includes(s[i])) stack.push(s[i]);
    if (closeParas.includes(s[i])) {
      if (matchParas[s[i]] == stack[stack.length - 1]) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
};
