        if(nums[i]!=count){
        }else{
            let num1 = nums[range].toString()
            let num2 = nums[i-1].toString()
            range = i
            count = nums[i]+1
            if(num1 === num2){
                arr.push(num1)
            }else{
                let val = num1+"->"+num2
            }   
                arr.push(val)
            
            count++
        }

        
    }
    return arr

    for(let i=0;i<=nums.length;i++){
    let range = 0
    let count = nums[0]
    let arr = []
[
