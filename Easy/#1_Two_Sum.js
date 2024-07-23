var twoSum = function (nums, target) {
  let set = {};
  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (set[rem] !== undefined) return [set[rem], i];
    set[nums[i]] = i;
  }
};
