// Time Complexity : O(n)
// Space Complexity : O(n)
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
        // Check if the difference betweend duplicates is less than k
        if (i - hasmap.get(nums[i]) <= k) {
    for (let i = 0; i < nums.length; i++) {
            return true;
        }
        hasmap.set(nums[i], i);
    }
    return false;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
[
