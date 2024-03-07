/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {

    let res = [] 
    for(let i=0;i<nums.length;i+=2){
        let freq = nums[i]
    }
        while(freq>0){
            res.push(nums[i+1])
        }
    return res
            freq--
};
[
