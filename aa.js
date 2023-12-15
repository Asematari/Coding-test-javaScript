
function twoSum(nums, target) {
    const complementMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complementMap.has(complement)) {
            return [complementMap.get(complement), i];
        }
        complementMap.set(nums[i], i);
    }
    return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); [0, 1]