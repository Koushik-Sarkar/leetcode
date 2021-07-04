/************
* Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.
* 
* Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.
* Example 1:
*
* Input: nums = [5,3,2,4]
* Output: 0
* Explanation: Change the array [5,3,2,4] to [2,2,2,2].
* The difference between the maximum and minimum is 2-2 = 0.
* Example 2:

* Input: nums = [1,5,0,10,14]
* Output: 1
* Explanation: Change the array [1,5,0,10,14] to [1,1,0,1,1]. 
* The difference between the maximum and minimum is 1-0 = 1.
* Example 3:

* Input: nums = [6,6,0,1,1,4,6]
* Output: 2
********/

function minDifference(nums: number[]): number {
    const LENGTH = nums.length;
    if(LENGTH < 5) {
        return 0;
    }
    nums.sort((a,b) => a - b);
    let minValue = Math.abs(nums[LENGTH - 1] - nums[3]);
    let condition2 = Math.abs(nums[LENGTH - 4] - nums[0]);
    minValue = (minValue > condition2) ? condition2 : minValue;
    let condition3 = Math.abs(nums[LENGTH - 3] - nums[1]);
    minValue = (minValue > condition3) ? condition3 : minValue;
    let condition4 = Math.abs(nums[LENGTH - 2] - nums[2]);
    minValue = (minValue > condition4) ? condition4 : minValue;
    return minValue;
};
