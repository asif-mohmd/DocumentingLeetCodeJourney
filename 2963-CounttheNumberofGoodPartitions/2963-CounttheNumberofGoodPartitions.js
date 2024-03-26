    }
    
    let connected = 0;
    let currEnd = 0;
        
    for (let i = 0; i < numsShift.length; i++) {        
        currEnd = Math.max(currEnd, i + numsShift[i]);
        
        if (currEnd === i) connected++;
    }
        
    return subArrayNum(connected);
};

function subArrayNum(uniqueNum) {
    let result = 1;
    
    for (let i = 0; i < uniqueNum - 1; i++) {
        result = (result * 2) % (10**9 + 7);
    }
    
    return result;
}
[
