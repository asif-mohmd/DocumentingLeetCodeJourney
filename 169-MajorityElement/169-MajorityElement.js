/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let l = nums.length/2

    for(let i=0;i<nums.length;i++){
   nums = nums.sort()
    
    }
    let count = 0
        count++
        if(count>=l){
            return nums[i]
        }
        if(nums[i+1]!=nums[i]){
             count = 0
        }
    
};
[
