var numberOfPoints = function(nums) {
    
    let result = []
 * @return {number}
 */
/**
 * @param {number[][]} nums

    for(let val of nums){
        for(let i = val[0]; i<=val[1]; i++){
            result.push(i)
        }
    }
    let set = new Set(result)
    return set.size
};
[
