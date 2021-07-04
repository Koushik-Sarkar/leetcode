// Google

/*****
*
*
* Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*
* Follow-up: Could you solve the problem in linear time and in O(1) space?
*
* Example 1:
* Input : [10, 10, 20, 30, 10, 10]
* Output : 10
* 10 occurs 4 times which is more than 6/3.

******/

function majorityElement(nums: number[]): number[] {
    const LENGTH = nums.length;
    if(LENGTH === 1) {
        return nums;
    }
    if(LENGTH === 2) {
        return nums[0] === nums[1] ? [nums[0]] : nums;
    }

    let count1 = 0;
    let count2 = 0;
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let returnValue = [];
    
    for(let i = 0; i < LENGTH; i++) {
        if(first === nums[i]) {
            count1++;
        } else if(second === nums[i]) {
            count2++;
        } else if(count1 === 0) {
            first = nums[i];
            count1++;
        }else if(count2 === 0) {
            second = nums[i];
            count2++;
        }
        
        else {
            count1--;
            count2--;
        }
    }
    
    count1 = 0;
    count2 = 0;
    
    nums.forEach((nums) => {
        if(first === nums) {
            count1++;    
        }
        if(second === nums) {
            count2++;    
        }
    });
    
    if(count1 > Math.floor(LENGTH/3)) {
        returnValue.push(first);   
    }
    if(count2 > Math.floor(LENGTH/3)) {
        returnValue.push(second);   
    }
    return returnValue;
};
