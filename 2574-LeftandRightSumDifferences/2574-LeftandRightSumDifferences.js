
    for(let i=0;i<nums.length-1;i++){
    }
        leftSum.push(nums[i]+leftSum[i])
     for(let i=nums.length-1;i>0;i--){
        rightSum.unshift(nums[i]+rightSum[0])
    }

    for(let i=0;i<nums.length;i++){

    }
    let res = []
        res[i] = Math.abs(leftSum[i] - rightSum[i])
    let rightSum = [0]

    let leftSum = [0]
 * @return {number[]}
 */
var leftRightDifference = function(nums) {

return res
    
};
[
