var removeDuplicates = function (nums) {
    let count = 0;
    for (let item of nums) {
        if (item !== nums[count]) {
            count++;
            let temp = item;
            item = nums[count];
            nums[count] = temp;
        }
    }
    return (count + 1);
};